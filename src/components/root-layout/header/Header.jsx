'use client';


import { useState } from 'react';
import DesktopNavbar from './components/desktop-navbar/DesktopNavbar';
import MobileNavbar from './components/mobile-navbar/MobileNavbar';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <header className="w-full bg-white shadow-sm font-sans lg:mb-10">
            <DesktopNavbar setIsCartOpen={setIsCartOpen} />
            <MobileNavbar setIsCartOpen={setIsCartOpen} />

            {
                isCartOpen && <div>
                    
                </div>
            }
        </header>
    );
}