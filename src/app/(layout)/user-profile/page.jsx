"use client";

import ProfileImage from '@/components/user-profile/profile-image/ProfileImage'
import AddressTab from '@/components/user-profile/profile-tabs/address-tab/AddressTab';
import ChangePasswordTab from '@/components/user-profile/profile-tabs/change-password-tab/ChangePasswordTab';
import InfoTab from '@/components/user-profile/profile-tabs/info-tab/InfoTab'
import AccountSideBar from '@/components/shared/AccountSideBar/AccountSideBar'
import React from 'react'
import MobileAccountSideBar from '@/components/shared/AccountSideBar/MobileAccountSideBar';
import TabButton from '@/components/shared/tab-button/TabButton';

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
        setActiveTab(tab);
    };
    return (
        <div>
            <MobileAccountSideBar />
            <div
                className="flex mx-auto max-sm:flex-col max-md:flex-col justify-center gap-5 py-10 max-w-7xl max-sm:w-full"
            >
                <AccountSideBar />
                <div className="w-full">
                    <div className="p-3">
                        <div className="flex items-center flex-wrap gap-1">
                            {
                                tabs.map((tab) => (
                                    <TabButton value={tab.name} label={tab.label} handleTabClick={handleTabClick} activeTab={activeTab} />
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
