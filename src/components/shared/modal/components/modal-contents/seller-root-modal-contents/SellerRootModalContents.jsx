import useIsMobile from '@/hooks/useIsMobile';
import useModalAction from '@/hooks/useModalAction';
import { FaInbox } from 'react-icons/fa';
import ItemCard from '../../../../item-card/ItemCard';

export default function SellerRootModalContents() {
    const { handleOpenModal } = useModalAction();
    const isMobile = useIsMobile();
    const sellerMenuItems = [
        {
            category: 'Seller Info',
            items: [
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

            ],
        },
        {
            category: 'Create Product',
            items: [
                {
                    title: 'Create Product',
                    subtitle: 'Create a product',
                    icon: (
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    ),
                    handleClick: () => handleOpenModal("create-product-modal"),
                },

            ],
        },
        {
            category: 'Seller Product',
            items: [
                {
                    title: 'Seller Product',
                    subtitle: 'View your selling products',
                    icon: (
                        <FaInbox className="h-6 w-6 text-gray-700" />
                    ),
                    handleClick: () => handleOpenModal("seller-product-modal"),
                },
            ],
        },
    ]
    return (
        <div className="w-full space-y-6">
            {sellerMenuItems.map((category, index) => (
                <div key={index}>
                    {/* <PrimaryTitle className="text-xl font-bold text-gray-900 mb-4" title={category.category} /> */}
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
