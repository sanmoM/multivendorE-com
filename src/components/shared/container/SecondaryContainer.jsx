import { cn } from '@/utils/cn'
import React from 'react'

export default function SecondaryContainer({children, className}) {
    return (
        <div className={cn('max-w-[1550px] mx-auto px-4', className)}>
            {children}
        </div>
    )
}
