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
                <div className="w-full">
                    <div className="flex justify-between max-sm:flex-col m-4">
                        <div className="space-x-2">
                            <button
                                className="bg-black text-white px-5 mt-1 max-sm:py-2 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[12px] font-bold hover:bg-white hover:text-black"
                            >
                                All
                            </button>
                            <button
                                className="hover:bg-black hover:text-white mt-1 max-sm:py-2 px-5 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[12px] font-bold bg-white text-black"
                            >
                                To Pay
                            </button>
                            <button
                                className="hover:bg-black hover:text-white mt-1 max-sm:py-2 px-5 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[12px] font-bold bg-white text-black"
                            >
                                To Ship
                            </button>
                            <button
                                className="hover:bg-black hover:text-white mt-1 px-5 max-sm:py-2 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[12px] font-bold bg-white text-black"
                            >
                                To Receive
                            </button>
                        </div>

                        <div>
                            <select
                                className="px-5 max-sm:px-2 py-3 max-sm:text-[12px] rounded-sm outline-none bg-white"
                                name="purchase_history"
                                id="history"
                            >
                                <option className="max-sm:text-[12px]" value="all">
                                    Select Orders
                                </option>
                                <option className="max-sm:text-[12px]" value="5_orders">
                                    Last 5 Orders
                                </option>
                                <option className="max-sm:text-[12px]" value="10_orders">
                                    Last 10 Orders
                                </option>
                                <option className="max-sm:text-[12px]" value="20_orders">
                                    Last 20 Orders
                                </option>
                                <option className="max-sm:text-[12px]" value="30_orders">
                                    Last 30 Orders
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white mx-5 my-5 rounded-sm">
                        <div className="border shadow-md w-full pb-5">
                            <div
                                className="grid gap-3 px-5 py-3 items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b border-spacing-2 border-dashed"
                            >
                                <div>
                                    <div className="text-sm space-y-1">
                                        <h5 className="text-[14px] max-sm:text-[12px] font-medium">
                                            Order ID:
                                            <span className="font-normal text-gray-400"
                                            >20250623001113</span
                                            >
                                        </h5>
                                        <p className="text-[14px] max-sm:text-[12px]">
                                            Order Date:
                                            <span className="font-normal text-gray-400">2025-06-23</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm space-y-1">
                                        <h5 className="text-[14px] max-sm:text-[12px] font-medium">
                                            Status:
                                            <span className="font-normal text-green-400">Completed</span>
                                        </h5>
                                        <p className="text-[14px] max-sm:text-[12px]">
                                            Order Amount:
                                            <span className="font-normal text-gray-400">$1230.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm space-y-1">
                                        <h5 className="text-[14px] max-sm:text-[12px] font-medium">
                                            Paid By:
                                            <span className="font-normal text-gray-400">Card</span>
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <button
                                            className="text-black bg-gray-300 px-5 lg:py-3 max-sm:px-3 py-1 md:py-1 max-sm:mt-3 duration-300 transition rounded-sm lg:text-[16px] text-[12px] font-bold hover:bg-black hover:text-white"
                                        >
                                            Download Invoice
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mx-4 md:mx-5 flex sm:flex-wrap max-md:flex-row items-center justify-between max-sm:gap-2 gap-5 p-3 my-3 mb-5 border rounded-md"
                            >
                                <div
                                    className="flex items-center gap-4 max-sm:gap-2 w-full sm:w-auto max-sm:flex-col"
                                >
                                    <div
                                        className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden rounded"
                                    >
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639abee15eef1.webp"
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3
                                        className="text-[16px] max-md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                </div>

                                <div
                                    className="flex gap-5 max-sm:text-[14px] w-full sm:w-auto max-sm:gap-1 max-sm:flex-col"
                                >
                                    <h3
                                        className="text-[16px] md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                    <h3 className="font-medium">
                                        Qty: <span className="font-normal text-gray-400">2</span>
                                    </h3>
                                    <h5 className="font-medium">
                                        Amount: <span className="font-normal text-gray-400">$500</span>
                                    </h5>
                                </div>
                            </div>
                            <div
                                className="mx-4 md:mx-5 flex sm:flex-wrap max-md:flex-row items-center justify-between max-sm:gap-2 gap-5 p-3 my-3 mb-5 border rounded-md"
                            >
                                <div
                                    className="flex items-center gap-4 max-sm:gap-2 w-full sm:w-auto max-sm:flex-col"
                                >
                                    <div
                                        className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden rounded"
                                    >
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639abee15eef1.webp"
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3
                                        className="text-[16px] max-md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                </div>

                                <div
                                    className="flex gap-5 max-sm:text-[14px] w-full sm:w-auto max-sm:gap-1 max-sm:flex-col"
                                >
                                    <h3
                                        className="text-[16px] md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                    <h3 className="font-medium">
                                        Qty: <span className="font-normal text-gray-400">2</span>
                                    </h3>
                                    <h5 className="font-medium">
                                        Amount: <span className="font-normal text-gray-400">$500</span>
                                    </h5>
                                </div>
                            </div>
                            <div
                                className="mx-4 md:mx-5 flex sm:flex-wrap max-md:flex-row items-center justify-between max-sm:gap-2 gap-5 p-3 my-3 mb-5 border rounded-md"
                            >
                                <div
                                    className="flex items-center gap-4 max-sm:gap-2 w-full sm:w-auto max-sm:flex-col"
                                >
                                    <div
                                        className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden rounded"
                                    >
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639abee15eef1.webp"
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3
                                        className="text-[16px] max-md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                </div>

                                <div
                                    className="flex gap-5 max-sm:text-[14px] w-full sm:w-auto max-sm:gap-1 max-sm:flex-col"
                                >
                                    <h3
                                        className="text-[16px] md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                    <h3 className="font-medium">
                                        Qty: <span className="font-normal text-gray-400">2</span>
                                    </h3>
                                    <h5 className="font-medium">
                                        Amount: <span className="font-normal text-gray-400">$500</span>
                                    </h5>
                                </div>
                            </div>
                            <div
                                className="mx-4 md:mx-5 flex sm:flex-wrap max-md:flex-row items-center justify-between max-sm:gap-2 gap-5 p-3 my-3 mb-5 border rounded-md"
                            >
                                <div
                                    className="flex items-center gap-4 max-sm:gap-2 w-full sm:w-auto max-sm:flex-col"
                                >
                                    <div
                                        className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden rounded"
                                    >
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639abee15eef1.webp"
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3
                                        className="text-[16px] max-md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                </div>

                                <div
                                    className="flex gap-5 max-sm:text-[14px] w-full sm:w-auto max-sm:gap-1 max-sm:flex-col"
                                >
                                    <h3
                                        className="text-[16px] md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                    <h3 className="font-medium">
                                        Qty: <span className="font-normal text-gray-400">2</span>
                                    </h3>
                                    <h5 className="font-medium">
                                        Amount: <span className="font-normal text-gray-400">$500</span>
                                    </h5>
                                </div>
                            </div>
                            <div
                                className="mx-4 md:mx-5 flex sm:flex-wrap max-md:flex-row items-center justify-between max-sm:gap-2 gap-5 p-3 my-3 mb-5 border rounded-md"
                            >
                                <div
                                    className="flex items-center gap-4 max-sm:gap-2 w-full sm:w-auto max-sm:flex-col"
                                >
                                    <div
                                        className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden rounded"
                                    >
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639abee15eef1.webp"
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3
                                        className="text-[16px] max-md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                </div>

                                <div
                                    className="flex gap-5 max-sm:text-[14px] w-full sm:w-auto max-sm:gap-1 max-sm:flex-col"
                                >
                                    <h3
                                        className="text-[16px] md:hidden max-sm:text-[14px] font-semibold"
                                    >
                                        ProductName
                                    </h3>
                                    <h3 className="font-medium">
                                        Qty: <span className="font-normal text-gray-400">2</span>
                                    </h3>
                                    <h5 className="font-medium">
                                        Amount: <span className="font-normal text-gray-400">$500</span>
                                    </h5>
                                </div>
                            </div>

                            <div className="flex justify-end max-sm:justify-start gap-5 mx-5">
                                <div className="">
                                    <button
                                        className="text-white bg-black max-sm:px-3 px-5 py-3 max-sm:mt-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[12px] font-bold hover:bg-white hover:text-black"
                                    >
                                        Order Details
                                    </button>
                                </div>
                                {/* <!-- <div className="">
                                    <button
                                        className="text-black bg-gray-300 max-sm:px-3 px-5 py-3 max-sm:mt-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[12px] font-bold hover:bg-red-500 hover:text-white"
                                    >
                                        Cancel Order
                                    </button>
                                </div> --> */}
                            </div>
                        </div>
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
    )
}
