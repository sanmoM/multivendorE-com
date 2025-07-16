'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/shared/container/Container';
import { navItems } from '@/data';
import NavItem from './components/nav-item/NavItem';

export default function Header() {
    const [showCategory, setShowCategory] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <Container>
            <header>
                {/* Header 1 */}
                <div className="lg:flex hidden border-b justify-between font-medium items-center py-4 px-4 text-[12px]">
                    <div className="flex items-center space-x-3 text-gray-700">
                        <Link href="#" className="hover:text-[#ff2631] transition duration-200">PLAY STORE</Link>
                        <span className="h-3 w-px bg-gray-300"></span>
                        <Link href="#" className="hover:text-[#ff2631] transition duration-200">APP STORE</Link>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-700">
                        <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                            <i className="fa-solid fa-truck text-red-600" /> TRACK YOUR ORDER
                        </Link>
                        <span className="h-3 w-px bg-gray-300"></span>
                        <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                            <i className="fa-solid fa-code-compare text-red-600" /> COMPARE (0)
                        </Link>
                        <span className="h-3 w-px bg-gray-300"></span>
                        <Link href="/my_wishList" className="hover:text-[#ff2631] transition duration-200">
                            <i className="fa-solid fa-heart text-red-600" /> WISHLIST (0)
                        </Link>
                        <span className="h-3 w-px bg-gray-300"></span>
                        <Link href="/cartPage" className="hover:text-[#ff2631] transition duration-200">
                            <i className="fa-solid fa-cart-shopping text-red-600" /> CART (0)
                        </Link>
                    </div>
                </div>

                {/* Header 2 */}
                <div className="py-6 max-w-7xl relative mx-auto w-full lg:pb-0">
                    <div className="mx-4 relative flex items-center lg:justify-between">
                        <div className="flex items-center justify-center gap-16">
                            <div className="hidden lg:block">
                                <img
                                    src="https://amazcart.ischooll.com/public/uploads/settings/65e061ef3822b.png"
                                    alt="logo"
                                    className="w-32 md:w-full"
                                />
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="mr-4 md:mr-6 lg:hidden">
                            <button onClick={() => setShowMenu((prev) => !prev)}>
                                <i className="fa-solid text-3xl fa-bars" />
                            </button>
                        </div>

                        {/* Mobile Slide Menu */}
                        <div
                            className={`absolute rounded-md top-16 bg-[#f4f1f7] -left-5 w-1/2 sm:w-[320px] md:w-2/5 lg:hidden shadow-xl z-50 transition-transform duration-300 ease-linear overflow-y-auto ${showMenu ? 'translate-x-0' : "-translate-x-1/2"}`}
                        >
                            <div className="p-4 pl-6 font-bold text-[14px]">
                                <ul className={`space-y-2 font-medium `}>
                                    {
                                        navItems.map((item, index) => (
                                            <NavItem path={item.path} text={item.text} />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="flex mr-8 lg:mr-0 items-center gap-3 w-[400px] border border-gray-200 rounded-full bg-[#f9f9fb] px-4 py-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search your item"
                                className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                            />
                        </div>

                        {/* Bell icon */}
                        <div className="lg:hidden absolute top-4 right-0 z-50">
                            <i className="fa-solid fa-bell text-xl text-gray-700"></i>
                        </div>

                        {/* Login/Register */}
                        <div className="text-[14px] hidden lg:block font-medium">
                            <Link href="/login" className="hover:text-[#ff2631] transition duration-200">
                                <i className="fa-solid fa-user text-red-600" /> LOGIN
                            </Link>
                            <span className="mx-1">/</span>
                            <Link href="/signUp" className="hover:text-[#ff2631] transition duration-200">REGISTER</Link>
                        </div>
                    </div>

                    {/* Header 3 (Desktop Nav) */}
                    <div className="bg-[#f7f7fc] relative mx-4 mt-6 hidden lg:block pr-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button
                                    onClick={() => setShowCategory((prev) => !prev)}
                                    className="flex items-center px-4 py-3 bg-black text-white text-sm font-semibold rounded-sm"
                                >
                                    <svg className="w-8 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    All Categories
                                    <svg className="w-4 h-6 ml-14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Desktop Navigation */}
                                <nav className="flex items-center space-x-6 ml-12 text-[15px] font-medium">
                                    {
                                        navItems.map((item, index) => (
                                            <NavItem path={item.path} text={item.text} />
                                        ))
                                    }
                                </nav>
                            </div>

                            <div className="flex items-center space-x-6 text-[12px] font-medium">
                                <Link href="#" className="flex items-center hover:text-[#ff2631] transition duration-200">
                                    <i className="fa-solid fa-user-plus text-[#ff2631] mr-1" /> New User Zone
                                </Link>
                                <div className="h-5 w-px bg-gray-300" />
                                <Link href="#" className="flex items-center hover:text-[#ff2631] transition duration-200">
                                    <i className="fa-solid fa-star text-[#ff2631] mr-1" /> Daily Deals
                                </Link>
                            </div>
                        </div>

                        {/* Slide Category Panel */}
                        <div
                            className={`absolute top-12 left-0 w-[320px] h-[90vh] bg-[#f4f1f7] shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${showCategory ? 'translate-x-0' : 'translate-x-full hidden'
                                }`}
                        >
                            <div className="p-3 border-b">
                                <p>Category content goes here...</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Nav (Mobile Only) */}
                <div className="fixed bottom-0 left-0 w-full h-20 bg-[#eeeef1] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] z-40 lg:hidden">
                    <div className="flex justify-between h-full items-center px-4 py-6 text-black text-xs relative">
                        <div className="flex flex-col items-center space-y-1">
                            <Link href="/"><i className="fa-solid text-[18px] fa-house" /></Link>
                            <span className="font-semibold text-base">Home</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1">
                            <Link href="/my_wishList"><i className="fa-solid text-[18px] fa-heart" /></Link>
                            <span className="font-semibold text-base">Wishlist</span>
                        </div>

                        <div className="w-16"></div>

                        <div className="flex flex-col items-center space-y-1">
                            <Link href="/cartPage"><i className="fa-solid text-[18px] fa-cart-shopping" /></Link>
                            <span className="font-semibold text-base">Cart</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1">
                            <Link href="/user_profile"><i className="fa-solid text-[18px] fa-user" /></Link>
                            <span className="font-semibold text-base">Account</span>
                        </div>

                        {/* Floating Button */}
                        <div className="absolute -top-8 left-1/2 z-50"
                            style={{
                                transform: 'translate(-50%)',
                            }}
                        >
                            <div className="bg-black shadow-xl flex justify-center items-center text-white font-bold text-4xl h-16 w-16 rounded-full">
                                e
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Container>
    );
}
