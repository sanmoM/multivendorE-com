'use client';


import DesktopNavbar from './components/desktop-navbar/DesktopNavbar';
import MobileNavbar from './components/mobile-navbar/MobileNavbar';

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm font-sans lg:mb-10">
            <DesktopNavbar />
            <MobileNavbar />
        </header>
    );
}