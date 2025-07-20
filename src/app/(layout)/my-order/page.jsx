"use client";
import AccountSideBar from '@/components/shared/AccountSideBar/AccountSideBar'
import MobileAccountSideBar from '@/components/shared/AccountSideBar/MobileAccountSideBar'
import SelectInput from '@/components/shared/inputs/select-input/SelectInput';
import TabButton from '@/components/shared/tab-button/TabButton';
import React, { useState } from 'react'
const tabs = [
    {
        name: 'all',
        label: 'All',
    },
    {
        name: 'to_pay',
        label: 'To Pay',
    },
    {
        name: 'to_ship',
        label: 'To Ship',
    },
    {
        name: 'to_receive',
        label: 'To Receive',
    },
];

const selectOptions = [
    { label: 'Select Orders', value: 'all' },
    { label: 'Last 5 Orders', value: '5_orders' },
    { label: 'Last 10 Orders', value: '10_orders' },
    { label: 'Last 20 Orders', value: '20_orders' },
    { label: 'Last 30 Orders', value: '30_orders' },
]

export default function page() {
    const [activeTab, setActiveTab] = useState('all');
    const [lastOrders, setLastOrders] = useState("all");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <MobileAccountSideBar />
            <div
                className="flex mx-auto max-sm:flex-col max-md:flex-col justify-center gap-5 py-10 max-w-7xl max-sm:w-full"
            >
                <AccountSideBar />
                <div className="w-full">
                    <div className="flex justify-between max-sm:flex-col m-4">
                        <div className="flex items-center gap-2 flex-wrap">
                            {
                                tabs.map((tab) => (
                                    <TabButton value={tab.name} label={tab.label} handleTabClick={handleTabClick} activeTab={activeTab} />
                                ))
                            }
                            <div className='lg:hidden inline'>
                                <SelectInput inputClass={"shadow-none"} options={selectOptions} value={lastOrders} setValue={setLastOrders} />
                            </div>
                        </div>

                        <div className='hidden lg:block'>
                            <SelectInput inputClass={"shadow-none"} options={selectOptions} value={lastOrders} setValue={setLastOrders} />
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
