'use client';


import Modal from '@/components/shared/modal/Modal';
import CartModalContents from '@/components/shared/modal/components/modal-contents/cart-modal-contents/CartModalContents';
import CheckoutModalContents from '@/components/shared/modal/components/modal-contents/checkout-modal-contents/CheckoutModalContents';
import useModalAction from '@/hooks/useModalAction';
import DesktopNavbar from './components/desktop-navbar/DesktopNavbar';
import MobileNavbar from './components/mobile-navbar/MobileNavbar';

export default function Header() {
    const { currentModal, handleCloseModal, handleOpenModal } = useModalAction();
    return (
        <header className="w-full bg-white shadow-sm font-sans sticky top-0 z-[100]">
            <DesktopNavbar setIsCartOpen={() => handleOpenModal("cart-modal")} setNotificationOpen={() => {
                console.log("first")
                handleOpenModal("notification-modal")
            }} />
            <MobileNavbar setIsCartOpen={() => handleOpenModal("cart-modal")} />

            {/* cart modal */}
            <Modal isOpen={currentModal === "cart-modal"} setIsOpen={() => handleCloseModal()} title={"Shopping Bag"}>
                <CartModalContents setIsCartOpen={() => { }} setIsCheckoutOpen={() => handleOpenModal("checkout-modal")} />
            </Modal>
            {/* cart modal */}
            <Modal isOpen={currentModal === "checkout-modal"} setIsOpen={() => handleCloseModal()} title={"Checkout"}>
                {/* <CartModalContents /> */}
                <CheckoutModalContents />
            </Modal>
        </header>
    );
}