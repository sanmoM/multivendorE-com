"use client";

import Dropdown from '@/components/shared/dropdown/Dropdown';
import Link from 'next/link';
import { useState } from 'react';
import { LuUserRound } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { RxExit } from "react-icons/rx";
import { setUser } from '@/lib/redux/features/userSlice';
import { cn } from '@/utils/cn';
import Modal from '@/components/shared/modal/Modal';
import OrderModalContents from '@/components/shared/modal/components/modal-contents/order-modal-contents/OrderModalContents';
import AccountSettingsModalContents from '@/components/shared/modal/components/modal-contents/account-settings-modal-contents/AccountSettingsModalContents';
import ProductsModalContents from '@/components/shared/modal/components/modal-contents/products-modal-contents/ProductsModalContents';


export default function ProfileDropDown({ isMobile }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [isOrdersOpen, setIsOrdersOpen] = useState(false);
    const [isAccountSettingsOpen, setIsAccountSettingsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);

    const handleLogout = () => {
        dispatch(setUser({ email: "" }))
    }

    const handleClose = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }


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
    ];

    const placeholder = (
        <div className='inline'>
            {
                isMobile ? (
                    <button onClick={handleClose} className='flex flex-col items-center'>
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
            <Dropdown containerClassName="inline" isDropdownOpen={isDropdownOpen} placeholder={placeholder} contents={contents} contentsClassName={cn(isMobile ? "!bottom-[calc(100%+0.5rem)] !top-auto !-right-2 !left-auto" : "")} />
            <Modal isLeft={false} isOpen={isOrdersOpen} setIsOpen={setIsOrdersOpen} title={"Orders"}>
                <OrderModalContents />
            </Modal>
            <Modal isLeft={false} isOpen={isAccountSettingsOpen} setIsOpen={setIsAccountSettingsOpen} title={"Account Settings"}>
                <AccountSettingsModalContents />
            </Modal>
            <Modal isLeft={false} isOpen={isProductOpen} setIsOpen={setIsProductOpen} title={"My Products"}>
                <ProductsModalContents />
            </Modal>
        </div>
    )
}
