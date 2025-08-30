import { cn } from '@/utils/cn'
import React from 'react'

export default function Button({ text, className, onClick, type="button" }) {
    return (
        <button className={cn("bg-orange-400 text-primary text-sm lg:text-base font-semibold py-2.5 lg:py-3 px-6 lg:px-8 rounded-full", className)} onClick={onClick}>
            {text}
        </button>
    )
}
