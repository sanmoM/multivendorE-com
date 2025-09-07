"use client";

import Modal from '@/components/shared/modal/Modal';
import CreateProductModalContents from '@/components/shared/modal/components/modal-contents/create-product-modal-contents/CreateProductModalContents';
import ProductsModalContents from '@/components/shared/modal/components/modal-contents/products-modal-contents/ProductsModalContents';
import PromotionModalContents from '@/components/shared/modal/components/modal-contents/promotion-modal-contents/PromotionModalContents';
import SellerInfoModalContents from '@/components/shared/modal/components/modal-contents/seller-info-modal-contents/SellerInfoModalContents';
import SellerRootModalContents from '@/components/shared/modal/components/modal-contents/seller-root-modal-contents/SellerRootModalContents';
import WithdrawModalContents from '@/components/shared/modal/components/modal-contents/withdraw-modal-contents/WithdrawModalContents';
import useModalAction from '@/hooks/useModalAction';

export default function AllSellerModals() {
    const { currentModal, handleCloseAllModals, handleCloseModal } = useModalAction();


    return (
        <div>
            <Modal isLeft={false} isOpen={currentModal === "seller-root-modal"} setIsOpen={() => handleCloseModal()} title={"Seller"}>
                <SellerRootModalContents handleCloseModal={handleCloseModal} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "seller-info-modal"} setIsOpen={() => handleCloseModal()} title={"Seller Info"}>
                <SellerInfoModalContents handleCloseModal={handleCloseModal} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "create-product-modal"} setIsOpen={() => handleCloseModal()} title={"Create Product"}>
                <CreateProductModalContents handleCloseModal={handleCloseModal} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "seller-product-modal"} setIsOpen={() => handleCloseModal()} title={"My Products"}>
                <ProductsModalContents />
            </Modal>
            {/* <Modal isLeft={false} isOpen={currentModal === "seller-settings-modal"} setIsOpen={() => handleCloseModal()} title={"Seller Settings"}>
                <SellerSettingsModalContents handleCloseModal={handleCloseModal} isMobile={isMobile} sellerSettingsItems={sellerSettingsItems} />
            </Modal> */}
            <Modal isLeft={false} isOpen={currentModal === "promotion-modal"} setIsOpen={() => handleCloseModal()} title={"Create Promotion"}>
                <PromotionModalContents handleCloseModal={handleCloseAllModals} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "withdraw-modal"} setIsOpen={() => handleCloseModal()} title={"Withdraw"}>
                <WithdrawModalContents handleCloseModal={handleCloseAllModals} />
            </Modal>
        </div>
    )
}
