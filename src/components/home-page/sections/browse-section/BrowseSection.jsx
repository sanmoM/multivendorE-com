'use client';

import Link from "next/link";
import { useState } from "react";
import { CgCoffee } from "react-icons/cg";
import { PiBowlFood } from "react-icons/pi";
import TabButton from "./components/TabButton";
import CategoryTabContents from "./components/tab-components/CategoryTabContents";
import ShopTabContents from "./components/tab-components/ShopTabContents";
import { resellers, shops } from "@/data";
import ResellerTabContents from "./components/tab-components/ResellerTabContents";

const tabItems = {
    category: [
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "#"
        },
    ],
}

const tabs = [
    {
        text: 'Category',
        value: 'category'
    },
    {
        text: 'Shop',
        value: 'shop'
    },
    {
        text: 'Reseller',
        value: 'reseller'
    }
]

export default function BrowseSection() {

    const [activeTab, setActiveTab] = useState('category');

    return (
        <div className="mt-2 md:mt-8 max-w-[calc(1280px+2rem)] mx-auto">
            {/* Tabs Section */}
            <div className="flex justify-around border-b !border-secondary mb-6 pb-1 lg:pb-4">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.value}
                        text={tab.text}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        value={tab.value}
                    />
                ))}
            </div>



            {
                activeTab === 'category' && <CategoryTabContents category={tabItems[activeTab]} />
            }

            {
                activeTab === 'shop' && <ShopTabContents shops={shops} />
            }

            {
                activeTab === 'reseller' && <ResellerTabContents resellers={resellers} />
            }
        </div>
    );
}

