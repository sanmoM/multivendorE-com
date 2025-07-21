"use client";

import AccountSideBar from '@/components/shared/AccountSideBar/AccountSideBar';
import MobileAccountSideBar from '@/components/shared/AccountSideBar/MobileAccountSideBar';
import Pagination from '@/components/shared/pagination/Pagination';
import ProductCard from '@/components/shared/product-card/ProductCard'
import { products } from '@/data'
import React, { useState } from 'react'

export default function page() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
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
                    {
                        products.map((item, index) => (
                            <ProductCard item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="bg-white p-3 mx-5 rounded-sm">
                <Pagination totalPages={5} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
