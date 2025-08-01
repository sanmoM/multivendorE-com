import React from 'react'

export default function ColorPicker({setColor, color, selectedColor}) {
    return (
        <button
            key={color.name}
            onClick={() => setColor(color.name)}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selectedColor === color.name ? 'border-secondary ring-1 ring-blue-300' : '!border-secondary/50'
                }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
        >
            {/* Optional: Add a checkmark if selected */}
            {selectedColor === color.name && (
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
            )}
        </button>
    )
}
