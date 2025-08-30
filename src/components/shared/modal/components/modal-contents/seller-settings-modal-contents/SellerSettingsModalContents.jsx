import ItemCard from '../../../../item-card/ItemCard';

export default function SellerSettingsModalContents({ sellerSettingsItems }) {
    return (
        <div className="w-full space-y-6">
            <div className="space-y-4">
                {sellerSettingsItems?.map((item, itemIndex) => (
                    <ItemCard item={item} key={itemIndex} />
                ))}
            </div>
        </div >
    )
}
