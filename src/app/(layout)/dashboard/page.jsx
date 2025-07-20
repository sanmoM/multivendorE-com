import PurchaseHistoryCard from '@/components/dashboard/purchase-history-card/PurchaseHistoryCard'
import StatsCard from '@/components/dashboard/stats-card/StatsCard'
import WishlistCard from '@/components/dashboard/wishlist-card/WishlistCard'
import AccountSideBar from '@/components/shared/AccountSideBar/AccountSideBar'
import MobileAccountSideBar from '@/components/shared/AccountSideBar/MobileAccountSideBar'
import { purchaseHistory, statistics, wishlist } from '@/data'
import React from 'react'

export default function page() {
    return (
        <div>
            <MobileAccountSideBar />

            <div className="flex mx-auto max-sm:flex-col max-md:flex-col gap-5 py-10 max-w-7xl max-sm:w-full">
                <AccountSideBar />
                <div className="w-full">
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-2 m-4 text-center">
                        {
                            statistics.map((stat, index) => (
                                <StatsCard stats={stat} key={index} />
                            ))
                        }
                    </div>
                    <div className="grid max-sm:grid-cols-1 max-md:grid-cols-1 lg:grid-cols-2 p-5 gap-5">

                        {/* purchase history */}
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
                                {
                                    purchaseHistory.map((item, index) => (
                                        <PurchaseHistoryCard item={item} key={index} />
                                    ))
                                }
                            </div>
                        </div>

                        {/* wishlist */}
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
                                {/* <div className="flex gap-5 max-sm:gap-[5px] items-center justify-between">
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
                                <hr className="my-2" /> */}
                                {
                                    wishlist.map((item, index) => (
                                        <WishlistCard item={item} key={index} />
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
