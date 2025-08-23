"use client";

// import OrderSummary from '@/components/cart/oredr-summary/OrderSummary';
import CheckoutCard from '@/components/checkout/checkout-card/CheckoutCard';
import CheckoutForm from '@/components/checkout/checkout-form/CheckoutForm';
import { useSelector } from 'react-redux';

export default function page() {
    const cartItems = useSelector(state => state.cart);
    return (
        <div
            className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10 container lg:my-12 my-4 mx-auto md:px-4 px-2"
        >
            <div className="col-span-2">
                <div
                    className="border bg-[#fcfdfd] flex gap-3 border-t-2 rounded items-center border-t-black py-4 px-6"
                >
                    <i className="fa-solid fa-file"></i>
                    <p className="text-sm">
                        Returning customer?
                        <a className="text-red-600" href="">Click here to login</a>
                    </p>
                </div>
                <div
                    className="py-4 md:px-6 border px-4 bg-[#fcfdfd] flex mt-6 justify-between rounded items-center text-xs md:text-sm font-semibold text-gray-600"
                >
                    <h5>1 Item(S)</h5>
                    <div className="flex gap-4">
                        <h5>QUANTITY</h5>
                        <h5>PRICE</h5>
                    </div>
                </div>

                <div
                    className="text-[10px] sm:text-xs md:text-sm flex pt-6 pb-4 md:px-6 justify-between items-center font-semibold text-gray-700"
                >
                    <h5>Package 1 Of 1</h5>
                    <div className="flex items-center gap-1 md:gap-2">
                        <p className="font-normal">Shipping :</p>
                        <h5>$ 15.00 VIA FLAT RATE 5-8 DAYS</h5>
                    </div>
                </div>

                <hr />
                <div className="mt-3 py-4 md:py-6 overflow-x-auto">
                    <div className="w-full">
                        {
                            cartItems.map((item, index) => (
                                <CheckoutCard item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
                <CheckoutForm />
            </div>
        </div>
    )
}
