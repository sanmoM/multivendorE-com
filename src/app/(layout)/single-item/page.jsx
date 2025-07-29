"use client";

import Button from '@/components/shared/button/Button';
import SecondaryContainer from '@/components/shared/container/SecondaryContainer';
import MobileHeader from '@/components/shared/mobile-header/MobileHeader';
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
import { useState } from 'react';

const App = () => {
    const [isCustomOrderModalOpen, setIsCustomOrderModalOpen] = useState(false);
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
                        <Image
                            width={800}
                            height={600}
                            src={"/images/product/product-7.jpg"}
                            alt="Chocolate Fudge Cake"
                            className="w-full aspect-[7/4] object-cover rounded-lg shadow-md"
                        // onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/1F2937/F9FAFB?text=Image+Error"; }}
                        />
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
