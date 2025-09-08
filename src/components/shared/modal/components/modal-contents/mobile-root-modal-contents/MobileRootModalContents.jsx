import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useModalAction from '@/hooks/useModalAction';
import { FiHelpCircle } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { useSelector } from 'react-redux';
import ItemCard from '../../../../item-card/ItemCard';

export default function MobileRootModalContents({ isMobile }) {
    const { handleCloseModal, handleOpenModal } = useModalAction();
    const user = useSelector(state => state?.user?.user);


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
                    title: user?.is_reseller === "0" ? 'Become a Seller' : user?.is_reseller === "1" ? 'Seller request is Pending' : 'Seller',
                    subtitle: user?.is_reseller === "0" ? 'Become a seller' : user?.is_reseller === "1" ? 'Seller request is pending' : 'Mange your seller account',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    ),
                    handleClick: () => {
                        if (user?.is_reseller === "0") {
                            handleOpenModal("seller-info-modal")
                        } else if (user?.is_reseller === "2") {
                            handleOpenModal("seller-root-modal")
                        }
                    },
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
