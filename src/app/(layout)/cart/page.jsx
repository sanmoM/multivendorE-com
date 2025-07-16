import React from 'react'

export default function page() {
    return (
        <div
            className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10 container mx-auto md:px-4 px-2"
        >
            <div className="col-span-2">
                <div
                    className="py-3 md:py-4 px-3 md:px-6 border bg-[#fcfdfd] mt-6 rounded text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 grid grid-cols-5 md:grid-cols-6 items-center"
                >
                    <h5 className="col-span-2">Item</h5>
                    <h5 className="text-center hidden md:block">Price</h5>
                    <h5 className="text-center">Quantity</h5>
                    <h5 className="text-center">Subtotal</h5>
                    <h5 className="text-center">Remove</h5>
                </div>

                <div className="mt-2 space-y-3">
                    <div
                        className="bg-white border rounded-md p-3 grid grid-cols-5 md:grid-cols-6 items-center text-[10px] sm:text-xs md:text-sm"
                    >
                        <div className="col-span-2 flex gap-2 md:gap-4 items-center">
                            <img
                                className="w-10 h-10 object-cover rounded"
                                src="https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg"
                                alt="Product"
                            />
                            <h4 className="leading-tight font-semibold text-gray-700">
                                Minimalistic Living Room...
                            </h4>
                        </div>

                        <p className="text-center font-semibold hidden md:block">$105.00</p>

                        <div className="flex justify-center items-center gap-2">
                            <button
                                className="w-5 h-5 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="w-5 text-center">1</span>
                            <button
                                className="w-5 h-5 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>

                        <p className="text-center font-semibold text-gray-700">$105.00</p>

                        <button className="text-red-500 text-center hover:underline">✖</button>
                    </div>

                    <div
                        className="bg-white border rounded-md p-3 grid grid-cols-5 md:grid-cols-6 items-center text-[10px] sm:text-xs md:text-sm"
                    >
                        <div className="col-span-2 flex gap-2 md:gap-4 items-center">
                            <img
                                className="w-10 h-10 object-cover rounded"
                                src="https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg"
                                alt="Product"
                            />
                            <h4 className="leading-tight font-semibold text-gray-700">
                                Minimalistic Living Room...
                            </h4>
                        </div>
                        <p className="text-center font-semibold hidden md:block">$105.00</p>
                        <div className="flex justify-center items-center gap-2">
                            <button
                                className="w-5 h-5 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="w-5 text-center">1</span>
                            <button
                                className="w-5 h-5 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                        <p className="text-center font-semibold text-gray-700">$105.00</p>
                        <button className="text-red-500 text-center hover:underline">✖</button>
                    </div>
                </div>
                <div className="mt-6 flex justify-between flex-wrap">
                    <a
                        className="text-black cursor-pointer hover:bg-black hover:text-white text-sm font-semibold py-3 px-6 rounded border border-black transition"
                    >
                        CONTINUE SHIPPING
                    </a>
                    <a
                        href="/checkOutPage.html"
                        className="bg-black cursor-pointer text-white hover:border hover:border-black text-sm font-semibold py-3 px-6 rounded hover:bg-white hover:text-black transition"
                    >
                        PROCEED TO CHECKOUT
                    </a>
                </div>
            </div>

            <div className="col-span-1 mt-6 lg:mt-0 p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-3">
                    <div className="text-sm flex justify-between items-center">
                        <p>Subtotal</p>
                        <p className="text-gray-600">+$ 133.00</p>
                    </div>
                    <div className="text-sm flex justify-between items-center">
                        <div>
                            <p>Shipping Charge</p>
                            <p className="text-gray-600 text-[10px] font-light">
                                PACKAGE WISE SHIPPING CHANGE
                            </p>
                        </div>
                        <p className="text-gray-600">+$ 30.00</p>
                    </div>
                    <div className="text-sm flex justify-between items-center">
                        <p>Discount</p>
                        <p className="text-gray-600">+$ 2.00</p>
                    </div>
                    <div className="text-sm flex justify-between items-center">
                        <p>VAT/TAX/GST</p>
                        <p className="text-gray-600">+$ 5.00</p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-sm text-gray-500">TOTAL</p>
                        <p className="font-bold">$ 167.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
