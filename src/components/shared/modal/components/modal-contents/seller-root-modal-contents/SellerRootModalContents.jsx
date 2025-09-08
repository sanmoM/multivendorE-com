import useModalAction from '@/hooks/useModalAction';
import { FaInbox, FaMoneyBill } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import ItemCard from '../../../../item-card/ItemCard';

export default function SellerRootModalContents() {
    const { handleOpenModal } = useModalAction();
    const sellerMenuItems = [
        {
            title: 'Seller Information',
            subtitle: 'Manage your seller information',
            icon: (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            ),
            handleClick: () => handleOpenModal("seller-info-modal"),
        },
        {

            title: 'Create Product',
            subtitle: 'Create a product',
            icon: (
                <IoAddCircleSharp className="h-6 w-6 text-gray-700" />
            ),
            handleClick: () => handleOpenModal("create-product-modal"),
        },
        {

            title: 'Seller Product',
            subtitle: 'View your selling products',
            icon: (
                <FaInbox className="h-6 w-6 text-gray-700" />
            ),
            handleClick: () => handleOpenModal("seller-product-modal"),
        },
        {

            title: 'Seller Order',
            subtitle: 'View your selling orders',
            icon: (
                <FaInbox className="h-6 w-6 text-gray-700" />
            ),
            handleClick: () => handleOpenModal("seller-order-modal"),
        },
        {

            title: 'Withdraw',
            subtitle: 'Withdraw your balance',
            icon: (
                <FaMoneyBill className="h-6 w-6 text-gray-700" />
            ),
            handleClick: () => handleOpenModal("withdraw-modal"),
        },
    ]
    return (
        <div className="w-full space-y-6">
            {sellerMenuItems?.map((item, index) => (
                <div className="space-y-4">
                    <ItemCard item={item} key={index} />
                </div>
            ))}
        </div>
    )
}
