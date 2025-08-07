"use client";

import Dropdown from '@/components/shared/dropdown/Dropdown';
import Modal from '@/components/shared/modal/Modal';
import AccountSettingsModalContents from '@/components/shared/modal/components/modal-contents/account-settings-modal-contents/AccountSettingsModalContents';
import HelpModalContents from '@/components/shared/modal/components/modal-contents/help-modal-contents/HelpModalContents';
import OrderModalContents from '@/components/shared/modal/components/modal-contents/order-modal-contents/OrderModalContents';
import ProductsModalContents from '@/components/shared/modal/components/modal-contents/products-modal-contents/ProductsModalContents';
import { setUser } from '@/lib/redux/features/userSlice';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState } from 'react';
import { FaInbox } from 'react-icons/fa';
import { FiHelpCircle } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { TbSitemap } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';


export default function ProfileDropDown({ isMobile }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [isOrdersOpen, setIsOrdersOpen] = useState(false);
    const [isAccountSettingsOpen, setIsAccountSettingsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isAccountInformationOpen, setIsAccountInformationOpen] = useState(false);

    const handleLogout = () => {
        dispatch(setUser({ email: "" }))
    }

    const handleClose = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }


    // dropdown menu items
    const profileMenuItems = [
        {
            name: 'Account settings',
            type: "button",
            handleClick: () => setIsAccountSettingsOpen(true)
        },
        {
            name: 'Orders',
            type: "button",
            handleClick: () => setIsOrdersOpen(true)
        },
        {
            name: 'Products',
            type: "button",
            handleClick: () => setIsProductOpen(true)
        },
        {
            name: 'Help',
            type: "button",
            handleClick: () => setIsHelpOpen(true)
        },
    ];

    // account modal menu items
    const accountMenuItems = [
        {
            category: 'Account',
            items: [
                {
                    title: 'Account Information',
                    subtitle: 'Manage your account information',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    ),
                    handleClick: () => {
                        setIsAccountSettingsOpen(false)
                        setTimeout(() => {
                            setIsAccountInformationOpen(true)
                        }, 300);
                    },
                },
                {
                    title: 'Notifications',
                    subtitle: 'Manage your notification preferences',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                    ),
                },
            ],
            mobileMenuItems: [
                {
                    title: 'Orders',
                    subtitle: 'Manage your orders',
                    handleClick: () => {
                        setIsAccountSettingsOpen(false)
                        setTimeout(() => {
                            setIsOrdersOpen(true)
                        }, 300);
                    },
                    icon: (
                        <TbSitemap className="h-6 w-6 text-gray-700" />
                    )
                },
                {
                    title: 'Products',
                    subtitle: 'Manage your products',
                    handleClick: () => {
                        setIsAccountSettingsOpen(false)
                        setTimeout(() => {
                            setIsProductOpen(true)
                        }, 300);
                    },
                    icon: (
                        <FaInbox className="h-6 w-6 text-gray-700" />
                    )
                },
                {
                    title: 'Help',
                    subtitle: 'Get help with your account',
                    handleClick: () => {
                        setIsAccountSettingsOpen(false)
                        setTimeout(() => {
                            setIsHelpOpen(true)
                        }, 300);
                    },
                    icon: (
                        <FiHelpCircle className="h-6 w-6 text-gray-700" />
                    )
                },
            ]
        },
        {
            category: 'Preferences',
            items: [
                {
                    title: 'Language',
                    subtitle: 'Select your preferred language',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.025 15l-1.34-4.66m-1.025-5.34H2.4m6.825 0H14m6.825 0H17m-1.025-5.34L17 5m6.825 0L19 12m-2.28 7H5.28A2.28 2.28 0 013 17.72V6.28A2.28 2.28 0 015.28 4H18.72A2.28 2.28 0 0121 6.28v11.44a2.28 2.28 0 01-2.28 2.28z"></path>
                        </svg>
                    ),
                },
            ],
        },
        {
            category: 'About',
            items: [
                {
                    title: 'App Version',
                    subtitle: 'Version 1.2.3',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    ),
                },
                {
                    title: 'Terms of Service',
                    subtitle: 'View our terms of service',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    ),
                },
            ],
        },
    ];


    // dropdown placeholder
    const placeholder = (
        <div className='inline'>
            {
                isMobile ? (
                    <button onClick={() => setIsAccountSettingsOpen(!isAccountSettingsOpen)} className='flex flex-col items-center'>
                        <LuUserRound className='w-6 h-6 text-secondary' />
                        <span className='text-xs '>Profile</span>
                    </button>
                ) : (
                    <button className="p-3 rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300" onClick={handleClose}>
                        <LuUserRound className='w-6 h-6 text-secondary' />
                    </button>
                )
            }
        </div >
    )


    // dropdown contents
    const contents = (
        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                user?.email ? (
                    <>
                        {
                            profileMenuItems.map((item, index) => (
                                <>
                                    {
                                        item.type === "button" ? (
                                            <button onClick={() => {
                                                item.handleClick();
                                                setIsDropdownOpen(false);
                                            }} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary flex gap-2 items-center w-full" role="menuitem">
                                                <span>{item.name}</span>
                                            </button>
                                        ) : (
                                            <Link
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                }}
                                                href={item.path || "#"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">
                                                <span>{item.name}</span>
                                            </Link>
                                        )
                                    }

                                </>
                            ))
                        }
                        <button onClick={handleLogout} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary flex gap-2 items-center w-full" role="menuitem">
                            <RxExit /><span>Logout</span>
                        </button>
                    </>
                ) : (
                    <>
                        <Link onClick={handleClose} href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Login</Link>
                        <Link onClick={handleClose} href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Sign up</Link>
                    </>
                )
            }
        </div>
    )

    return (
        <div className='inline'>
            {/* all dropdown contents */}
            <Dropdown containerClassName="inline" isDropdownOpen={isDropdownOpen} placeholder={placeholder} contents={contents} contentsClassName={cn(isMobile ? "!bottom-[calc(100%+0.5rem)] !top-auto !-right-2 !left-auto" : "")} />

            {/* modals */}

            <Modal isLeft={false} isOpen={isOrdersOpen} setIsOpen={setIsOrdersOpen} title={"Orders"}>
                <OrderModalContents />
            </Modal>
            <Modal isLeft={false} isOpen={isAccountSettingsOpen} setIsOpen={setIsAccountSettingsOpen} title={"Account Settings"}>
                <AccountSettingsModalContents isMobile={isMobile} accountMenuItems={accountMenuItems} />
            </Modal>
            <Modal isLeft={false} isOpen={isProductOpen} setIsOpen={setIsProductOpen} title={"My Products"}>
                <ProductsModalContents />
            </Modal>
            <Modal isLeft={false} isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} title={"Help"}>
                <HelpModalContents />
            </Modal>
            <Modal isLeft={false} isOpen={isAccountInformationOpen} setIsOpen={setIsAccountInformationOpen} title={"Account Information"}>
                <HelpModalContents />
            </Modal>
        </div>
    )
}
