import BackBtn from '@/components/shared/back-btn/BackBtn'
import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'

export default function SingleItemHeader() {
    return (
        <div className='flex items-center justify-between lg:hidden py-3 mb-4'>
            <BackBtn />
            <IoBagHandleOutline className='w-6 h-6 text-primary' />
        </div>
    )
}
