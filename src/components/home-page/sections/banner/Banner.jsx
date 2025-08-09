import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className="rounded-md lg:mt-4 max-w-7xl mx-auto">
            <Image
                height={400}
                width={400}
                className="w-full rounded-md aspect-[2/1] lg:aspect-[3/1] object-cover"
                src={"/images/home/banner.svg"}
                alt="Banner"
            />
        </div>
    )
}
