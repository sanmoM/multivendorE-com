import { cn } from '@/utils/cn'
import React from 'react'

export default function ItemCard({ item, titleClassName, subtitleClassName }) {
    return (
        <div
            onClick={item.handleClick || null}
            className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
        >
            <div className="p-3 bg-gray-100 rounded-lg">
                {item.icon}
            </div>
            <div>
                <h4 className={cn("font-semibold text-gray-800", titleClassName)}>{item.title}</h4>
                <p className={cn("text-sm text-secondary", subtitleClassName)}>{item.subtitle}</p>
            </div>
        </div>
    )
}
