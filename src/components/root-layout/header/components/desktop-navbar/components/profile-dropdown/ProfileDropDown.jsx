"use client";

import Dropdown from '@/components/shared/dropdown/Dropdown';
import Link from 'next/link';
import { useState } from 'react';
import { LuUserRound } from "react-icons/lu";
import { useSelector } from 'react-redux';

export default function ProfileDropDown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = useSelector(state => state.user);

    const handleClose = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const placeholder = (
        <button className="p-3 rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300" onClick={handleClose}>
            <LuUserRound className='w-6 h-6 text-secondary' />
        </button>
    )

    console.log(user)
    const contents = (
        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                user?.phone ? (
                    <>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Account settings</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Support</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">License</a>
                        <Button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Logout</Button>
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
        <Dropdown containerClassName="inline" isDropdownOpen={isDropdownOpen} placeholder={placeholder} contents={contents} />
    )
}
