"use client";

import Tabs from '@/components/shared/Tabs/Tabs';
import { useState } from 'react';



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


    const tabs = [
        { label: 'Description', value: 'description', onClick: handleTabClick },
        { label: 'Variants', value: 'variants', onClick: handleTabClick },
        { label: 'Cake Flavors', value: 'cake-flavors', onClick: handleTabClick },
        { label: 'Delivery', value: 'delivery', onClick: handleTabClick },
        { label: 'Reviews', value: 'reviews', onClick: handleTabClick },
    ];


    return (
        <div className="mt-10 hide-scrollbar lg:w-fit">
            <Tabs tabs={tabs} activeTab={activeTab} className={"gap-4 lg:gap-10"} />

            <p
                className="text-primary mt-4 lg:w-[95%]"
                id="description"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    );
}
