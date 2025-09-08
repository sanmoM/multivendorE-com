"use client";

import Button from '@/components/shared/button/Button';
import HorizontalCard from '@/components/shared/horizontal-card/HorizontalCard';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAuthAxios from '@/hooks/useAuthAxios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setCheckoutItems } from '@/lib/redux/features/checkoutSlice';
import { removeAllFromCart } from '@/lib/redux/features/cartSlice';

const CheckoutModalContents = ({ handleClose }) => {
    const user = useSelector((state) => state?.user?.user);
    const dispatch = useDispatch();
    const checkoutItems = useSelector(
        (state) => state?.checkout?.checkoutItems || []
    );
    const [isAddressOpen, setIsAddressOpen] = useState(false);

    const subtotal = checkoutItems.reduce(
        (acc, item) => acc + item.price * item.quantity * (item.weight || 1),
        0
    );

    const [shipping] = useState(5);
    const [taxes] = useState(3);

    const router = useRouter();
    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    const calculateTotal = () => {
        return (subtotal + shipping + taxes).toFixed(2);
    };

    // ✅ React Query Mutations
    // ✅ Cake Checkout Mutation
    const cakeCheckoutMutation = useMutation({
        mutationFn: async (items) => {
            const res = await axios.post('/pay', {
                shipping_address: `${user?.street}, ${user?.city}, ${user?.state}, ${user?.country}`,
                payment_percentage:
                    items[0]?.deliveryOption === 'full-payment' ? 100 : 10,
                items,
            });
            return res.data;
        },
        onSuccess: (data) => {
            // Invalidate queries
            queryClient.invalidateQueries({ queryKey: ['single-item'] });
            queryClient.invalidateQueries({ queryKey: ['related-products'] });
            queryClient.invalidateQueries({ queryKey: ['my-orders'] }); // ✅ added here

            const redirectUrl = data?.url;
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
            handleClose();
        },
        onError: () => {
            toast.error('Something went wrong, please try again later');
        },
    });

    // ✅ General Product Checkout Mutation
    const generalProductCheckoutMutation = useMutation({
        mutationFn: async (items) => {
            if (items[0]?.deliveryOption === "full-payment") {
                return await axios.post('/place-order-generalproduct-payment', {
                    shipping_address: `${user?.street}, ${user?.city}, ${user?.state}, ${user?.country}`,
                    payment_percentage: 100,
                    items,
                });
            } else {
                return await axios.post('/place-order-generalproduct', {
                    shipping_address: `${user?.street}, ${user?.city}, ${user?.state}, ${user?.country}`,
                    currency: "BDT",
                    items,
                });
            }
        },
        onSuccess: () => {
            // Invalidate queries
            queryClient.invalidateQueries({ queryKey: ['single-item'] });
            queryClient.invalidateQueries({ queryKey: ['my-orders'] }); // ✅ added here

            dispatch(setCheckoutItems([]));
            dispatch(removeAllFromCart());
            toast.success('Order Placed Successfully!');
            handleClose();
        },
        onError: () => {
            toast.error('Something went wrong, please try again later');
        },
    });


    // ✅ Checkout Handler
    const handleCheckout = () => {
        if (checkoutItems[0]?.type === 'product') {
            const items = [
                {
                    product_id: checkoutItems[0]?.id,
                    quantity: checkoutItems[0]?.quantity || 1,
                    slice: checkoutItems[0]?.slices,
                    flavor: checkoutItems[0]?.flavor,
                    color: checkoutItems[0]?.color,
                    weight: `${checkoutItems[0]?.weight}kg`,
                    notes: checkoutItems[0]?.notes,
                    type: 'product',
                },
            ];
            cakeCheckoutMutation.mutate(items);
        } else {
            const items = checkoutItems?.map((item) => ({
                product_id: parseInt(item?.id),
                quantity: item?.quantity || 1,
                deliveryOption: item?.deliveryOption || "full-payment",
            }));
            generalProductCheckoutMutation.mutate(items);
        }
    };

    return (
        <div className="w-full h-full flex flex-col">
            <div className="space-y-8 grow">
                {/* Delivery Address Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsAddressOpen(!isAddressOpen)}
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-primary">Delivery Address</h3>
                            <p className="text-sm text-secondary">{`${user?.street || "No street"}, ${user?.city || "No city"}, ${user?.state || "No state"}, ${user?.country || "No country"}`}</p>
                        </div>
                    </div>
                </div>

                {/* Shopping Bag */}
                <div>
                    <PrimaryTitle title={'Shopping Bag'} />
                    <div className="grow space-y-4 lg:space-y-6">
                        {checkoutItems.map((item, index) =>
                            item?.type === 'product' ? (
                                <HorizontalCard
                                    key={index}
                                    item={{
                                        id: item.id,
                                        image: item?.image || item?.product_image,
                                        title: item?.name,
                                        text2: `Quantity: ${item.quantity}`,
                                        text3: `weight: ${item.weight} (kg)`,
                                        text4: `Total: $${item.price * item.quantity * (item.weight || 1)}`,
                                    }}
                                />
                            ) : (
                                <HorizontalCard
                                    key={index}
                                    item={{
                                        id: item.id,
                                        image: item?.image || item?.product_image,
                                        title: item?.name,
                                        text2: `Quantity: ${item.quantity}`,
                                        text3: `Total: $${item.price * item.quantity}`,
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>

                {/* Order Summary */}
                <div>
                    <PrimaryTitle title={'Order Summary'} />
                    <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between items-center">
                            <p className="text-secondary">Subtotal</p>
                            <p className="text-primary">${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-secondary">Delivery</p>
                            <p className="text-primary">$5.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-secondary">Taxes</p>
                            <p className="text-primary">$3.75</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-secondary">Total</p>
                            <p className="text-primary">${calculateTotal()}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Button
                text={
                    cakeCheckoutMutation.isPending ||
                        generalProductCheckoutMutation.isPending
                        ? 'Placing Order...'
                        : 'Place Order'
                }
                className={'bg-red-600 text-white w-full mt-4'}
                onClick={handleCheckout}
                disabled={
                    cakeCheckoutMutation.isPending ||
                    generalProductCheckoutMutation.isPending
                }
            />
        </div>
    );
};

export default CheckoutModalContents;
