import React from 'react';
import { FaCakeCandles, FaChild, FaStore, FaUtensils } from "react-icons/fa6";

const categories = [
    {
        name: 'Food',
        icon: FaUtensils,
        color: 'text-red-500',
    },
    {
        name: 'Kids',
        icon: FaChild,
        color: 'text-blue-500',
    },
    {
        name: 'Cake',
        icon: FaCakeCandles,
        color: 'text-yellow-500',
    },
    {
        name: 'Restaurant',
        icon: FaStore,
        color: 'text-green-500',
    },
];

export default function Category() {
    return (
        <div className="max-w-[400px] md:hidden mx-auto container pt-6">
            <div className="flex px-4 justify-around md:justify-between lg:gap-4 flex-wrap">
                {categories.map((cat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-20 h-20 shadow-lg border border-green-400 cursor-pointer bg-gray-100 rounded-full flex items-center justify-center">
                            <cat.icon className={`fa-solid ${cat.iconClass} ${cat.color} text-3xl`} />
                        </div>
                        <p className="text-sm md:text-base text-gray-600 mt-2">{cat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
