import { cn } from '@/utils/cn'
import React from 'react'

export default function SectionTitle({ title, className }) {
    return (
        <h1 className={cn('text-primary text-xl lg:text-3xl font-bold', className)}>{title}</h1>
    )
}
