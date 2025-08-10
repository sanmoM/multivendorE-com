"use client";

import Dropdown from '@/components/shared/dropdown/Dropdown';
import Modal from '@/components/shared/modal/Modal';
import AccountInfoModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/AccountInfoModalContents';
import MyOrderModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/account-info-inner-modal-contents/my-order-modal-contents/MyOrderModalContents';
import PaymentModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/account-info-inner-modal-contents/payment-modal-contents/PaymentModalContents';
import AddressModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/address-modal-contents/AddressModalContents';
import AccountSettingsModalContents from '@/components/shared/modal/components/modal-contents/account-settings-modal-contents/AccountSettingsModalContents';
import BecomeASellerModalContents from '@/components/shared/modal/components/modal-contents/become-a-seller-modal-contents/BecomeASellerModalContents';
import HelpModalContents from '@/components/shared/modal/components/modal-contents/help-modal-contents/HelpModalContents';
import OrderModalContents from '@/components/shared/modal/components/modal-contents/order-modal-contents/OrderModalContents';
import ProductsModalContents from '@/components/shared/modal/components/modal-contents/products-modal-contents/ProductsModalContents';
import PromotionModalContents from '@/components/shared/modal/components/modal-contents/promotion-modal-contents/PromotionModalContents';
import SellerSettingsModalContents from '@/components/shared/modal/components/modal-contents/seller-settings-modal-contents/SellerSettingsModalContents';
import useModalAction from '@/hooks/useModalAction';
import { setUser } from '@/lib/redux/features/userSlice';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { BsShopWindow } from 'react-icons/bs';
import { FaInbox } from 'react-icons/fa';
import { FiHelpCircle } from "react-icons/fi";
import { IoIosCard, IoMdGift } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import { RxExit } from "react-icons/rx";
import { TbSitemap } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';


export default function ProfileDropDown({ isMobile }) {
    const { currentModal, handleCloseAllModals, handleCloseModal, handleOpenModal } = useModalAction();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(setUser({ email: "" }))
    }

    const handleDropdownClose = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }


    // dropdown menu items
    const profileMenuItems = [
        {
            name: 'Account settings',
            type: "button",
            handleClick: () => {
                handleDropdownClose()
                handleOpenModal("account-settings-modal")
            }
        },
        {
            name: 'Orders',
            type: "button",
            handleClick: () => {
                handleDropdownClose()
                handleOpenModal("order-modal")
            }
        },
        {
            name: 'Products',
            type: "button",
            handleClick: () => {
                handleDropdownClose()
                handleOpenModal("product-modal")
            }
        },
        {
            name: 'Help',
            type: "button",
            handleClick: () => {
                handleDropdownClose()
                handleOpenModal("help-modal")
            }
        },
    ];

    // account modal menu items
    const profileItems = [
        {
            category: 'Account',
            items: [
                {
                    title: 'Account Information',
                    subtitle: 'Manage your account information',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    ),
                    handleClick: () => handleOpenModal("account-information-modal"),
                },
                {
                    title: 'Notifications',
                    subtitle: 'Manage your notification preferences',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                    ),
                },
                {
                    title: user?.accountType === "seller" ? 'Seller Settings' : 'Become a Seller',
                    subtitle: user?.accountType === "seller" ? 'View your seller settings' : 'Become a seller',
                    icon: (
                        <BsShopWindow className="h-6 w-6 text-gray-700" />
                    ),
                    handleClick: () => {
                        if (user?.accountType === "seller") {
                            handleOpenModal("seller-settings-modal")
                        } else {

                        }
                    },
                },
            ],
            mobileMenuItems: [
                {
                    title: 'Orders',
                    subtitle: 'Manage your orders',
                    handleClick: () => handleOpenModal("order-modal"),
                    icon: (
                        <TbSitemap className="h-6 w-6 text-gray-700" />
                    )
                },
                {
                    title: 'Products',
                    subtitle: 'Manage your products',
                    handleClick: () => handleOpenModal("product-modal"),
                    icon: (
                        <FaInbox className="h-6 w-6 text-gray-700" />
                    )
                },
                {
                    title: 'Help',
                    subtitle: 'Get help with your account',
                    handleClick: () => handleOpenModal("help-modal"),
                    icon: (
                        <FiHelpCircle className="h-6 w-6 text-gray-700" />
                    )
                },
            ]
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
            category: '',
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

    // account information items
    const accountItems = [
        {
            name: 'Personal Information',
            subtitle: 'Manage your personal information',
            type: "button",
            // handleClick: () => handleOpenModal(""),
            icon: <RiInformation2Line className="h-6 w-6 text-gray-700" />
        },
        {
            name: 'My Address',
            subtitle: 'Manage your address',
            type: "button",
            handleClick: () => handleOpenModal("my-address-modal"),
            icon: <MdOutlineHomeWork className="h-6 w-6 text-gray-700" />
        },
        {
            name: 'My Orders',
            subtitle: 'View your orders',
            type: "button",
            handleClick: () => handleOpenModal("my-orders-modal"),
            icon: <TbSitemap className="h-6 w-6 text-gray-700" />
        },
        {
            name: 'Payment Methods',
            subtitle: 'Manage your payment methods',
            type: "button",
            handleClick: () => handleOpenModal("payment-modal"),
            icon: <IoIosCard className="h-6 w-6 text-gray-700" />
        },
    ];


    // account information items
    const sellerSettingsItems = [
        {
            title: 'View Seller Profile',
            subtitle: 'View your seller profile',
            type: "button",
            handleClick: () => {
                handleCloseAllModals();
                router.push("/seller-profile")
            },
            icon: (<svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>)
        },
        {
            title: 'Create Promotion',
            subtitle: 'Create a promotion',
            type: "button",
            handleClick: () => handleOpenModal("promotion-modal"),
            icon: <IoMdGift className="h-6 w-6 text-gray-700" />
        },
    ];


    // dropdown placeholder
    const placeholder = (
        <div className='inline'>
            {
                isMobile ? (
                    <button onClick={() => handleOpenModal("account-settings-modal")} className='flex flex-col items-center'>
                        <LuUserRound className='w-6 h-6 text-secondary' />
                        <span className='text-xs '>Profile</span>
                    </button>
                ) : (
                    <button className="p-3 rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300" onClick={handleDropdownClose}>
                        <LuUserRound className='w-6 h-6 text-secondary' />
                    </button>
                )
            }
        </div >
    )

    console.log(currentModal)


    // dropdown contents
    const contents = (
        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                user?.mobile ? (
                    <>
                        {
                            profileMenuItems.map((item, index) => (
                                <>
                                    {
                                        item.type === "button" ? (
                                            <button
                                                key={index}
                                                onClick={() => item.handleClick()} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary flex gap-2 items-center w-full" role="menuitem">
                                                <span>{item.name}</span>
                                            </button>
                                        ) : (
                                            <Link
                                                key={index}

                                                onClick={() => handleCloseModal()}
                                                href={item.path || "#"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">
                                                <span>{item.name}</span>
                                            </Link>
                                        )
                                    }

                                </>
                            ))
                        }
                        <button onClick={handleLogout} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary flex gap-2 items-center w-full" role="menuitem">
                            <RxExit /><span>Logout</span>
                        </button>
                    </>
                ) : (
                    <>
                        <Link onClick={handleDropdownClose} href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Login</Link>
                        <Link onClick={handleDropdownClose} href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">Sign up</Link>
                    </>
                )
            }
        </div>
    )



    return (
        <div className='inline'>
            {/* all dropdown contents */}
            <Dropdown containerClassName="inline" isDropdownOpen={isDropdownOpen} placeholder={placeholder} contents={contents} contentsClassName={cn(isMobile ? "!bottom-[calc(100%+0.5rem)] !top-auto !-right-2 !left-auto" : "")} />


            {/* all modal for profile  */}
            <div>
                {/* all modal for profile  */}
                <Modal isLeft={false} isOpen={currentModal === "order-modal"} setIsOpen={() => handleCloseModal()} title={"Orders"}>
                    <OrderModalContents />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "account-settings-modal"} setIsOpen={() => handleCloseModal()} title={"Account Settings"}>
                    <AccountSettingsModalContents isMobile={isMobile} accountMenuItems={profileItems} />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "product-modal"} setIsOpen={() => handleCloseModal()} title={"My Products"}>
                    <ProductsModalContents />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "help-modal"} setIsOpen={() => handleCloseModal()} title={"Help"}>
                    <HelpModalContents />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "account-information-modal"} setIsOpen={() => handleCloseModal()} title={"Account Information"}>
                    <AccountInfoModalContents accountInfoItems={accountItems} />
                </Modal>

                {/* seller modals */}
                <Modal isLeft={false} isOpen={currentModal === "become-a-seller-modal"} setIsOpen={() => handleCloseModal()} title={"Become a Seller"}>
                    <BecomeASellerModalContents handleCloseModal={handleCloseModal} />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "seller-settings-modal"} setIsOpen={() => handleCloseModal()} title={"Seller Settings"}>
                    <SellerSettingsModalContents handleCloseModal={handleCloseModal} isMobile={isMobile} sellerSettingsItems={sellerSettingsItems} />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "promotion-modal"} setIsOpen={() => handleCloseModal()} title={"Create Promotion"}>
                    <PromotionModalContents handleCloseModal={handleCloseAllModals} />
                </Modal>



                {/* account information modals */}
                <Modal isLeft={false} isOpen={currentModal === "payment-modal"} setIsOpen={() => handleCloseModal()} title={"Payment Methods"}>
                    <PaymentModalContents />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "my-orders-modal"} setIsOpen={() => handleCloseModal()} title={"My Orders"}>
                    <MyOrderModalContents />
                </Modal>
                <Modal isLeft={false} isOpen={currentModal === "my-address-modal"} setIsOpen={() => handleCloseModal()} title={"My Address"}>
                    <AddressModalContents />
                </Modal>
            </div>
        </div>
    )
}
