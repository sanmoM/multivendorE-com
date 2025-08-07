import ModalNavigationCard from '../components/modal-navigation-card/ModalNavigationCard';

export default function AccountInfoModalContents({ accountInfoItems }) {


    return (
        <div className="space-y-4">
            {accountInfoItems.map((item, itemIndex) => (
                <ModalNavigationCard item={{ title: item.name, icon: item.icon, subtitle: item.subtitle, handleClick: item.handleClick }} />
            ))}
        </div>
    )
}
