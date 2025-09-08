import useModalAction from '@/hooks/useModalAction';
import ItemCard from '../../../../item-card/ItemCard';

import { IoIosCard } from "react-icons/io";
import { MdLockOutline, MdOutlineHomeWork } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import { TbSitemap } from "react-icons/tb";

export default function AccountInfoModalContents() {
    const { handleOpenModal } = useModalAction();
    // account information items
    const accountInfoItems = [
        {
            name: 'Personal Information',
            subtitle: 'Manage your personal information',
            type: "button",
            handleClick: () => handleOpenModal("personal-information-modal"),
            icon: <RiInformation2Line className="h-6 w-6 text-gray-700" />
        },
        {
            name: 'Password and Security',
            subtitle: 'Manage your password and security',
            type: "button",
            handleClick: () => handleOpenModal("password-and-security-modal"),
            icon: <MdLockOutline className="h-6 w-6 text-gray-700" />
        },
        {
            name: 'My Address',
            subtitle: 'Manage your address',
            type: "button",
            handleClick: () => handleOpenModal("add-address-modal"),
            icon: <MdOutlineHomeWork className="h-6 w-6 text-gray-700" />
        },
        // {
        //     name: 'Payment Methods',
        //     subtitle: 'Manage your payment methods',
        //     type: "button",
        //     handleClick: () => handleOpenModal("payment-modal"),
        //     icon: <IoIosCard className="h-6 w-6 text-gray-700" />
        // },
    ];


    return (
        <div className="space-y-4">
            {accountInfoItems.map((item, itemIndex) => (
                <ItemCard item={{ title: item.name, icon: item.icon, subtitle: item.subtitle, handleClick: item.handleClick }} key={itemIndex} />
            ))}
        </div>
    )
}
