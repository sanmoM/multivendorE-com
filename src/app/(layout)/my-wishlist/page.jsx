import React from 'react'

export default function page() {
    return (
        <div>
            <div className="mx-auto px-5 overflow-hidden max-sm:block hidden">
                <i
                    id="dashboardBtn"
                    className="fa-solid dash-filter text-[20px] fa-bars cursor-pointer"
                ></i>

                <div
                    id="dashboardContent"
                    className="my-5 bg-white w-[300px] absolute transition-all duration-300 -translate-x-full hidden left-0 p-5 rounded-md ease-in-out sm:hidden overflow-y-auto z-50"
                >
                    <ul className="flex flex-col gap-5">
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/profile-dashboard.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-table-columns text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">Dashboard</p>
                                </div>
                            </a>
                            <span className="inline-block h-4 border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/purchase_history.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-table-columns text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">Purchase History</p>
                                </div>
                            </a>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/my_wishList.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-heart text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">My Wishlist</p>
                                </div>
                            </a>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/my_order.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-star text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">My Order</p>
                                </div>
                            </a>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
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
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid text-[14px] fa-arrow-right-from-bracket"></i>
                                <p className="text-[14px] font-semibold">Logout</p>
                            </div>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="flex mx-auto max-sm:flex-col max-md:flex-col justify-center gap-5 py-10 max-w-7xl max-sm:w-full"
            >
                <div className="lg:w-[500px] max-sm:w-full max-md:w-full gap-5 p-3">
                    <div className="p-5 rounded-md bg-white border">
                        <div className="p-5">
                            <div className="flex gap-3 flex-col items-center py-2">
                                <img
                                    src="https://i.ibb.co/PzDTBmqf/g2juhlin4zfmrdjvbhen.webp"
                                    className="w-[100px] h-[100px] rounded-full border border-gray-300"
                                    alt="User Avatar"
                                />

                                <div className="text-center">
                                    <h4 className="text-[16px]">Md Mamun Khan</h4>
                                    <p className="text-[12px]">khan@mamun.com</p>

                                    <div
                                        className="px-5 py-2 bg-black mt-1 rounded-md hover:text-black transition hover:bg-white duration-300 text-white flex items-center justify-center gap-2"
                                    >
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
                                className="w-full text-[14px] rounded-md uppercase md:px-10 py-3 hover:text-black hover:bg-white bg-black text-white transition duration-300"
                            >
                                Convert As Seller
                            </button>
                        </div>
                    </div>
                    <div className="p-5 bg-white border rounded-md my-5 max-sm:hidden">
                        <ul className="flex flex-col gap-5">
                            <li
                                className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                            >
                                <a href="/profile-dashboard.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-table-columns text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">Dashboard</p>
                                    </div>
                                </a>
                                <span className="inline-block h-4 border-r-2 border-r-red-600"></span>
                            </li>
                            <li
                                className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                            >
                                <a href="/purchase_history.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-table-columns text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">Purchase History</p>
                                    </div>
                                </a>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>
                            <li
                                className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                            >
                                <a href="/my_wishList.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-heart text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">My Wishlist</p>
                                    </div>
                                </a>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>
                            <li
                                className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                            >
                                <a href="/my_order.html">
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-solid fa-star text-[14px]"></i>
                                        <p className="text-[14px] font-semibold">My Order</p>
                                    </div>
                                </a>
                                <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                            </li>

                            <li
                                className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                            >
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
                            <li
                                className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                            >
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
                    <div
                        className="flex justify-between max-sm:flex-col max-sm:items-start px-2 items-center"
                    >
                        <h5 className="text-[14px] max-sm:px-3 max-sm:text-[12px]">
                            Showing 1 - 8 Of 12 Results
                        </h5>

                        <div className="flex gap-2">
                            <select
                                className="px-5 max-sm:px-2 py-3 text-[14px] max-sm:text-[12px] rounded-sm outline-none bg-white"
                                name="purchase_history"
                                id="history"
                            >
                                <option className="text-[14px] max-sm:text-[12px]" value="8Items">
                                    Show's 8 Items
                                </option>
                                <option className="text-[14px] max-sm:text-[12px]" value="16Items">
                                    Show's 16 Items
                                </option>
                                <option className="text-[14px] max-sm:text-[12px]" value="20Items">
                                    Show's 20 Items
                                </option>
                                <option className="text-[14px] max-sm:text-[12px]" value="30Items">
                                    Show's 30 Items
                                </option>
                            </select>
                            <select
                                className="px-5 max-sm:px-2 py-3 text-[14px] max-sm:text-[12px] rounded-sm outline-none bg-white"
                                name="item"
                                id="item"
                            >
                                <option className="text-[14px] max-sm:text-[12px]" value="new">
                                    New
                                </option>
                                <option className="text-[14px] max-sm:text-[12px]" value="old">
                                    Old
                                </option>
                                <option className="text-[14px] max-sm:text-[12px]" value="priceHL">
                                    Price(high to low)
                                </option>
                                <option className="text-[14px] max-sm:text-[12px]" value="priceLH">
                                    Price(low to high)
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full px-2 py-2">
                        <div className="grid grid-cols-3 gap-4">
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631]"
                                        ><i className="fa-solid fa-trash"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631]"
                                        ><i className="fa-solid fa-trash"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631]"
                                        ><i className="fa-solid fa-trash"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631]"
                                        ><i className="fa-solid fa-trash"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-3 mx-5 rounded-sm">
                        <div
                            className="flex items-center justify-center max-sm:gap-1 gap-2 flex-wrap py-5"
                        >
                            <button className="px-3 py-2 text-sm">Prev</button>

                            <button className="px-4 py-2 text-sm bg-black text-white rounded-full">
                                1
                            </button>
                            <button
                                className="px-4 py-2 text-sm bg-gray-200 hover:bg-black hover:text-white rounded-full"
                            >
                                2
                            </button>
                            <button
                                className="px-4 py-2 text-sm bg-gray-200 hover:bg-black rounded-full hover:text-white"
                            >
                                3
                            </button>

                            <button className="px-3 py-2 text-sm">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
