import React from 'react'

export default function page() {
    return (
        <div>  <div className="mx-auto px-5 overflow-hidden max-sm:block hidden">
            <i id="dashboardBtn" className="fa-solid dash-filter text-[20px] fa-bars cursor-pointer"></i>

            <div id="dashboardContent"
                className="my-5 bg-white w-[300px] absolute transition-all duration-300 -translate-x-full hidden left-0 p-5 rounded-md ease-in-out sm:hidden overflow-y-auto z-50">
                <ul className="flex flex-col gap-5">
                    <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                        <a href="/profile-dashboard.html">
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-table-columns text-[14px]"></i>
                                <p className="text-[14px] font-semibold">Dashboard</p>
                            </div>
                        </a>
                        <span className="inline-block h-4 border-r-2 border-r-red-600"></span>
                    </li>
                    <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                        <a href="/purchase_history.html">
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-table-columns text-[14px]"></i>
                                <p className="text-[14px] font-semibold">Purchase History</p>
                            </div>
                        </a>
                        <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                    </li>
                    <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                        <a href="/my_wishList.html">
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-heart text-[14px]"></i>
                                <p className="text-[14px] font-semibold">My Wishlist</p>
                            </div>
                        </a>
                        <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                    </li>
                    <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                        <a href="/my_order.html">
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-star text-[14px]"></i>
                                <p className="text-[14px] font-semibold">My Order</p>
                            </div>
                        </a>
                        <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                    </li>
                    <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                        <a href="/user_profile.html">
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-circle-user text-[14px]"></i>
                                <p className="text-[14px] font-semibold">My Account</p>
                            </div>
                        </a>
                        <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                    </li>
                </ul>
                <hr style={
                    {
                        "border": "1px solid #ccc",
                        "margin": "20px 10px"
                    }
                } />

                <ul className="flex flex-col gap-3">
                    <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                        <div className="flex gap-3 items-center">
                            <i className="fa-solid text-[14px] fa-arrow-right-from-bracket"></i>
                            <p className="text-[14px] font-semibold">Logout</p>
                        </div>
                        <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                    </li>
                </ul>
            </div>
        </div>

            <div className="flex mx-auto max-sm:flex-col max-md:flex-col gap-5 py-10 max-w-7xl max-sm:w-full">
                <div className="lg:w-[500px] max-sm:w-full max-md:w-full gap-5 p-3">
                    <div className="p-5 rounded-md bg-white border">
                        <div className="p-5">
                            <div className="flex gap-3 flex-col items-center py-2">
                                <img src="https://i.ibb.co/PzDTBmqf/g2juhlin4zfmrdjvbhen.webp"
                                    className="w-[100px] h-[100px] rounded-full border border-gray-300" alt="User Avatar" />

                                <div className="text-center">
                                    <h4 className="text-[16px]">Md Mamun Khan</h4>
                                    <p className="text-[12px]">khan@mamun.com</p>

                                    <div
                                        className="px-5 py-2 bg-black mt-1 rounded-md hover:text-black transition hover:bg-white duration-300 text-white flex items-center justify-center gap-2">
                                        <button className="text-[12px] flex items-center gap-2">
                                            <i className="fa-solid fa-pen-to-square text-sm"></i>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-1">
                            <button
                                className="w-full text-[14px] rounded-md uppercase md:px-10 py-3 hover:text-black hover:bg-white bg-black text-white transition duration-300">
                                Convert As Seller
                            </button>
                        </div>
                    </div>
                    <div className="p-5 bg-white border rounded-md my-5 max-sm:hidden">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                                <a href="/profile-dashboard.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-table-columns text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">Dashboard</p>
                                    </div>
                                </a>
                                <span className="inline-block h-4 border-r-2 border-r-red-600"></span>
                            </li>
                            <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                                <a href="/purchase_history.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-table-columns text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">Purchase History</p>
                                    </div>
                                </a>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>
                            <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                                <a href="/my_wishList.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-heart text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">My Wishlist</p>
                                    </div>
                                </a>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>
                            <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                                <a href="/my_order.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-star text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">My Order</p>
                                    </div>
                                </a>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>

                            <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                                <a href="/user_profile.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-circle-user text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">My Account</p>
                                    </div>
                                </a>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>
                        </ul>
                                            <hr style={
                        {
                            "border": "1px solid #ccc",
                            "margin": "20px 10px"
                        }
                    } />

                        <ul className="flex flex-col gap-3">
                            <li className="flex items-center hover:text-red-600 transition duration-300 justify-between">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid text-[14px] fa-arrow-right-from-bracket"></i>
                                    <p className="text-[14px] font-semibold">Logout</p>
                                </div>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-2 m-4 text-center">
                        <div
                            className="bg-white shadow-lg border hover:bg-black hover:text-white transition duration-300 rounded-md p-5 max-sm:p-2 flex flex-col items-center justify-center">
                            <div
                                className="w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-full relative bg-gray-200 flex items-center justify-center">
                                <i className="fa-solid fa-star text-2xl max-sm:text-xl text-[black]"></i>
                            </div>

                            <h5 className="text-[14px] max-sm:text-[12px] mt-5 max-sm:mt-2">
                                Total Order
                            </h5>
                            <strong className="text-xl max-sm:text-sm">347</strong>
                        </div>
                        <div
                            className="bg-white border shadow-lg hover:bg-black hover:text-white transition duration-300 rounded-md p-5 flex flex-col items-center justify-center max-sm:p-2">
                            <div
                                className="w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-full relative bg-gray-200 flex items-center justify-center">
                                <i className="fa-solid fa-heart max-sm:text-xl text-[black] text-2xl"></i>
                            </div>

                            <h5 className="text-[14px] max-sm:text-[12px] max-sm:mt-2 mt-5">
                                My Wishlist
                            </h5>
                            <strong className="text-xl max-sm:text-sm">14</strong>
                        </div>
                        <div
                            className="bg-white border shadow-lg hover:bg-black hover:text-white transition duration-300 rounded-md p-5 flex flex-col items-center justify-center max-sm:p-2">
                            <div
                                className="w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-full relative bg-gray-200 flex items-center justify-center">
                                <i className="fa-solid fa-rotate-left max-sm:text-xl text-[black] text-2xl"></i>
                            </div>

                            <h5 className="text-[14px] max-sm:text-[12px] max-sm:mt-2 mt-5">
                                Refund Success
                            </h5>
                            <strong className="text-xl max-sm:text-sm">7</strong>
                        </div>

                        <div
                            className="bg-white shadow-lg border hover:bg-black hover:text-white transition duration-300 rounded-md p-5 flex flex-col items-center justify-center max-sm:p-2">
                            <div
                                className="w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-full relative bg-gray-200 flex items-center justify-center">
                                <i className="fa-solid fa-check text-[black] max-sm:text-xl text-2xl"></i>
                            </div>

                            <h5 className="text-[14px] max-sm:text-[12px] max-sm:mt-2 mt-5">
                                Completed Order
                            </h5>
                            <strong className="text-xl max-sm:text-sm">5</strong>
                        </div>
                        <div
                            className="bg-white shadow-lg border hover:bg-black hover:text-white transition duration-300 rounded-md p-5 max-sm:p-2 flex flex-col items-center justify-center">
                            <div
                                className="w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-full relative bg-gray-200 flex items-center justify-center">
                                <i className="fa-solid fa-tags text-2xl max-sm:text-xl text-[black]"></i>
                            </div>

                            <h5 className="text-[14px] max-sm:text-[12px] mt-5 max-sm:mt-2">
                                Coupon Used
                            </h5>
                            <strong className="text-xl max-sm:text-sm">3</strong>
                        </div>

                        <div
                            className="bg-white shadow-lg border hover:bg-black hover:text-white transition duration-300 rounded-md p-5 flex flex-col items-center justify-center max-sm:p-2">
                            <div
                                className="w-14 h-14 max-sm:w-12 max-sm:h-12 rounded-full relative bg-gray-200 flex items-center justify-center">
                                <i className="fa-solid fa-cart-shopping max-sm:text-xl text-[black] text-2xl"></i>
                            </div>

                            <h5 className="text-[14px] max-sm:text-[12px] max-sm:mt-2 mt-5">
                                Product in Cart
                            </h5>
                            <strong className="text-xl max-sm:text-sm">3</strong>
                        </div>
                    </div>
                    <div className="grid max-sm:grid-cols-1 max-md:grid-cols-1 lg:grid-cols-2 p-5 gap-5">
                        <div className="shadow-lg px-5 max-sm:px-2 py-5 border">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-[20px] max-sm:text-[14px]">
                                    Purchase History
                                </h3>
                                <button
                                    className="px-3 py-1 text-[14px] max-sm:text-[12px] hover:bg-black hover:text-white duration-300 transition font-semibold bg-gray-200 rounded-sm">
                                    See All
                                </button>
                            </div>
                            <div className="border border-gray-300 flex justify-between gap-3 items-center my-5 font-bold p-3 text-[12px]">
                                <p>Details</p>
                                <p>Amount</p>
                                <p>Status</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h6 className="text-[14px] text-gray-400">
                                            Order ID: 20250616001110
                                        </h6>
                                        <p className="text-[12px]">Packege: 20250616001110</p>
                                        <p className="text-[12px]">22 June 2025,</p>
                                    </div>
                                    <p className="max-sm:text-[12px]">$40.22</p>
                                    <div>
                                        <button
                                            className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-blue-600 px-5 transition duration-300 rounded-md bg-blue-100">
                                            Processing
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h6 className="text-[14px] text-gray-400">
                                            Order ID: 20250616001110
                                        </h6>
                                        <p className="text-[12px]">Packege: 20250616001110</p>
                                        <p className="text-[12px]">22 June 2025,</p>
                                    </div>
                                    <p className="max-sm:text-[12px]">$40.22</p>
                                    <div>
                                        <button
                                            className="mx-3 max-sm:text-[10px] text-[14px] py-2 text-red-600 px-5 transition duration-300 rounded-md bg-red-100">
                                            Cancelled
                                        </button>
                                    </div>
                                </div>

                                <hr />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h6 className="text-[14px] text-gray-400">
                                            Order ID: 20250616001110
                                        </h6>
                                        <p className="text-[12px]">Packege: 20250616001110</p>
                                        <p className="text-[12px]">22 June 2025,</p>
                                    </div>
                                    <p className="max-sm:text-[12px]">$40.22</p>
                                    <div>
                                        <button
                                            className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100">
                                            Completed
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h6 className="text-[14px] text-gray-400">
                                            Order ID: 20250616001110
                                        </h6>
                                        <p className="text-[12px]">Packege: 20250616001110</p>
                                        <p className="text-[12px]">22 June 2025,</p>
                                    </div>
                                    <p className="max-sm:text-[12px]">$40.22</p>
                                    <div>
                                        <button
                                            className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100">
                                            Completed
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h6 className="text-[14px] text-gray-400">
                                            Order ID: 20250616001110
                                        </h6>
                                        <p className="text-[12px]">Packege: 20250616001110</p>
                                        <p className="text-[12px]">22 June 2025,</p>
                                    </div>
                                    <p className="max-sm:text-[12px]">$40.22</p>
                                    <div>
                                        <button
                                            className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100">
                                            Completed
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h6 className="text-[14px] text-gray-400">
                                            Order ID: 20250616001110
                                        </h6>
                                        <p className="text-[12px]">Packege: 20250616001110</p>
                                        <p className="text-[12px]">22 June 2025,</p>
                                    </div>
                                    <p className="max-sm:text-[12px]">$40.22</p>
                                    <div>
                                        <button
                                            className="mx-3 py-2 text-[14px] max-sm:text-[10px] text-yellow-600 px-5 transition duration-300 rounded-md bg-yellow-100">
                                            Pending
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg py-5 max-sm:px-2 border p-5">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-[20px] max-sm:text-[14px]">
                                    My Wishlist
                                </h3>
                                <button
                                    className="px-3 py-1 max-sm:text-[12px] text-[14px] hover:bg-black hover:text-white duration-300 transition font-semibold bg-gray-200 rounded-sm">
                                    See All
                                </button>
                            </div>
                            <hr className="mt-5" />
                            <div className="mt-5">
                                <div className="flex gap-5 max-sm:gap-[5px] items-center justify-between">
                                    <div className="w-[80px] h-[80px] bg-gray-500 rounded-sm">
                                        <img src=" https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp "
                                            className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="">
                                            <a className="max-sm:text-[12px]" href="">Product Name</a>
                                        </h4>
                                        <p className="max-sm:text-[12px]">$100</p>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-[14px] max-sm:text-[12px] max-sm:px-3 max-sm:py-2 px-5 py-2 bg-black rounded-md hover:text-black transition hover:bg-white duration-300 text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <div className="flex gap-5 max-sm:gap-2 items-center justify-between">
                                    <div className="w-[80px] h-[80px] bg-gray-500 rounded-sm">
                                        <img src=" https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp "
                                            className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h5 className="max-sm:text-[12px]">Product Name</h5>
                                        <p className="max-sm:text-[12px]">$100</p>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-[14px] max-sm:text-[12px] max-sm:px-3 max-sm:py-2 px-5 py-2 bg-black rounded-md hover:text-black transition hover:bg-white duration-300 text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <div className="flex gap-5 max-sm:gap-2 items-center justify-between">
                                    <div className="w-[80px] h-[80px] bg-gray-500 rounded-sm">
                                        <img src=" https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp "
                                            className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h5 className="max-sm:text-[12px]">Product Name</h5>
                                        <p className="max-sm:text-[12px]">$100</p>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-[14px] max-sm:text-[12px] max-sm:px-3 max-sm:py-2 px-5 py-2 bg-black rounded-md hover:text-black transition hover:bg-white duration-300 text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <div className="flex gap-5 max-sm:gap-2 justify-between items-center">
                                    <div className="w-[80px] h-[80px] bg-gray-500 rounded-sm">
                                        <img src=" https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp "
                                            className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h5 className="max-sm:text-[12px]">Product Name</h5>
                                        <p className="max-sm:text-[12px]">$100</p>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-[14px] max-sm:text-[12px] max-sm:px-3 max-sm:py-2 px-5 py-2 bg-black rounded-md hover:text-black transition hover:bg-white duration-300 text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <div className="flex gap-5 max-sm:gap-2 justify-between items-center">
                                    <div className="w-[80px] h-[80px] bg-gray-500 rounded-sm">
                                        <img src=" https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp "
                                            className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h5 className="max-sm:text-[12px]">Product Name</h5>
                                        <p className="max-sm:text-[12px]">$100</p>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-[14px] max-sm:text-[12px] max-sm:px-3 max-sm:py-2 px-5 py-2 bg-black rounded-md hover:text-black transition hover:bg-white duration-300 text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <hr className="my-2" />
                                <div className="flex gap-5 max-sm:gap-2 items-center justify-between">
                                    <div className="w-[80px] h-[80px] bg-gray-500 rounded-sm">
                                        <img src=" https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp "
                                            className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h5 className="max-sm:text-[12px]">Product Name</h5>
                                        <p className="max-sm:text-[12px]">$100</p>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-[14px] max-sm:text-[12px] max-sm:px-3 max-sm:py-2 px-5 py-2 bg-black rounded-md hover:text-black transition hover:bg-white duration-300 text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <hr className="my-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}
