import { cn } from '@/utils/cn'
import Image from 'next/image'
import React from 'react'

export default function Logo({ className }) {
    return (
        <Image
            src="/images/logo.png"
            alt="Logo"
            className={cn(className)}
            width={150}
            height={150}
        />
    )
}
