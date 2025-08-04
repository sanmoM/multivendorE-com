"use client";

import Dropdown from '@/components/shared/dropdown/Dropdown';
import Link from 'next/link';
import { useState } from 'react';
import { LuUserRound } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { RxExit } from "react-icons/rx";
import { setUser } from '@/lib/redux/features/userSlice';

export default function MobileProfileDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setUser({ email: "" }))
    }

    const handleClose = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const placeholder = (
        <button onClick={handleClose} className='flex flex-col items-center'>
            <LuUserRound className='w-6 h-6 text-secondary' />
            <span className='text-xs '>Profile</span>
        </button>
    )


    const contents = (
        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                user?.email ? (
                    <>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Account settings</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Support</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">License</a>
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
        <Dropdown containerClassName="inline" isDropdownOpen={isDropdownOpen} placeholder={placeholder} contents={contents} contentsClassName={"!bottom-[calc(100%+0.5rem)] !top-auto !-right-2 !left-auto"} />
    )
}
