import CustomSlider from '@/components/shared/custom-slider/CustomSlider'
import FallbackImage from '@/components/shared/fallback-image/FallbackImage'
import { IMAGE_BASE_URL } from '@/config'
import Image from 'next/image'
import React from 'react'

export default function Banner({ data }) {
    return (
        <div className="rounded-md lg:mt-4">
            <CustomSlider desktopView={1} mobileView={1} className="w-full" autoplay>
                {
                    data?.map((product, index) => (
                        <React.Fragment key={index}>
                            {/* <Image
                                height={400}
                                width={400}
                                className="w-full rounded-md object-cover h-[30vh] lg:h-[60vh]"
                                src={IMAGE_BASE_URL + product?.image}
                                alt="Banner"
                            /> */}
                            <FallbackImage
                                height={400}
                                width={400}
                                className="w-full rounded-md object-cover h-[30vh] lg:h-[60vh]"
                                src={IMAGE_BASE_URL + product?.image}
                                alt="Banner"
                                quality={100}
                            />
                        </React.Fragment>
                    ))
                }
            </CustomSlider>
        </div>
    )
}
