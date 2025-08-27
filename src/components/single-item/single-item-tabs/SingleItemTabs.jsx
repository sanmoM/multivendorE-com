"use client";

import TabButton from '@/components/shared/tab-button/TabButton';
import { useState } from 'react';

const tabs = [
    { name: 'Description', value: 'description' },
    { name: 'Variants', value: 'variants' },
    { name: 'Cake Flavors', value: 'cake-flavors' },
    { name: 'Delivery', value: 'delivery' },
    { name: 'Reviews', value: 'reviews' },
];

export default function SingleItemTabs({ description }) {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (value) => {
        setActiveTab(value);

        const section = document.getElementById(value);
        if (section) {
            const yOffset = -115; // 👈 adjust this (negative = stop earlier, e.g. for sticky header)
            const y =
                section.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className="mt-10 lg:w-[70%]">
            <div className="border-b border-gray-200">
                <div className="flex justify-between lg:justify-start lg:space-x-8">
                    {tabs.map((tab, index) => (
                        <div key={index}>
                            <TabButton
                                activeTab={activeTab}
                                setActiveTab={handleTabClick} // 🔑 pass custom handler
                                text={tab.name}
                                value={tab.value}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Sections */}
            <p
                className="text-primary mt-4 lg:w-[95%]"
                id="description"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    );
}
