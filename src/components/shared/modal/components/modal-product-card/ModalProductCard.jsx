import { cn } from '@/utils/cn';
import Image from 'next/image';
import React from 'react'

export default function ModalProductCard({ item, imageClassName }) {
    return (
        <div className="flex items-center space-x-4">
            <Image
                src={item.image}
                alt={item.name}
                className={cn('rounded-md object-cover', imageClassName)}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/E0E0E0/808080?text=Item"; }}
                height={40}
                width={40}
            />
            <div>
                <h4 className="font-semibold text-primary">{item.name}</h4>
                <p className="text-secondary">Quantity: {item.quantity}</p>
                <p className=" text-secondary">Price: ${item.price}</p>
                {item?.date && <p className="text-primary">Order Date: {item.date}</p>}
                {item?.paymentStatus && <p className={cn('text-primary py-[2px] px-5 w-fit rounded-sm mt-2', item.paymentStatus === 'Paid' ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200')}>{item.paymentStatus}</p>}
            </div>
        </div>
    )
}
