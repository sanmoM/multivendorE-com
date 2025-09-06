import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useModalAction from '@/hooks/useModalAction';
import Image from 'next/image';
import { useRef } from 'react';
import SellerInfo from '../shared/seller-info/SellerInfo';
import FallbackImage from '@/components/shared/fallback-image/FallbackImage';

export default function ProductInfo({ data }) {
    const sliderRef = useRef(null);


    const { handleOpenModal } = useModalAction();
    const handleCustomOrderModal = () => {
        handleOpenModal("custom-order-modal")
    }
    return (
        <div>
            {/* product image & seller info */}
            <div className="flex flex-col lg:flex-row">
                <div className='lg:w-[70%]'>
                    <div className="text-base lg:text-lg font-medium text-gray-600 mb-4 lg:mb-8">
                        <span className='text-secondary '>Cakes</span> / <span className=" text-primary">Chocolate Fudge Cake</span>
                    </div>
                    <hr className="border-t border-gray-200" />
                    <CustomSlider ref={sliderRef} desktopView={1} mobileView={1} paddingDesktop={0} paddingMobile={0}>
                        {data?.image_gallery?.map((url, index) => (
                            <div key={index} className="px-2 outline-0 w-full">
                                <FallbackImage
                                    src={url}
                                    alt={`Slide ${index}`}
                                    height={400}
                                    width={400}
                                    className="w-full h-auto object-contain aspect-[7/4] rounded-xl"
                                />

                                {/* this section will uncomment if user want to upload video */}
                                {/* {item.type === "image" && (
                                        <Image
                                            src={item.src}
                                            alt={`Slide ${index}`}
                                            height={400}
                                            width={400}
                                            className="w-full h-auto object-cover aspect-[7/4] rounded-xl"
                                        />
                                    )}
                                    {item.type === "video" && (
                                        <video
                                            src={"/video/single-item/cake-video.mp4"}
                                            autoPlay
                                            loop
                                            controls
                                            muted
                                            className="w-full h-auto object-cover aspect-[7/4] rounded-xl"
                                        />
                                    )} */}
                            </div>
                        ))}
                    </CustomSlider>

                    <div className="flex gap-2 mt-4 justify-center">
                        {data?.image_gallery?.map((url, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    sliderRef.current?.slickGoTo(index)
                                }}
                                className="w-16 h-12 border rounded overflow-hidden"
                            >
                                <FallbackImage
                                    src={url}
                                    alt={`Thumb ${index}`}
                                    height={400}
                                    width={400}
                                    className="w-full object-contain aspect-[7/4] rounded-xl"
                                />
                                {/* this section will uncomment if user want to upload video */}
                                {/* {
                                        item.type === 'image' && <Image
                                            src={item.src}
                                            alt={`Thumb ${index}`}
                                            width={64}
                                            height={48}
                                            className="object-cover w-full h-full"
                                        />
                                    }
                                    {
                                        item.type === 'video' && <video
                                            disablePictureInPicture
                                            src={"/video/single-item/cake-video.mp4"}
                                            alt={`Discount`}
                                            height={400}
                                            width={400}
                                            className="h-auto object-cover aspect-[7/4] rounded-xl cursor-pointer"
                                        />
                                    } */}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Section - Seller Info and Custom Order */}
                <SellerInfo className="hidden lg:block" handleCustomOrderModal={handleCustomOrderModal} />
            </div>

            <PrimaryTitle title={data?.category?.categoryName} className={"my-6"} />
            <SectionTitle title={data?.cake_name || data?.name} className={"mb-4"} />
            <p className='text-primary'>{data?.short_description}</p>
            <p className='text-lg lg:text-xl font-bold text-secondary mt-4 mb-6'>${data?.regular_price}</p></div>
    )
}
