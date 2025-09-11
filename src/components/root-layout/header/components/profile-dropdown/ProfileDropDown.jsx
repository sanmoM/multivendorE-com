// import Dropdown from '@/components/shared/dropdown/Dropdown';
// import Modal from '@/components/shared/modal/Modal';
// import AccountInfoModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/AccountInfoModalContents';
// import MyOrderModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/account-info-inner-modal-contents/my-order-modal-contents/MyOrderModalContents';
// import PaymentModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/account-info-inner-modal-contents/payment-modal-contents/PaymentModalContents';
// import AccountRootModalContents from '@/components/shared/modal/components/modal-contents/account-root-modal-contents/AccountRootModalContents';
// import AddAddressModalContents from '@/components/shared/modal/components/modal-contents/add-address-modal-contents/AddAddressModalContents';
// import AddPaymentMethodModalContents from '@/components/shared/modal/components/modal-contents/add-payment-method-modal-contents/AddPaymentMethodModalContents';
// import HelpModalContents from '@/components/shared/modal/components/modal-contents/help-modal-contents/HelpModalContents';
// import OrderModalContents from '@/components/shared/modal/components/modal-contents/order-modal-contents/OrderModalContents';
// import PasswordAndSecurityModalContents from '@/components/shared/modal/components/modal-contents/password-and-security-modal-contents/PasswordAndSecurityModalContents';
// import PersonalInfoModalContents from '@/components/shared/modal/components/modal-contents/personal-info-modal-contents/PersonalInfoModalContents';
// import { IMAGE_BASE_URL } from '@/config';
// import useModalAction from '@/hooks/useModalAction';
// import { setUser } from '@/lib/redux/features/userSlice';
// import { cn } from '@/utils/cn';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { BsShopWindow } from 'react-icons/bs';
// import { FaInbox } from 'react-icons/fa';
// import { FiHelpCircle } from "react-icons/fi";
// import { IoIosCard } from "react-icons/io";
// import { LuUserRound } from "react-icons/lu";
// import { MdLockOutline, MdOutlineHomeWork } from "react-icons/md";
// import { RiInformation2Line } from "react-icons/ri";
// import { RxExit } from "react-icons/rx";
// import { TbSitemap } from "react-icons/tb";
// import { useDispatch, useSelector } from 'react-redux';
// import AllSellerModals from '../all-seller-modals/AllSellerModals';
// import SellerRootModalContents from '@/components/shared/modal/components/modal-contents/seller-root-modal-contents/SellerRootModalContents';
// import AllAccountModals from '../all-account-modals/AllAccountModals';





"use client";

import Dropdown from '@/components/shared/dropdown/Dropdown';
import Modal from '@/components/shared/modal/Modal';
import HelpModalContents from '@/components/shared/modal/components/modal-contents/help-modal-contents/HelpModalContents';
import MobileRootModalContents from '@/components/shared/modal/components/modal-contents/mobile-root-modal-contents/MobileRootModalContents';
import OrderModalContents from '@/components/shared/modal/components/modal-contents/order-modal-contents/OrderModalContents';
import { IMAGE_BASE_URL } from '@/config';
import useModalAction from '@/hooks/useModalAction';
import { setUser } from '@/lib/redux/features/userSlice';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LuUserRound } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import AllAccountModals from '../all-account-modals/AllAccountModals';
import AllSellerModals from '../all-seller-modals/AllSellerModals';


export default function ProfileDropDown({ isMobile, isDropdownOpen, setIsDropdownOpen }) {
    const { currentModal, handleCloseAllModals, handleCloseModal, handleOpenModal } = useModalAction();

    const user = useSelector(state => state.user?.user);
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(setUser({}))
        localStorage.removeItem("token");
    }

    const handleDropdownClose = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }


    // dropdown menu items
    const profileMenuItems = [
        {
            name: 'Account',
            type: "button",
            handleClick: () => {
                handleDropdownClose()
                handleOpenModal("account-root-modal")
            }
        },
        {
            name: user?.is_reseller === "0" ? 'Become a Seller' : user?.is_reseller === "1" ? 'Seller is Pending' : 'Seller',
            type: "button",
            handleClick: () => {
                console.log(user?.is_reseller)
                if (user?.is_reseller === "0") {
                    handleOpenModal("seller-info-modal")
                } else if (user?.is_reseller === "2") {
                    handleOpenModal("seller-root-modal")
                }
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

    // dropdown placeholder
    const placeholder = (
        <div>
            {
                isMobile ? (
                    <button onClick={() => handleOpenModal("mobile-root-modal")} className='flex flex-col items-center'>
                        {
                            user?.mobile ? (
                                <>
                                    {
                                        user?.image ? (
                                            <Image src={IMAGE_BASE_URL + user.image} alt="Profile Picture" className="w-8 h-8 rounded-full object-cover" width={24} height={24} />
                                        ) : (
                                            <Image src={"/images/user.svg"} width={24} height={24} alt="Profile Picture" className='w-8 h-8 rounded-full object-cover' />
                                        )
                                    }
                                </>
                            ) : (
                                <LuUserRound className='w-6 h-6 text-secondary' />
                            )
                        }
                        {
                            isMobile && <span className='text-xs mt-1'>Profile</span>
                        }
                    </button>
                ) : (
                    <button className={cn(" rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300 flex flex-col justify-center items-center", !user?.mobile && "p-3")} onClick={handleDropdownClose}>
                        {
                            user?.mobile ? (
                                <>
                                    {
                                        user?.image ? (
                                            <Image src={IMAGE_BASE_URL + user.image} alt="Profile Picture" className="w-12 h-12 rounded-full object-cover" width={24} height={24} />
                                        ) : (
                                            <Image src={"/images/user.svg"} width={24} height={24} alt="Profile Picture" className='w-12 h-12 rounded-full object-cover' />
                                        )
                                    }
                                </>
                            ) : (
                                <LuUserRound className='w-8 h-8 lg:w-6 lg:h-6 text-secondary' />
                            )
                        }
                    </button>
                )
            }
        </div >
    )

    // dropdown contents
    const contents = (
        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                token ? (
                    <>
                        {
                            profileMenuItems.map((item, index) => (
                                <div key={index}>
                                    {
                                        item.type === "button" ? (
                                            <button
                                                onClick={() => item.handleClick()} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary flex gap-2 items-center w-full" role="menuitem">
                                                <span>{item.name}</span>
                                            </button>
                                        ) : (
                                            <Link
                                                onClick={() => handleCloseModal()}
                                                href={item.path || "#"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary" role="menuitem">
                                                <span>{item.name}</span>
                                            </Link>
                                        )
                                    }

                                </div>
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
        <div >
            {/* all dropdown contents */}
            <Dropdown isDropdownOpen={isDropdownOpen} placeholder={placeholder} contents={contents} contentsClassName={cn(isMobile ? "!bottom-[calc(100%+0.5rem)] !top-auto !-right-2 !left-auto" : "")} />


            {/* all modal for profile  */}
            <div>


                {/* mobileRootModalContents */}
                <Modal isLeft={false} isOpen={currentModal === "mobile-root-modal"} setIsOpen={() => handleCloseModal()} title={"Account"}>
                    <MobileRootModalContents />
                </Modal>

                {/* account modals */}
                <AllAccountModals isMobile={isMobile} />

                {/* seller modals */}
                <AllSellerModals />

                {/* help modals */}
                <Modal isLeft={false} isOpen={currentModal === "help-modal"} setIsOpen={() => handleCloseModal()} title={"Help"}>
                    <HelpModalContents />
                </Modal>


                {/* dropdown modals */}
                <Modal isLeft={false} isOpen={currentModal === "order-modal"} setIsOpen={() => handleCloseModal()} title={"Orders"}>
                    <OrderModalContents />
                </Modal>
            </div>
        </div>
    )
}
