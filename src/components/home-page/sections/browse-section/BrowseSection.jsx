'use client';

import { cn } from "@/utils/cn";
import { useState } from "react";
import { CgCoffee } from "react-icons/cg";
import { PiBowlFood } from "react-icons/pi";
import TabButton from "./components/TabButton";

const categories = [
    {
        name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />
    },
    {
        name: 'Food', icon: <PiBowlFood className="h-6 w-6" />
    },
    {
        name: 'Food', icon: <PiBowlFood className="h-6 w-6" />
    },
    {
        name: 'Food', icon: <PiBowlFood className="h-6 w-6" />
    },
    {
        name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />
    },
    {
        name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />
    },
    {
        name: 'Cakes', icon: <CgCoffee className="h-6 w-6" />
    },
];

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
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-4 px-4 py-5 border-2 border-gray-300 rounded-xl hover:bg-gray-200 transition-colors duration-200"
                    >
                        {category.icon}
                        <span className="text-primary font-bold">{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

