import { cn } from '@/utils/cn'
import React from 'react'

export default function Dropdown({ placeholder, containerClassName, isDropdownOpen, contents, contentsClassName }) {
    return (
        <div className={cn('relative', containerClassName)}>
            {placeholder}
            <div className={cn("absolute top-[calc(100%+0.5rem)] right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 !ring-secondary ring-opacity-5 focus:outline-none overflow-hidden", isDropdownOpen ? "opacity-100 " : "opacity-0 invisible", contentsClassName)}>
                {contents}
            </div>
        </div>
    )
}
