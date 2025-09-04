"use client"

import { IMAGE_BASE_URL } from "@/config";
import Image from "next/image";
import { useState } from "react";

export default function PrimaryCard({ item, containerClassName, isLoading }) {
    const [imgSrc, setImgSrc] = useState(IMAGE_BASE_URL + item?.image);
    return (
        <>
            {
                isLoading ?
                    <div className={containerClassName}>
                        {/* Image skeleton */}
                        <div className="w-full aspect-square bg-gray-200 rounded-lg animate-pulse" />

                        {/* Title skeleton */}
                        <div className="h-4 bg-gray-200 rounded mt-4 w-3/4 animate-pulse" />

                        {/* Subtitle skeleton */}
                        <div className="h-3 bg-gray-200 rounded mt-2 w-1/2 animate-pulse" />
                    </div> :
                    <div className={containerClassName}>
                        <Image src={imgSrc} onError={() => setImgSrc("/images/default-image.png")} alt="product-1" width={300} height={400} className="w-full aspect-square object-cover rounded-lg" />
                        <h3 className="text-primary font-medium mt-4 text-sm lg:text-lg">{item?.title?.slice(0, 20)}</h3>
                        <p className="text-secondary mt-1 text-xs lg:text-sm">{item?.subtitle?.length > 30 ? item?.subtitle?.slice(0, 30)?.concat('...') : item?.subtitle}</p>
                    </div>
            }
        </>
    )
}
