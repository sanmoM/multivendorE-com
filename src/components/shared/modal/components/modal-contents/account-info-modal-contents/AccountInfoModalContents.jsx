import ItemCard from '../../../../item-card/ItemCard';

export default function AccountInfoModalContents({ accountInfoItems }) {


    return (
        <div className="space-y-4">
            {accountInfoItems.map((item, itemIndex) => (
                <ItemCard item={{ title: item.name, icon: item.icon, subtitle: item.subtitle, handleClick: item.handleClick }} />
            ))}
        </div>
    )
}
