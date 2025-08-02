'use client';


import { useState } from 'react';
import DesktopNavbar from './components/desktop-navbar/DesktopNavbar';
import MobileNavbar from './components/mobile-navbar/MobileNavbar';
import Modal from '@/components/shared/modal/Modal';
import CartModalContents from '@/components/modal-contents/cart-modal-contents/CartModalContents';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <header className="w-full bg-white shadow-sm font-sans lg:mb-10">
            <DesktopNavbar setIsCartOpen={setIsCartOpen} />
            <MobileNavbar setIsCartOpen={setIsCartOpen} />

            {/* cart modal */}
            <Modal isOpen={isCartOpen} setIsOpen={setIsCartOpen} title={"Shopping Bag"}>
                <CartModalContents />
            </Modal>
        </header>
    );
}