"use client";

import Button from '@/components/shared/button/Button';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useModalAction from '@/hooks/useModalAction';
import { setCheckoutItems } from '@/lib/redux/features/checkoutSlice';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from './components/cart-card/CartCard';
import useAxios from '@/hooks/useAxios';
import NoDataText from '@/components/shared/no-data-text/NoDataText';

const CartModalContents = ({ setIsCartOpen, setIsCheckoutOpen }) => {
    const axios = useAxios();
    const router = useRouter();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { handleCloseAllModals } = useModalAction();
    const dispatch = useDispatch();

    const [shipping, setShipping] = useState(0);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    // const [subtotal, setSubtotal] = useState(0);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const calculateTotal = () => {
        return (subtotal + shipping).toFixed(2);
    };

    useEffect(() => {
        axios.get('/deleviry/charge-show').then((res) => {
            setShipping(parseInt(res?.data?.charge[0]?.deleviry_charge));
        });
    }, [cartItems]);

    return (
        <div className=" w-full flex flex-col h-full ">
            {/* Header */}
            {/* <h1 className="text-2xl font-bold text-gray-800">Shopping Bag ({totalItems})</h1> */}
            {
                cartItems.length > 0 ? (
                    <>
                        <PrimaryTitle title={`Shopping Bag(${cartItems.length})`} />

                        {/* Totals Section */}
                        <div className="space-y-2 text-gray-700 my-6">
                            <div className="flex justify-between items-center text-secondary">
                                <p>Subtotal</p>
                                <p className='text-primary'>${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center text-secondary">
                                <p>Shipping</p>
                                <p className='text-primary'>${shipping.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center text-lg text-secondary">
                                <p>Total</p>
                                <p className='text-primary'>${calculateTotal()}</p>
                            </div>
                        </div>
                    </>
                ) : <NoDataText text={"No Items added to Cart"} />
            }

            {/* Product Items */}
            <div className="grow space-y-4 lg:space-y-6">
                {cartItems.map((item, index) => (
                    <CartCard item={item} key={index} />
                ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
                <Button text={"Checkout"} className={"bg-red-600 text-white w-full"} onClick={() => {
                    dispatch(setCheckoutItems(cartItems));
                    setIsCartOpen(false);
                    setTimeout(() => {
                        setIsCheckoutOpen(true);
                    }, 300);
                }}
                    disabled={cartItems.length === 0}
                />
                <Button text={"Buy Now"} className={"bg-transparent text-primary border !border-primary w-full"} onClick={() => {
                    handleCloseAllModals();
                    router.push("/shop");
                }} />
            </div>
        </div>
    );
};

export default CartModalContents;
