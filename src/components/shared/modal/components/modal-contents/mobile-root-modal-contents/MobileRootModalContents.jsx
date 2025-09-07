import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useModalAction from '@/hooks/useModalAction';
import { FaInbox } from 'react-icons/fa';
import { FiHelpCircle } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { TbSitemap } from "react-icons/tb";
import ItemCard from '../../../../item-card/ItemCard';

export default function MobileRootModalContents({ isMobile }) {
    const { handleCloseModal, handleOpenModal } = useModalAction();

    const accountMenuItems = [
        {
            category: 'Account',
            items: [
                {
                    title: 'Account',
                    subtitle: 'Manage your account',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    ),
                    handleClick: () => handleOpenModal("account-information-modal"),
                },
                {
                    title: 'Seller',
                    subtitle: 'Manage your seller',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    ),
                    handleClick: () => handleOpenModal("seller-root-modal"),
                },
                {
                    title: 'Help',
                    subtitle: 'Get help with your account',
                    handleClick: () => handleOpenModal("help-modal"),
                    icon: (
                        <FiHelpCircle className="h-6 w-6 text-gray-700" />
                    )
                },
            ],
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
        {
            category: 'Actions',
            items: [
                {
                    title: 'Logout',
                    handleClick: () => {
                        handleLogout()
                        handleCloseModal()
                    },
                    // subtitle: 'Version 1.2.3',
                    icon: (
                        <RxExit className="h-6 w-6 text-gray-700" />
                    ),
                },
            ],
        },
    ];
    return (
        <div className="w-full space-y-6">
            {accountMenuItems.map((category, index) => (
                <div key={index}>
                    <PrimaryTitle className="text-xl font-bold text-gray-900 mb-4" title={category.category} />
                    <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                            <ItemCard item={item} key={itemIndex} />
                        ))}
                        {
                            isMobile && category?.mobileMenuItems?.map((item, index) => (
                                <ItemCard item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
