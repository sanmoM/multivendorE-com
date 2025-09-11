import { cn } from '@/utils/cn'
import React from 'react'

export default function SecondaryButton({ isLoading, onClick, text, className }) {
    return (
        <>
            {
                isLoading ? (
                    <div
                        className="flex items-center gap-4 px-4 py-3 justify-center border-2 border-gray-300 rounded-xl animate-pulse"
                    >
                        <div className="h-4 bg-gray-200 rounded w-20 lg:w-32" />
                    </div>
                ) : (
                    <button
                        onClick={onClick}
                        className={cn("flex items-center gap-4 px-4 py-3  justify-center border-2 border-gray-300 rounded-xl hover:bg-gray-200 transition-colors duration-200", className)}
                    >
                        {/* {category?.icon} */}
                        <span className="text-xs lg:text-base text-primary font-bold text-nowrap">{text}</span>
                    </button>
                )
            }
        </>
    )
}
