import { cn } from '@/utils/cn'
import React from 'react'

export default function PrimaryTitle({ title, className }) {
    return (
        <h2 className={cn("text-2xl font-bold text-primary mb-4", className)}>{title}</h2>
    )
}
