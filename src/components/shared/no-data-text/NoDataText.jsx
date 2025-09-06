import { cn } from '@/utils/cn'
import React from 'react'

export default function NoDataText({ text, className }) {
    return (
        <h2 className={cn('text-primary font-semibold text-xl h-[20vh] flex items-center justify-center', className)}><span>{text}</span></h2>
    )
}
