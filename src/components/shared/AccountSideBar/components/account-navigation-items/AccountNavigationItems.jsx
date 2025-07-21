"use client"

import { accountSideBarItems } from '@/data'
import React from 'react'
import SideBarItem from './components/side-bar-item/SideBarItem'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

export default function AccountNavigationItems() {
    return (
        <>
            <ul className="flex flex-col gap-5">
                {
                    accountSideBarItems.map((item, index) => (
                        <SideBarItem key={index} item={item} />
                    ))
                }
            </ul>
            <hr style={
                {
                    border: '1px solid #ccc',
                    margin: '20px 10px'
                }
            } />
            <SideBarItem item={{ path: '/logout', label: 'Logout', icon: FaArrowRightFromBracket }} />
        </>
    )
}
