import StatsCard from '@/components/dashboard/stats-card/StatsCard'
import WishlistCard from '@/components/dashboard/wishlist-card/WishlistCard'
import AccountSideBar from '@/components/shared/AccountSideBar/AccountSideBar'
import MobileAccountSideBar from '@/components/shared/AccountSideBar/MobileAccountSideBar'
import PurchaseCard from '@/components/shared/purchase-table/components/purchase-card/PurchaseCard'
import PurchaseTable from '@/components/shared/purchase-table/PurchaseTable'
import { purchaseHistory, statistics, wishlist } from '@/data'

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
                    {/* <div className="grid max-sm:grid-cols-1 max-md:grid-cols-1 lg:grid-cols-2 p-5 gap-5">

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
                            <PurchaseTable
                                titles={['Details', 'Amount', 'Delivery Status']}
                                items={purchaseHistory}
                                Card={PurchaseCard}

                            />
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
                                {
                                    wishlist.map((item, index) => (
                                        <WishlistCard item={item} key={index} />
                                    ))
                                }
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}
