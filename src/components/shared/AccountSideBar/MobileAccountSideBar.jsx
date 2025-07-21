"use client"

import { useState } from "react";
import AccountNavigationItems from "./components/account-navigation-items/AccountNavigationItems";

export default function MobileAccountSideBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mx-auto px-5 overflow-hidden max-sm:block hidden">
            <i
                id="dashboardBtn"
                onClick={() => setIsOpen((prev) => !prev)}
                className="fa-solid dash-filter text-[20px] fa-bars cursor-pointer"
            ></i>

            <div
                id="dashboardContent"
                className={`my-5 bg-white w-[300px] absolute transition-all duration-300 left-0 p-5 rounded-md ease-in-out sm:hidden overflow-y-auto z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <AccountNavigationItems />
            </div>
        </div>
    )
}
