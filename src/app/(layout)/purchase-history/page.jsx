"use client"

import AccountSideBar from '@/components/shared/AccountSideBar/AccountSideBar'
import MobileAccountSideBar from '@/components/shared/AccountSideBar/MobileAccountSideBar'
import SelectInput from '@/components/shared/inputs/select-input/SelectInput'
import Pagination from '@/components/shared/pagination/Pagination'
import PurchaseCard from '@/components/shared/purchase-table/components/purchase-card/PurchaseCard'
import PurchaseTable from '@/components/shared/purchase-table/PurchaseTable'
import { purchaseHistory } from '@/data'
import { useState } from 'react'

export default function page() {
    const [history, setHistory] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <div>
            <MobileAccountSideBar />

            <div
                className="flex mx-auto max-sm:flex-col max-md:flex-col justify-center gap-5 py-10 max-w-7xl max-sm:w-full"
            >
                <AccountSideBar />
                <div className="w-full">
                    <div className="flex justify-between items-center mx-10">
                        <h4 className="font-bold text-[20px] mb-2 max-sm:text-[14px]">
                            Purchase History
                        </h4>

                        <div className='mb-4'>
                            {/* <select
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
                            </select> */}
                            <SelectInput options={[{ value: "all", label: "All History" }, { value: "Pending", label: "Pending Orders" }, { value: "Processing", label: "Processing Orders" }, { value: "Completed", label: "Completed Orders" }, { value: "Cancelled", label: "Cancelled Orders" }]} value={history} setValue={setHistory} inputClass={"shadow-none"} />
                        </div>
                    </div>

                    <div className="bg-white p-3 mx-5 rounded-sm">
                        {/* <div className="w-full overflow-x-auto">
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
                        </div> */}
                        <PurchaseTable
                            titles={['Details', 'Amount', 'Delivery Status', 'Payment Status']}
                            items={purchaseHistory}
                            Card={PurchaseCard}
                            purchaseCardProps={{ hasPaymentStatus: true }}
                        />
                        {/* <div className="flex items-center justify-center gap-2 flex-wrap py-5">
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
                        </div> */}
                        <Pagination currentPage={1} totalPages={5} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}
