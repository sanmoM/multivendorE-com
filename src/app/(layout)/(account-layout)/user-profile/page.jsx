"use client";

import TabButton from '@/components/shared/tab-button/TabButton';
import ProfileImage from '@/components/user-profile/profile-image/ProfileImage';
import AddressTab from '@/components/user-profile/profile-tabs/address-tab/AddressTab';
import ChangePasswordTab from '@/components/user-profile/profile-tabs/change-password-tab/ChangePasswordTab';
import InfoTab from '@/components/user-profile/profile-tabs/info-tab/InfoTab';
import React from 'react';

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
        <div className="w-full">
            <div className="p-3">
                <div className="flex items-center flex-wrap gap-1">
                    {
                        tabs.map((tab, index) => (
                            <TabButton value={tab.name} label={tab.label} handleTabClick={handleTabClick} activeTab={activeTab} key={index} />
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
    )
}
