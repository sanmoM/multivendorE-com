import React from 'react'

export default function OptionBox({ value, setValue, currentValue, label }) {
    return (
        <button
            onClick={() => setValue(value)}
            className={`px-4 py-2 border rounded-md shadow-sm transition-colors duration-200 text-sm lg:text-base ${currentValue === value
                ? 'border-secondary bg-tertiary  text-secondary'
                : '!border-secondary/50 bg-white text-primary hover:bg-gray-50'
                }`}
        >
            {label}
        </button>
    )
}
