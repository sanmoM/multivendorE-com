"use client";

import { usePathname, useRouter } from "next/navigation";
import { BsCart3 } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";
import { useSelector } from "react-redux";
import ProfileDropDown from "../profile-dropdown/ProfileDropDown";

const BottomNavbar = ({ setIsCartOpen }) => {
    const pathname = usePathname();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const router = useRouter()
    const navItems = [
        {
            name: 'Home',
            icon: <HiMiniHome className="h-6 w-6" />,
            path: "/"
        },
        {
            name: 'Categories',
            icon: <TfiMenuAlt className="h-6 w-6" />,
            path: "/category"
        },
        {
            name: 'Cart',
            icon: <BsCart3 className="h-6 w-6" />,
            path: "#",
            type: "button",
            badge: cartItems.length,
            handleClick: () => setIsCartOpen(true)
        },
    ];

    // this function will be called when the user clicks on a navigation item
    const handleNavigate = (path) => {
        router.push(path)
    }

    return (
        <div className="flex items-center justify-center font-sans bg-gray-50 fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            <nav className="w-full bg-white rounded-lg shadow-lg py-3 px-2">
                <div className="grid grid-cols-4 place-items-center items-center text-secondary">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            {...item.type === "button" && { onClick: item.handleClick }}
                            className={`flex flex-col items-center p-2 rounded-md transition-colors relative duration-200 ${item.active && 'text-primary font-semibold'}`}
                        >
                            <div className={`mb-1 ${pathname === item?.path && 'text-yellow-500 font-semibold'}`}>{item.icon}</div>
                            <span className={`text-xs ${pathname === item?.path && 'text-yellow-500 font-semibold'}`}>{item.name}</span>
                            {item?.badge && <div className='w-6 absolute top-0 right-0 bg-orange-500 text-white aspect-square rounded-full'>{item.badge}</div>}
                        </button>
                    ))}
                    <ProfileDropDown isMobile />
                </div>
            </nav>
        </div>
    );
};

export default BottomNavbar;
