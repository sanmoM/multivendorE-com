"use client";

import ProfileImage from '@/components/user-profile/profile-image/ProfileImage'
import AddressTab from '@/components/user-profile/profile-tabs/address-tab/AddressTab';
import ChangePasswordTab from '@/components/user-profile/profile-tabs/change-password-tab/ChangePasswordTab';
import InfoTab from '@/components/user-profile/profile-tabs/info-tab/InfoTab'
import UserInfo from '@/components/user-profile/user-info/UserInfo'
import React from 'react'

export default function page() {
    const [activeTab, setActiveTab] = React.useState('info');
    const tabs = [
        {
            name: 'info',
            label: 'Basic Info',
        },
        {
            name: 'change-password',
            label: 'Change Password',
        },
        {
            name: 'address',
            label: 'Address',
        },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab.name);
    };
    return (
        <div>
            <div className="mx-auto px-5 overflow-hidden max-sm:block hidden">
                <i
                    id="dashboardBtn"
                    className="fa-solid dash-filter text-[20px] fa-bars cursor-pointer"
                ></i>

                <div
                    id="dashboardContent"
                    className="my-5 bg-white w-[300px] absolute transition-all duration-300 -translate-x-full hidden left-0 p-5 rounded-md ease-in-out sm:hidden overflow-y-auto z-50"
                >
                    <ul className="flex flex-col gap-5">
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/profile-dashboard.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-table-columns text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">Dashboard</p>
                                </div>
                            </a>
                            <span className="inline-block h-4 border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/purchase_history.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-table-columns text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">Purchase History</p>
                                </div>
                            </a>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/my_wishList.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-heart text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">My Wishlist</p>
                                </div>
                            </a>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/my_order.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-star text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">My Order</p>
                                </div>
                            </a>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <a href="/user_profile.html">
                                <div className="flex gap-3 items-center">
                                    <i className="fa-solid fa-circle-user text-[14px]"></i>
                                    <p className="text-[14px] font-semibold">My Account</p>
                                </div>
                            </a>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                    </ul>
                    <hr style={
                        {
                            "border": "1px solid #ccc",
                            "margin": "20px 10px"
                        }
                    } />

                    <ul className="flex flex-col gap-3">
                        <li
                            className="flex items-center hover:text-red-600 transition duration-300 justify-between"
                        >
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid text-[14px] fa-arrow-right-from-bracket"></i>
                                <p className="text-[14px] font-semibold">Logout</p>
                            </div>
                            <span className="h-4 hidden border-r-2 border-r-red-600"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="flex mx-auto max-sm:flex-col max-md:flex-col justify-center gap-5 py-10 max-w-7xl max-sm:w-full"
            >
                <UserInfo />
                <div className="w-full">
                    <div className="p-3">
                        <div className="flex items-center flex-wrap gap-1">
                            {
                                tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        onClick={() => handleTabClick(tab)}
                                        className={`${activeTab === tab.name ? 'bg-black text-white' : 'bg-white text-black'} px-5 my-1 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold hover:bg-white hover:text-black`}
                                    >
                                        {tab.label}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="flex max-md:flex-col-reverse gap-5 py-5">
                            <div className='w-[100%]'>
                                {
                                    activeTab === 'info' && <InfoTab />
                                }
                                {
                                    activeTab === 'address' && <AddressTab />
                                }
                                {
                                    activeTab === 'change-password' && <ChangePasswordTab />
                                }
                            </div>
                            <ProfileImage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
