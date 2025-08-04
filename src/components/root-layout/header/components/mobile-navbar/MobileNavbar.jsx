"use client";

import { useRouter } from "next/navigation";
import { BsCart3 } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";
import ProfileDropDown from "../profile-dropdown/ProfileDropDown";

const BottomNavbar = ({ setIsCartOpen }) => {
    const router = useRouter()
    const navItems = [
        {
            name: 'Home',
            icon: <HiMiniHome className="h-6 w-6" />,
            path: "#"
        },
        {
            name: 'Categories',
            icon: <TfiMenuAlt className="h-6 w-6" />,
            path: "#"
        },
        {
            name: 'Cart',
            icon: <BsCart3 className="h-6 w-6" />,
            path: "#",
            type: "button",
            handleClick: () => setIsCartOpen(true)
        },
        // {
        //     name: 'Orders',
        //     icon: <IoDocumentTextOutline className="h-6 w-6" />,
        //     path: "#"
        // },
        // {
        //     name: 'Profile',
        //     icon: <LuUserRound className="h-6 w-6" />,
        //     path: "#"
        // },
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
                            {...item.type === "button" && { onClick: item.handleClick }}
                            key={index}
                            className={`flex flex-col items-center p-2 rounded-md transition-colors duration-200 ${item.active && 'text-primary font-semibold'}`}
                        >
                            <div className={`mb-1 ${item.active && 'text-primary font-semibold'}`}>{item.icon}</div>
                            <span className={`text-xs ${item.active && 'text-primary font-semibold'}`}>{item.name}</span>
                        </button>
                    ))}
                    {/* <Dropdown /> */}
                    {/* <MobileProfileDropdown /> */}
                    <ProfileDropDown isMobile />
                </div>
            </nav>
        </div>
    );
};

export default BottomNavbar;
