'use client';

import Link from "next/link";
import { useState } from "react";
import { CgCoffee } from "react-icons/cg";
import { PiBowlFood } from "react-icons/pi";
import TabButton from "./components/TabButton";

const tabItems = {
    category: [
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category"
        },
    ],
    shop: [
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category/food"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category/food"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category/food"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
        },
    ],
    reseller: [
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category/food"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category/food"
        },
        {
            name: 'Food', icon: <PiBowlFood className="h-6 w-6" />, path: "/category/food"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
        },
        {
            name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />, path: "/category/cakes"
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

            {/* Category Items Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
                {tabItems[activeTab].map((category, index) => (
                    <Link
                        href={category.path}
                        key={index}
                        className="flex items-center gap-4 px-4 py-5 border-2 border-gray-300 rounded-xl hover:bg-gray-200 transition-colors duration-200"
                    >
                        {category.icon}
                        <span className="text-primary font-bold">{category.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

