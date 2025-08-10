import CustomSlider from '@/components/shared/custom-slider/CustomSlider'
import { products } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className="rounded-md lg:mt-4 max-w-7xl mx-auto">
            <CustomSlider desktopView={1} mobileView={1} className="w-full" autoplay>
                {
                    products?.map((product, index) => (
                        <Image
                            height={400}
                            width={400}
                            className="w-full rounded-md object-cover h-[30vh] lg:h-[60vh]"
                            src={product?.image}
                            alt="Banner"
                        />
                    ))
                }
            </CustomSlider>
        </div>
    )
}
