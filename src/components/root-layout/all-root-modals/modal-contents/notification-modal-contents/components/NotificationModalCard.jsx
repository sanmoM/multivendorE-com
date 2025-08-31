import { cn } from '@/utils/cn'
import Image from 'next/image'
import React from 'react'

export default function NotificationModalCard({ data }) {
    return (
        <div className={cn('flex items-center gap-4 border p-2 lg:p-3 rounded-lg cursor-pointer border-secondary', data.unread && 'bg-tertiary')}>
            <Image
                src={data.image}
                alt={"Profile Image"}
                width={100}
                height={100}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <h6 className='font-semibold text-primary'>Notification</h6>
                <p className='text-xs text-secondary'>You have a new message from John Doe. Please check it out</p>
            </div>
        </div>
    )
}
