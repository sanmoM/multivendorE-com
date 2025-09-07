import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import FallbackImage from '@/components/shared/fallback-image/FallbackImage';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useModalAction from '@/hooks/useModalAction';
import { useRef, useState } from 'react';
import SellerInfo from '../shared/seller-info/SellerInfo';
import { cn } from '@/utils/cn';

export default function ProductInfo({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);


    const { handleOpenModal } = useModalAction();
    const handleCustomOrderModal = () => {
        handleOpenModal("custom-order-modal")
    }
    console.log(activeIndex, "activeIndex")
    return (
        <div>
            {/* product image & seller info */}
            <div className="flex flex-col lg:flex-row">
                <div className='lg:w-[70%]'>
                    <div className="text-base lg:text-lg font-medium text-gray-600 mb-4 lg:mb-8">
                        <span className='text-secondary '>Cakes</span> / <span className=" text-primary">Chocolate Fudge Cake</span>
                    </div>
                    <hr className="border-t border-gray-200" />

                    <div className="px-2 outline-0 w-full aspect-[7/4] relative overflow-hidden">
                        {
                            data?.image_gallery?.map((url, index) => (
                                <FallbackImage
                                    src={data?.image_gallery[activeIndex]}
                                    alt={`Slide`}
                                    height={400}
                                    width={400}
                                    className={cn("w-full h-auto absolute inset-0 object-contain aspect-[7/4] rounded-xl duration-300", index === activeIndex ? "opacity-100" : "opacity-0")}
                                />
                            ))
                        }
                    </div>

                    <div className="flex gap-2 mt-4 justify-center">
                        {data?.image_gallery?.map((url, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    // sliderRef.current?.slickGoTo(index)
                                    setActiveIndex(index)
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
