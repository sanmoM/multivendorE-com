"use client";


import SecondaryContainer from '@/components/shared/container/SecondaryContainer';
import Link from 'next/link';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import NavbarSearchbar from '../navbar-searchbar/NavbarSearchbar';
import ProfileDropDown from '../profile-dropdown/ProfileDropDown';
import Logo from '@/components/shared/logo/Logo';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Category', href: '/category' },
    { name: 'Shop', href: '/shop' },
    { name: 'Reseller', href: '/reseller' },
];

export default function DesktopNavbar({ setIsCartOpen }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();
    return (
        <SecondaryContainer className="max-w-[1550px] mx-auto px-4 py-5 lg:flex items-center justify-between hidden">
            {/* Left Section: Logo and Navigation */}
            <div className="flex items-center space-x-14">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 text-primary text-xl font-bold">
                    <Logo className={" lg:w-14 lg:h-14 text-primary"} />
                </Link>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-gray-700 text-base">
                    {navItems.map((item, index) => (
                        <Link key={index} onClick={() => setIsDropdownOpen(false)} href={item.href} className={cn("text-primary hover:text-secondary font-medium", pathname === item.href && "text-secondary")}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Right Section: Search and User Icons */}
            <div className="flex items-center space-x-8">

                <NavbarSearchbar inputClassName={'w-48'} />

                <div className='space-x-2'>
                    <button
                        onClick={() => {
                            setIsDropdownOpen(false)
                        }}
                        className="p-3 rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                        <IoMdNotificationsOutline className='w-6 h-6 text-secondary' />
                    </button>

                    {/* Cart Icon */}
                    <button onClick={() => {
                        setIsCartOpen()
                        setIsDropdownOpen(false)
                    }} className="p-3 rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                        <IoCartOutline className='w-6 h-6 text-secondary' />
                    </button>
                    <ProfileDropDown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
                </div>
            </div>
        </SecondaryContainer>
    )
}
