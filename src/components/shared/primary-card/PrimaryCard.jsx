import { IMAGE_BASE_URL } from "@/config";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function PrimaryCard({ item, containerClassName, isLoading }) {
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
                    <div className={cn("relative", containerClassName)}>
                        {
                            item?.discount_percentage && <span className="bg-red-500 text-white py-0.5 px-2 rounded-full text-[10px] top-2 right-4 absolute">-{parseInt(item?.discount_percentage)}%</span>
                        }
                        <Image src={IMAGE_BASE_URL + item?.image} alt="product-1" width={300} height={400} className="w-full aspect-square object-cover rounded-lg" />
                        <h3 className="text-primary font-medium mt-4 text-sm lg:text-lg flex justify-between items-center">
                            <span>{item?.title?.slice(0, 20)}</span>
                        </h3>
                        <p className="text-secondary mt-1 text-xs lg:text-sm">{item?.subtitle?.length > 30 ? item?.subtitle?.slice(0, 30)?.concat('...') : item?.subtitle}</p>
                    </div>
            }
        </>
    )
}
