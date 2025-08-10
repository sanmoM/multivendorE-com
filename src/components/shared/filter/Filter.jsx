"use client";

import { useState } from "react";
import { LiaFilterSolid } from "react-icons/lia";

const filterButtons = [
    {
        name: 'Category',
        icon: <LiaFilterSolid className="h-5 w-5" />,
        options: ['Electronics', 'Fashion', 'Home Goods', 'Books'],
    },
    {
        name: 'Location',
        icon: (
            <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
            </svg>
        ),
        options: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    },
    {
        name: 'Rating',
        icon: (
            <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.691h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.924 10.102c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.691l1.519-4.674z"
                ></path>
            </svg>
        ),
        options: ['5 Stars', '4 Stars & Up', '3 Stars & Up'],
    },
];
export default function Filter() {

    const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open

    const handleButtonClick = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const handleOptionClick = (optionName, optionValue) => {
        setOpenDropdown(null); // Close dropdown after selection
    };
    return (
        <div>
            {/* mobile filter */}
            <div className=" font-sans lg:hidden mt-8">
                <div className="grid grid-cols-3 gap-4 w-full">
                    {filterButtons.map((button, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => handleButtonClick(button.name)}
                                className="flex items-center px-4 py-2 text-primary font-semibold rounded-full bg-tertiary transition-colors duration-200 focus:outline-none"
                            >
                                {button.icon}
                                <span>{button.name}</span>
                            </button>

                            {openDropdown === button.name && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
                                    {button.options.map((option, optIndex) => (
                                        <button
                                            key={optIndex}
                                            onClick={() => handleOptionClick(button.name, option)}
                                            className="block w-full text-left px-4 py-2 text-primary hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* desktop filter */}
            <div className="flex-wrap gap-4 w-full hidden lg:flex">
                {filterButtons.map((button, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => handleButtonClick(button.name)}
                            // Updated styling for lighter background, darker text, and dropdown arrow
                            className="flex items-center justify-between px-6 py-3 font-semibold rounded-2xl bg-tertiary text-primary transition-colors duration-200 focus:outline-none"
                        >
                            <span className="text-sm">{button.name}</span>
                            {/* Down arrow icon */}
                            <svg
                                className={`h-4 w-4 ml-2 transform transition-transform duration-200 ${openDropdown === button.name ? 'rotate-180' : 'rotate-0'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {openDropdown === button.name && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
                                {button.options.map((option, optIndex) => (
                                    <button
                                        key={optIndex}
                                        onClick={() => handleOptionClick(button.name, option)}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
