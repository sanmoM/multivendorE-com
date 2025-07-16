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
                    {/* <hr style="border: 1px solid #ccc; margin: 20px 10px" /> */}

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
                        {/* <hr style="border: 1px solid #ccc; margin: 20px 10px" /> */}
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
                    <div className="flex justify-between items-center mx-10">
                        <h4 className="font-bold text-[20px] mb-2 max-sm:text-[14px]">
                            Purchase History
                        </h4>

                        <div>
                            <select
                                className="px-5 max-sm:px-2 py-3 mb-2 max-sm:text-[12px] rounded-sm outline-none bg-white"
                                name="purchase_history"
                                id="history"
                            >
                                <option className="max-sm:text-[12px]" value="all">
                                    All History
                                </option>
                                <option className="max-sm:text-[12px]" value="Pending">
                                    Pending Orders
                                </option>
                                <option className="max-sm:text-[12px]" value="Processing">
                                    Processing Orders
                                </option>
                                <option className="max-sm:text-[12px]" value="Completed">
                                    Completed Orders
                                </option>
                                <option className="max-sm:text-[12px]" value="Cancelled">
                                    Cancelled Orders
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white p-3 mx-5 rounded-sm">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full table-auto  text-left min-w-[600px]">
                                <thead className="border-b border-dotted">
                                    <tr className="text-sm font-semibold text-gray-700">
                                        <th className="p-3 max-sm:text-[14px]">Details</th>
                                        <th className="p-3 max-sm:text-[14px]">Amount</th>
                                        <th className="p-3 max-sm:text-[14px]">Delivery Status</th>
                                        <th className="p-3 max-sm:text-[14px]">Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-dotted">
                                        <td className="p-3">
                                            <div>
                                                <h6 className="text-[14px] max-sm:text-[12px] text-gray-500">
                                                    Order ID: 20250616001110
                                                </h6>
                                                <p className="text-[12px] text-gray-500">
                                                    Packege: 20250616001110
                                                </p>
                                                <p className="text-[12px]">22 June 2025,</p>
                                            </div>
                                        </td>
                                        <td className="p-3 max-sm:text-[10px]">$50</td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-blue-600 px-5 transition duration-300 rounded-md bg-blue-100"
                                                >
                                                    Processing
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100"
                                                >
                                                    Paid
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-dotted">
                                        <td className="p-3">
                                            <div>
                                                <h6 className="text-[14px] max-sm:text-[12px] text-gray-500">
                                                    Order ID: 20250616001110
                                                </h6>
                                                <p className="text-[12px] text-gray-500">
                                                    Packege: 20250616001110
                                                </p>
                                                <p className="text-[12px]">22 June 2025,</p>
                                            </div>
                                        </td>
                                        <td className="p-3 max-sm:text-[10px]">$50</td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-blue-600 px-5 transition duration-300 rounded-md bg-blue-100"
                                                >
                                                    Processing
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100"
                                                >
                                                    Paid
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-dotted">
                                        <td className="p-3">
                                            <div>
                                                <h6 className="text-[14px] max-sm:text-[12px] text-gray-500">
                                                    Order ID: 20250616001110
                                                </h6>
                                                <p className="text-[12px] text-gray-500">
                                                    Packege: 20250616001110
                                                </p>
                                                <p className="text-[12px]">22 June 2025,</p>
                                            </div>
                                        </td>
                                        <td className="p-3 max-sm:text-[10px]">$50</td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-blue-600 px-5 transition duration-300 rounded-md bg-blue-100"
                                                >
                                                    Processing
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100"
                                                >
                                                    Paid
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-dotted">
                                        <td className="p-3">
                                            <div>
                                                <h6 className="text-[14px] max-sm:text-[12px] text-gray-500">
                                                    Order ID: 20250616001110
                                                </h6>
                                                <p className="text-[12px] text-gray-500">
                                                    Packege: 20250616001110
                                                </p>
                                                <p className="text-[12px]">22 June 2025,</p>
                                            </div>
                                        </td>
                                        <td className="p-3 max-sm:text-[10px]">$503</td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-yellow-600 px-5 transition duration-300 rounded-md bg-yellow-100"
                                                >
                                                    Pending
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-red-600 px-5 transition duration-300 rounded-md bg-red-100"
                                                >
                                                    Unpaid
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-dotted">
                                        <td className="p-3">
                                            <div>
                                                <h6 className="text-[14px] max-sm:text-[12px] text-gray-500">
                                                    Order ID: 20250616001110
                                                </h6>
                                                <p className="text-[12px] text-gray-500">
                                                    Packege: 20250616001110
                                                </p>
                                                <p className="text-[12px]">22 June 2025,</p>
                                            </div>
                                        </td>
                                        <td className="p-3 max-sm:text-[10px]">$250</td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100"
                                                >
                                                    Delivered
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100"
                                                >
                                                    Paid
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-dotted">
                                        <td className="p-3">
                                            <div>
                                                <h6 className="text-[14px] max-sm:text-[12px] text-gray-500">
                                                    Order ID: 20250616001110
                                                </h6>
                                                <p className="text-[12px] text-gray-500">
                                                    Packege: 20250616001110
                                                </p>
                                                <p className="text-[12px]">22 June 2025,</p>
                                            </div>
                                        </td>
                                        <td className="p-3 max-sm:text-[10px]">$50</td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-blue-600 px-5 transition duration-300 rounded-md bg-blue-100"
                                                >
                                                    Processing
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div>
                                                <button
                                                    className="mx-3 max-sm:text-[10px] py-2 text-[14px] text-green-600 px-5 transition duration-300 rounded-md bg-green-100"
                                                >
                                                    Paid
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-center gap-2 flex-wrap py-5">
                            <button className="px-4 py-2 text-sm">Prev</button>

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

                            <button className="px-4 py-2 text-sm">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
