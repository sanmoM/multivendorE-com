"use client"

import { useState } from "react";

export default function MobileAccountSideBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mx-auto px-5 overflow-hidden max-sm:block hidden">
            <i
                id="dashboardBtn"
                onClick={() => setIsOpen((prev) => !prev)}
                className="fa-solid dash-filter text-[20px] fa-bars cursor-pointer"
            ></i>

            <div
                id="dashboardContent"
                className={`my-5 bg-white w-[300px] absolute transition-all duration-300 left-0 p-5 rounded-md ease-in-out sm:hidden overflow-y-auto z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
                {/* <hr style="border: 1px solid #ccc; margin: 20px 10px" /> */}
                <hr style={
                    {
                        border: '1px solid #ccc',
                        margin: '20px 10px'
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
    )
}
