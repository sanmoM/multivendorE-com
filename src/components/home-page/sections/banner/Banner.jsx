import CustomSlider from '@/components/shared/custom-slider/CustomSlider'
import { IMAGE_BASE_URL } from '@/config'
import { products } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function Banner({ data }) {
    // data = data.slice(0, 1)
    // console.log(data, "banner data")
    return (
        <div className="rounded-md lg:mt-4 max-w-[1550px] mx-auto">
            <CustomSlider desktopView={1} mobileView={1} className="w-full" autoplay>
                {
                    data?.map((product, index) => (
                        <>
                            <Image
                                height={400}
                                width={400}
                                className="w-full rounded-md object-cover h-[30vh] lg:h-[60vh]"
                                src={IMAGE_BASE_URL + product?.image}
                                alt="Banner"
                            />
                            {/* {console.log(product, "slider")} */}
                        </>
                    ))
                }
            </CustomSlider>
        </div>
    )
}
