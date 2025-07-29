import { cn } from '@/utils/cn'
import React from 'react'

export default function Button({ text, className }) {
    return (
        <button className={cn("bg-orange-400 text-primary text-sm lg:text-base font-semibold py-2 lg:py-3 px-4 rounded-full", className)}>
            {text}
        </button>
    )
}
