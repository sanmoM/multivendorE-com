"use client";

import Modal from '@/components/shared/modal/Modal';
import CreateProductModalContents from '@/components/shared/modal/components/modal-contents/create-product-modal-contents/CreateProductModalContents';
import ProductsModalContents from '@/components/shared/modal/components/modal-contents/products-modal-contents/ProductsModalContents';
import PromotionModalContents from '@/components/shared/modal/components/modal-contents/promotion-modal-contents/PromotionModalContents';
import SellerInfoModalContents from '@/components/shared/modal/components/modal-contents/seller-info-modal-contents/SellerInfoModalContents';
import SellerSettingsModalContents from '@/components/shared/modal/components/modal-contents/seller-settings-modal-contents/SellerSettingsModalContents';
import useModalAction from '@/hooks/useModalAction';
import { useEffect, useState } from 'react';
import { FaInbox } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';

export default function AllSellerModals() {
    const { currentModal, handleCloseAllModals, handleCloseModal, handleOpenModal } = useModalAction();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    // account information items
    const sellerSettingsItems = [
        {
            title: 'View Seller Profile',
            subtitle: 'View your seller profile',
            type: "button",
            handleClick: () => {
                handleOpenModal("seller-info-modal")
            },
            icon: (<svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>)
        },
        {
            title: 'Create Product',
            subtitle: 'Create a product',
            type: "button",
            handleClick: () => {
                handleOpenModal("create-product-modal")
            },
            icon: (<IoAddCircleSharp className="h-6 w-6 text-gray-700" />)
        },
        {
            title: 'Seller Product',
            subtitle: 'View your selling products',
            type: "button",
            handleClick: () => {
                handleOpenModal("seller-product-modal")
            },
            icon: (<FaInbox className="h-6 w-6 text-gray-700" />)
        },
    ];
    return (
        <div>
            <Modal isLeft={false} isOpen={currentModal === "seller-info-modal"} setIsOpen={() => handleCloseModal()} title={"Seller Info"}>
                <SellerInfoModalContents handleCloseModal={handleCloseModal} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "create-product-modal"} setIsOpen={() => handleCloseModal()} title={"Create Product"}>
                <CreateProductModalContents handleCloseModal={handleCloseModal} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "seller-product-modal"} setIsOpen={() => handleCloseModal()} title={"My Products"}>
                <ProductsModalContents />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "seller-settings-modal"} setIsOpen={() => handleCloseModal()} title={"Seller Settings"}>
                <SellerSettingsModalContents handleCloseModal={handleCloseModal} isMobile={isMobile} sellerSettingsItems={sellerSettingsItems} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "promotion-modal"} setIsOpen={() => handleCloseModal()} title={"Create Promotion"}>
                <PromotionModalContents handleCloseModal={handleCloseAllModals} />
            </Modal>
        </div>
    )
}
