import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

export default function SelectInput({ options, value, setValue, icon, placeholder = "Select" }) {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <div className="relative w-full">
            <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center justify-center gap-4 px-4 py-2 text-primary font-semibold rounded-full bg-tertiary transition-colors duration-200 focus:outline-none w-full"
            >
                <span>{value?.label || placeholder}</span>
                {icon ? icon : <IoIosArrowDown className={`h-4 w-4 ${openDropdown ? 'rotate-180' : ''}`} />}
            </button>

            {openDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {/* <button className="flex items-center px-4 py-2 disabled:text-gray-400 text-primary font-semibold bg-tertiary transition-colors duration-200 focus:outline-none w-full">
                        <span>{placeholder}</span>
                    </button> */}
                    {options?.map((option, optIndex) => (
                        <button
                            key={optIndex}
                            onClick={() => {
                                setValue(option)
                                setOpenDropdown(false)
                            }}
                            className="block w-full text-left px-4 py-2 text-primary hover:bg-gray-100 transition-colors duration-200"
                        >
                            {option?.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
