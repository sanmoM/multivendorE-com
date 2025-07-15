import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className="rounded-md lg:mt-4 px-4 max-w-7xl mx-auto">
            <Image
                height={400}
                width={400}
                className="w-full rounded-md"
                src="https://amazcart.ischooll.com/public/uploads/images/05-01-2023/63b69317ca215.jpeg"
                alt=""
            />
        </div>
    )
}
