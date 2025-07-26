import { cn } from '@/utils/cn'
import React from 'react'
import { HiArrowSmallLeft } from 'react-icons/hi2'

export default function BackBtn({ handleBack, className }) {
    return (
        <button onClick={handleBack} className={cn('', className)}>
            <HiArrowSmallLeft className='w-6 h-6 text-primary' />
        </button>
    )
}
