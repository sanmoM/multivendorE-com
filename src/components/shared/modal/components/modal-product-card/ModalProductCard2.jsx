import Image from 'next/image';
import React from 'react'

export default function ModalProductCard2({ item }) {
    console.log(item)
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
                {item?.title && <h4 className="font-semibold text-primary">{item?.title}</h4>}
                {item?.text2 && <p className="text-secondary">{item?.text2}</p>}
                {item?.text3 && <p className=" text-secondary">{item?.text3}</p>}
            </div>
        </div>
    )
}
