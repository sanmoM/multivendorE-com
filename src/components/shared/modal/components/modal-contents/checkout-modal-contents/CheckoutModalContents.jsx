// import Button from '@/components/shared/button/Button';
// import HorizontalCard from '@/components/shared/horizontal-card/HorizontalCard';
// import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
// import useAuthAxios from '@/hooks/useAuthAxios';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { useSelector } from 'react-redux';

// const CheckoutModalContents = ({ handleClose }) => {
//     const user = useSelector((state) => state?.user);
//     console.log(user, "user")
//     const checkoutItems = useSelector((state) => state?.checkout?.checkoutItems || []);
//     const [isAddressOpen, setIsAddressOpen] = useState(false);
//     const [isTimeOpen, setIsTimeOpen] = useState(false);
//     const [isPaymentOpen, setIsPaymentOpen] = useState(false);
//     const subtotal = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity * (item.weight || 1), 0);
//     const [shipping, setShipping] = useState(5);
//     const [taxes, setTaxes] = useState(3);
//     const router = useRouter();


//     console.log(checkoutItems, "checkoutItems")

//     const axios = useAuthAxios()

//     const calculateTotal = () => {
//         return (subtotal + shipping + taxes).toFixed(2);
//     };

//     const handleCheckout = () => {
//         if (checkoutItems[0]?.type === "product") {
//             handleCakeCheckout()
//         } else {
//             handleGeneralProductCheckout()
//         }
//     }

//     const handleCakeCheckout = async () => {

//         const items = [
//             {
//                 product_id: checkoutItems[0]?.id,
//                 quantity: checkoutItems[0]?.quantity || 1,
//                 slice: checkoutItems[0]?.slices,
//                 flavor: checkoutItems[0]?.flavor,
//                 color: checkoutItems[0]?.color,
//                 weight: `${checkoutItems[0]?.weight}kg`,
//                 notes: checkoutItems[0]?.notes,
//                 type: "product"
//             }
//         ]
//         try {
//             const res = await axios.post("/pay", {
//                 shipping_address: `${user?.street}, ${user?.city}, ${user?.state}, ${user?.country}`,
//                 payment_percentage: items[0]?.type === "product" ? items[0]?.deliveryOption === "full-payment" ? 100 : 10 : 100,
//                 items: items
//             })
//             const redirectUrl = res?.data?.url;
//             window.location.href = redirectUrl;
//         } catch (error) {
//             toast.error("Something went wrong, please try again later");
//         } finally {
//             handleClose()
//         }
//     }

//     const handleGeneralProductCheckout = async () => {
//         let items = checkoutItems?.map((item) => {
//             return {
//                 product_id: parseInt(item?.id),
//                 quantity: item?.quantity || 1,
//             }
//         })
//         try {
//             const res = await axios.post("/place-order-generalproduct", {
//                 shipping_address: `${user?.street}, ${user?.city}, ${user?.state}, ${user?.country}`,
//                 payment_percentage: 100,
//                 items: items
//             })
//             // const redirectUrl = res?.data?.url;
//             // window.location.href = redirectUrl;
//         } catch (error) {
//             toast.error("Something went wrong, please try again later");
//         } finally {
//             handleClose()
//         }
//     }

//     return (
//         <div className="w-full h-full flex flex-col">

//             <div className='space-y-8 grow'>
//                 {/* Delivery Address Dropdown */}
//                 <div>
//                     <div
//                         className="flex items-center justify-between cursor-pointer"
//                         onClick={() => setIsAddressOpen(!isAddressOpen)}
//                     >
//                         <div className="flex-1">
//                             <h3 className="font-semibold text-primary">Delivery Address</h3>
//                             <p className="text-sm  text-secondary">Springfield, IL 62704</p>
//                             <p className="text-sm  text-secondary">123 Maple Street, Apt 4B</p>
//                         </div>
//                         <svg className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isAddressOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                         </svg>
//                     </div>
//                     {isAddressOpen && (
//                         <div className="mt-4 p-4 bg-gray-50 rounded-md">
//                             <p className="text-sm text-gray-700">This is a placeholder for the delivery address dropdown </p>
//                         </div>
//                     )}
//                 </div>

//                 {/* Delivery Time Dropdown */}
//                 <div>
//                     <div
//                         className="flex items-center justify-between cursor-pointer"
//                         onClick={() => setIsTimeOpen(!isTimeOpen)}
//                     >
//                         <div className="flex-1">
//                             <h3 className="font-semibold text-primary">Delivery Time</h3>
//                             {/* <h4 className=>{item.name}</h4> */}
//                             <p className="text-sm  text-secondary">Tomorrow, 10:00 AM - 12:00 PM</p>
//                         </div>
//                         <svg className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isTimeOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                         </svg>
//                     </div>
//                     {isTimeOpen && (
//                         <div className="mt-4 p-4 bg-gray-50 rounded-md">
//                             <p className="text-sm text-gray-700">This is a placeholder for the delivery time dropdown </p>
//                         </div>
//                     )}
//                 </div>

//                 {/* Payment Method Dropdown */}
//                 <div>
//                     <div
//                         className="flex items-center justify-between cursor-pointer"
//                         onClick={() => setIsPaymentOpen(!isPaymentOpen)}
//                     >
//                         <div className="flex-1">
//                             <h3 className="font-semibold text-primary">Payment Method</h3>

//                             <p className="text-sm  text-secondary">Credit Card (**** 1234)</p>
//                         </div>
//                         <svg className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isPaymentOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                         </svg>
//                     </div>
//                     {isPaymentOpen && (
//                         <div className="mt-4 p-4 bg-gray-50 rounded-md">
//                             <p className="text-sm text-gray-700">This is a placeholder for the payment method dropdown </p>
//                         </div>
//                     )}
//                 </div>

//                 <div>
//                     <PrimaryTitle title={"Shopping Bag"} />
//                     <div className="grow space-y-4 lg:space-y-6">
//                         {checkoutItems.map((item, index) => (
//                             <>
//                                 {
//                                     item?.type === "product" ?
//                                         <HorizontalCard key={index} item={{ id: item.id, image: item?.image || item?.product_image, title: item?.name, text2: `Quantity: ${item.quantity}`, text3: `weight: ${item.weight} (kg)`, text4: `Total: $${item.price * item.quantity * (item.weight || 1)}` }} />
//                                         :
//                                         <HorizontalCard key={index} item={{ id: item.id, image: item?.image || item?.product_image, title: item?.name, text2: `Quantity: ${item.quantity}`, text3: `Total: $${item.price * item.quantity}` }} />
//                                 }
//                             </>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div>
//                     <PrimaryTitle title={"Order Summary"} />
//                     <div className="space-y-2 text-gray-700">
//                         <div className="flex justify-between items-center">
//                             <p className='text-secondary'>Subtotal</p>
//                             <p className='text-primary'>${subtotal.toFixed(2)}</p>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <p className='text-secondary'>Delivery</p>
//                             <p className='text-primary'>$5.00</p>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <p className='text-secondary'>Taxes</p>
//                             <p className='text-primary'>$3.75</p>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <p className='text-secondary'>Total</p>
//                             <p className='text-primary'>${calculateTotal()}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Button text={"Place Order"} className={"bg-red-600 text-white w-full mt-4"} onClick={handleCheckout} />
//         </div>
//     );
// };

// export default CheckoutModalContents;


"use client";

import Button from '@/components/shared/button/Button';
import HorizontalCard from '@/components/shared/horizontal-card/HorizontalCard';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAuthAxios from '@/hooks/useAuthAxios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { setCheckoutItems } from '@/lib/redux/features/checkoutSlice';
import { removeAllFromCart } from '@/lib/redux/features/cartSlice';

const CheckoutModalContents = ({ handleClose }) => {
    const user = useSelector((state) => state?.user);
    const dispatch = useDispatch();
    const checkoutItems = useSelector(
        (state) => state?.checkout?.checkoutItems || []
    );
    const [isAddressOpen, setIsAddressOpen] = useState(false);
    const [isTimeOpen, setIsTimeOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

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

    const handleCheckout = () => {
        if (checkoutItems[0]?.type === 'product') {
            handleCakeCheckout();
        } else {
            handleGeneralProductCheckout();
        }
    };

    const handleCakeCheckout = async () => {
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

        try {
            const res = await axios.post('/pay', {
                shipping_address: `${user?.street}, ${user?.city}, ${user?.state}, ${user?.country}`,
                payment_percentage:
                    items[0]?.deliveryOption === 'full-payment' ? 100 : 10,
                items,
            });

            // ✅ Invalidate queries after placing order
            queryClient.invalidateQueries({ queryKey: ['single-item'] });
            queryClient.invalidateQueries({ queryKey: ['related-products'] });

            const redirectUrl = res?.data?.url;
            window.location.href = redirectUrl;
        } catch (error) {
            toast.error('Something went wrong, please try again later');
        } finally {
            handleClose();
        }
    };

    const handleGeneralProductCheckout = async () => {
        const items = checkoutItems?.map((item) => ({
            product_id: parseInt(item?.id),
            quantity: item?.quantity || 1,
        }));

        try {
            await axios.post('/place-order-generalproduct', {
                shipping_address: `${user?.street}, ${user?.city}, ${user?.state}, ${user?.country}`,
                payment_percentage: 100,
                items,
            });

            // ✅ Invalidate queries after placing order
            queryClient.invalidateQueries({ queryKey: ['single-item'] });
            queryClient.invalidateQueries({ queryKey: ['related-products'] });
            dispatch(setCheckoutItems([]));
            dispatch(removeAllFromCart());
        } catch (error) {
            toast.error('Something went wrong, please try again later');
        } finally {
            handleClose();
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
                            <p className="text-sm text-secondary">Springfield, IL 62704</p>
                            <p className="text-sm text-secondary">123 Maple Street, Apt 4B</p>
                        </div>
                        <svg
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isAddressOpen ? 'rotate-90' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </div>
                    {isAddressOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700">
                                This is a placeholder for the delivery address dropdown
                            </p>
                        </div>
                    )}
                </div>

                {/* Delivery Time Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsTimeOpen(!isTimeOpen)}
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-primary">Delivery Time</h3>
                            <p className="text-sm text-secondary">
                                Tomorrow, 10:00 AM - 12:00 PM
                            </p>
                        </div>
                        <svg
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isTimeOpen ? 'rotate-90' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </div>
                    {isTimeOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700">
                                This is a placeholder for the delivery time dropdown
                            </p>
                        </div>
                    )}
                </div>

                {/* Payment Method Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-primary">Payment Method</h3>
                            <p className="text-sm text-secondary">Credit Card (**** 1234)</p>
                        </div>
                        <svg
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isPaymentOpen ? 'rotate-90' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </div>
                    {isPaymentOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700">
                                This is a placeholder for the payment method dropdown
                            </p>
                        </div>
                    )}
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
                text={'Place Order'}
                className={'bg-red-600 text-white w-full mt-4'}
                onClick={handleCheckout}
            />
        </div>
    );
};

export default CheckoutModalContents;
