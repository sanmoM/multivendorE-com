import { cn } from '@/utils/cn'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export default function NavbarSearchbar({ inputClassName }) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className={cn("pl-12 pr-4 py-2 rounded-lg bg-[#F0EBEB] border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200 placeholder:text-secondary w-full", inputClassName)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearchOutline className='w-6 h-6 text-secondary' />
            </div>
        </div>
    )
}
