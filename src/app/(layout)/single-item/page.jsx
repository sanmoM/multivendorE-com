"use client";

import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
import Button from '@/components/shared/button/Button';
import SecondaryContainer from '@/components/shared/container/SecondaryContainer';
import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import Modal from '@/components/shared/modal/Modal';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import CakeOptions from '@/components/single-item/cake-options/CakeOptions';
import CustomOrderModalContents from '@/components/single-item/custom-order/CustomOrder';
import CustomerReviews from '@/components/single-item/customer-reviews/CustomerReviews';
import DeliveryOptions from '@/components/single-item/delivery-options/DeliveryOptions';
import PaymentMethods from '@/components/single-item/payment-methods/PaymentMethods';
import ProductOptions from '@/components/single-item/product-options/ProductOptions';
import Reviews from '@/components/single-item/reviws/Reviews';
import SellerInfo from '@/components/single-item/seller-info/SellerInfo';
import SimilarProducts from '@/components/single-item/similar-products/SimilarProducts';
import SingleItemTabs from '@/components/single-item/single-item-tabs/SingleItemTabs';
import { IMAGE_BASE_URL } from '@/config';
import useAxios from '@/hooks/useAxios';
import useModalAction from '@/hooks/useModalAction';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
const sliderItems = [
    {
        id: 1,
        src: '/images/product/product-1.svg',
        type: 'image',
    },
    {
        id: 1,
        src: '/images/product/product-2.svg',
        type: 'image',
    }, {
        id: 1,
        src: '/images/product/product-3.svg',
        type: 'image',
    }, {
        id: 1,
        src: '/images/product/product-4.svg',
        type: 'image',
    },
    {
        id: 2,
        image: '/video/single-item/cake-video.mp4',
        type: 'video',
    },
];

const App = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const id = searchParams.get('id');


    const [data, setData] = useState(null);
    const axios = useAxios();
    const sliderRef = useRef(null);

    const { currentModal, handleCloseModal, handleOpenModal } = useModalAction();
    const handleCustomOrderModal = () => {
        handleOpenModal("custom-order-modal")
    }

    const handlePlaceOrder = () => {
        handleOpenModal("checkout-modal")
    }

    useEffect(() => {
        axios.get(`/item-details/${type}/${id}`).then((res) => {
            setData(res?.data?.data);
        });
    }, [axios]);

    console.log(data)
    return (
        <div className='my-6 lg:my-10'>
            <MobileHeader title={"Single Item"} containerClassName={"mb-6"} />
            <SecondaryContainer className={"overflow-hidden"}>
                {/* single item header */}
                {/* product image & seller info */}
                <div className="flex flex-col lg:flex-row">
                    <div className='lg:w-[70%]'>
                        <div className="text-base lg:text-lg font-medium text-gray-600 mb-4 lg:mb-8">
                            <span className='text-secondary '>Cakes</span> / <span className=" text-primary">Chocolate Fudge Cake</span>
                        </div>
                        <hr className="border-t border-gray-200" />
                        <CustomSlider ref={sliderRef} desktopView={1} mobileView={1} paddingDesktop={0} paddingMobile={0}>
                            {data?.image_gallery?.map((url, index) => (
                                <div key={index} className="px-2 outline-0">

                                    {/* {console.log(IMAGE_BASE_URL + url)} */}
                                    <Image
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

                                    <Image
                                        src={url}
                                        alt={`Thumb ${index}`}
                                        width={64}
                                        height={48}
                                        className="object-contain w-full h-full"
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

                {/* product info */}
                <div>
                    <PrimaryTitle title={"Sweet Delights"} className={"my-6"} />
                    <SectionTitle title={data?.cake_name || data?.name} className={"mb-4"} />
                    <p className='text-primary'>{data?.short_description}</p>
                    <p className='text-sm text-secondary mt-4 mb-6'>${data?.regular_price}</p>
                    <div className='space-x-4'>
                        <Button text="Add to Cart" />
                        <Button text="Buy Now" className={"bg-tertiary"} /> <br />
                    </div>
                    <SellerInfo className="lg:hidden" handleCustomOrderModal={handleCustomOrderModal} data={{ rating: data?.average_rating }} />
                </div>

                {/* tabs */}
                <SingleItemTabs description={data?.description || data?.full_description} />
                {
                    data?.type === "product" ? <CakeOptions data={{ price: data?.regular_price || 0 }} /> : <ProductOptions data={{ price: data?.regular_price || 0, variants: data?.image_gallery }} />
                }
                <DeliveryOptions />
                <PaymentMethods />
                <Reviews />
                <CustomerReviews />
                <SimilarProducts />
            </SecondaryContainer>

            <Modal isLef={false} isOpen={currentModal === "custom-order-modal"} setIsOpen={() => handleCloseModal()} title={"Custom Order"}>
                <CustomOrderModalContents handlePlaceOrder={handlePlaceOrder} />
            </Modal>
        </div >
    );
};

export default App;
