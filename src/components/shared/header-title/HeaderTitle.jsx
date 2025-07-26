import { cn } from '@/utils/cn'
import React from 'react'

export default function HeaderTitle({title, className}) {
    return (
        <h1 className={cn("text-xl font-semibold text-gray-900", className)}>{title}</h1>
    )
}
