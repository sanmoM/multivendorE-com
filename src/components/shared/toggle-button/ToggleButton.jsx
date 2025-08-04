import React from 'react'

export default function ToggleButton({ isEnable }) {
    return (
        <div
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${isEnable ? 'bg-primary' : 'bg-gray-300'}`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${isEnable ? 'translate-x-6' : ''}`}
            ></div>
        </div>
    )
}
