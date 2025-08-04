import { cn } from '@/utils/cn'
import React from 'react'

export default function SecondaryTitle({ title, className }) {
    return (
        <h3 className={cn("text-lg font-semibold text-primary mb-3", className)}>{title}</h3>
    )
}
