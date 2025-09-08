import React from 'react'

export default function IncreaseDecreaseButtons({ value, setValue, maxQuantity }) {
    // console.log(maxQuantity, "maxQuantity")
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={() => {
                    if (value > 1) {
                        setValue(value - 1)
                    }
                }}
                className="h-10 w-10 bg-tertiary rounded-full aspect-square hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-semibold"
            >
                –
            </button>
            {
                value
            }
            <button
                onClick={() => {
                    if (maxQuantity) {
                        if (value < maxQuantity) {
                            setValue(value + 1)
                        }
                    } else {
                        setValue(value + 1)
                    }
                }}
                className="h-10 w-10 bg-tertiary rounded-full aspect-square hover:bg-gray-200 transition-colors duration-200 text-gray-700 font-semibold"
            >
                +
            </button>
        </div>
    )
}
