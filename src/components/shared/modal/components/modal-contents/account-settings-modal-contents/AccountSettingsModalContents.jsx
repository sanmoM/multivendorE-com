import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import ItemCard from '../../../../item-card/ItemCard';

export default function AccountSettingsModalContents({ isMobile, accountMenuItems }) {
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
