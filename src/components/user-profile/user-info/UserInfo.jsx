import React from 'react'

export default function UserInfo() {
    return (
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
    )
}
