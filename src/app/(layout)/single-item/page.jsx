"use client";

import Button from '@/components/shared/button/Button';
import SecondaryContainer from '@/components/shared/container/SecondaryContainer';
import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
import Modal from '@/components/shared/modal/Modal';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import ChooseCake from '@/components/single-item/cake-options/CakeOptions';
import CustomOrderModalContents from '@/components/single-item/custom-order/CustomOrder';
import CustomerReviews from '@/components/single-item/customer-reviews/CustomerReviews';
import DeliveryOptions from '@/components/single-item/delivery-options/DeliveryOptions';
import PaymentMethods from '@/components/single-item/payment-methods/PaymentMethods';
import Reviews from '@/components/single-item/reviws/Reviews';
import SellerInfo from '@/components/single-item/seller-info/SellerInfo';
import SimilarProducts from '@/components/single-item/similar-products/SimilarProducts';
import SingleItemTabs from '@/components/single-item/single-item-tabs/SingleItemTabs';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
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
    const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false);
    const dispatch = useDispatch();
    const sliderRef = useRef(null);
    const handleCloseCart = () => {
        dispatch(handleCartOpen());
    };
    return (
        <div>
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
                            {sliderItems.map((item, index) => (
                                <div key={index} className="px-2 outline-0">
                                    {item.type === "image" && (
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
                                    )}
                                </div>
                            ))}
                        </CustomSlider>

                        <div className="flex gap-2 mt-4 justify-center">
                            {sliderItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => sliderRef.current?.slickGoTo(index)}
                                    className="w-16 h-12 border rounded overflow-hidden"
                                >
                                    {
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
                                    }
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Seller Info and Custom Order */}
                    <SellerInfo className="hidden lg:block" />
                </div>

                {/* product info */}
                <div>
                    <PrimaryTitle title={"Sweet Delights"} className={"my-6"} />
                    <SectionTitle title={"Chocolate Fudge Cake"} className={"mb-4"} />
                    <p className='text-primary'>Rich decandent chocolate cake with a fudge frosting. A perfect combination of rich chocolate and fudge frosting.</p>
                    <p className='text-sm text-secondary mt-4 mb-6'>$1,500</p>
                    <div className='space-x-4'>
                        <Button text="Add to Cart" />
                        <Button text="Buy Now" className={"bg-tertiary"} /> <br />
                        <Button onClick={() => setIsCustomOrderModalOpen(true)} onC text="Custom Order" className={"bg-tertiary mt-6"} />
                    </div>
                    <SellerInfo className="lg:hidden" />
                </div>

                {/* tabs */}
                <SingleItemTabs />
                <ChooseCake />
                <DeliveryOptions />
                <PaymentMethods />
                <Reviews />
                <CustomerReviews />
                <SimilarProducts />
            </SecondaryContainer>

            <Modal isLef={false} isOpen={isCustomOrderModalOpen} setIsOpen={setIsCustomOrderModalOpen} title={"Custom Order"}>
                <CustomOrderModalContents />
            </Modal>
        </div >
    );
};

export default App;
