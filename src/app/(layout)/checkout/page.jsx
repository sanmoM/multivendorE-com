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

                {/* <div className="border mx-auto rounded px-4 py-8 w-full">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">
                        Contact Information
                    </h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1"
                        >Email *</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                        />
                    </div>
                    <div className="mb-6 flex items-center gap-2">
                        <input type="checkbox" id="subscribe" className="accent-black" />
                        <label for="subscribe" className="text-sm text-gray-700"
                        >Email me with news and offers</label>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >Name *</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >Address *</label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >Phone *</label>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >Country *</label>
                            <select
                                className="w-full border rounded px-4 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
                            >
                                <option selected>Bangladesh</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>Nepal</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >State *</label>
                            <select
                                className="w-full border rounded px-4 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
                            >
                                <option selected>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Khulna</option>
                                <option>Rajshahi</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >City *</label>
                            <select
                                className="w-full border rounded px-4 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
                            >
                                <option selected>Select from options</option>
                                <option>Panthapath</option>
                                <option>Dhanmondi</option>
                                <option>Uttara</option>
                                <option>Mirpur</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >Postal Code / Pin Code *</label>
                            <input
                                type="text"
                                placeholder="Postal code"
                                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1"
                            >Note</label>
                            <textarea
                                rows="4"
                                placeholder="Note"
                                className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-2">
                        <input type="checkbox" id="terms" className="accent-black" />
                        <label for="terms" className="text-sm text-gray-700"
                        >I agree with the terms and conditions.</label>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <button
                            className="bg-black text-white hover:border hover:border-black text-sm font-semibold py-3 px-6 rounded hover:bg-white hover:text-black transition"
                        >
                            CONTINUE TO SHIPPING
                        </button>
                        <button
                            className="text-black text-sm font-semibold py-3 px-6 rounded border border-black transition"
                        >
                            RETURN TO CART
                        </button>
                    </div>
                </div> */}
                <CheckoutForm />
            </div>
            {/* order summary */}
            {/* <OrderSummary items={cartItems} /> */}
        </div>
    )
}
