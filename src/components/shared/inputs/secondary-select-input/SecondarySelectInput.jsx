"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { IoChevronDown } from "react-icons/io5";

export default function SecondarySelectInput({
    label = "Select an option",
    value,
    setValue,
    placeholder = "Choose a country",
    options = [],
    containerClassName,
    selectedOption,
}) {
    return (
        <div className={cn("lg:max-w-xs", containerClassName)}>
            {label && (
                <label
                    htmlFor="secondary-select"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    {label}
                </label>
            )}

            <div className="relative">
                <select
                    id="secondary-select"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="appearance-none bg-tertiary border border-gray-300 text-secondary text-sm 
                     rounded-lg  block w-full p-4 lg:p-2.5 
                     placeholder:text-secondary outline-0 focus:ring-0 "
                >
                    <option value="" disabled selected className="text-primary">
                        {selectedOption?.label || placeholder}
                    </option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>

                {/* Custom Arrow */}
                <IoChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                    size={18}
                />
            </div>
        </div>
    );
}
