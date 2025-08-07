import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import ModalNavigationCard from '../components/modal-navigation-card/ModalNavigationCard';

export default function AccountSettingsModalContents({ isMobile, accountMenuItems }) {

    return (
        <div className="w-full space-y-6">
            {accountMenuItems.map((category, index) => (
                <div key={index}>
                    <PrimaryTitle className="text-xl font-bold text-gray-900 mb-4" title={category.category} />
                    <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                            <ModalNavigationCard item={item} />
                        ))}
                        {
                            isMobile && category?.mobileMenuItems?.map((item, index) => (
                                <ModalNavigationCard item={item} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
