import Image from 'next/image';
import React from 'react'

export default function ModalProductCard({ item }) {
    return (
        <div className="flex items-center space-x-4">
            <Image
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-md object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/E0E0E0/808080?text=Item"; }}
                height={40}
                width={40}
            />
            <div>
                <h4 className="font-semibold text-primary">{item.name}</h4>
                <p className="text-secondary">Quantity: {item.quantity}</p>
                <p className=" text-secondary">${item.price}</p>
            </div>
        </div>
    )
}
