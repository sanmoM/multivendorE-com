import { cn } from '@/utils/cn'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={cn(`max-w-[1550px] mx-auto px-4 lg:px-0 py-6 lg:py-10`, className)}>{children}</div>
    )
}
