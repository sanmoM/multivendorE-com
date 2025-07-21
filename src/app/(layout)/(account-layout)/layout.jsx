import AccountSideBar from '@/components/shared/AccountSideBar/AccountSideBar'
import MobileAccountSideBar from '@/components/shared/AccountSideBar/MobileAccountSideBar'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <MobileAccountSideBar />

            <div className="flex mx-auto max-sm:flex-col max-md:flex-col gap-5 py-10 max-w-7xl max-sm:w-full">
                <AccountSideBar />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
