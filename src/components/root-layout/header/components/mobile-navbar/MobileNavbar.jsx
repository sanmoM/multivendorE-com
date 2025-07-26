import { BsCart3 } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";

const BottomNavbar = () => {
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
            path: "#"
        },
        {
            name: 'Orders',
            icon: <IoDocumentTextOutline className="h-6 w-6" />,
            path: "#"
        },
        {
            name: 'Profile',
            icon: <LuUserRound className="h-6 w-6" />,
            path: "#"
        },
    ];

    return (
        <div className="flex items-center justify-center font-sans bg-gray-50 fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            <nav className="w-full max-w-lg bg-white rounded-lg shadow-lg py-3 px-2">
                <div className="flex justify-around items-center text-secondary">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className={`flex flex-col items-center p-2 rounded-md transition-colors duration-200 ${item.active && 'text-primary font-semibold'}`}
                        >
                            <div className={`mb-1 ${item.active && 'text-primary font-semibold'}`}>{item.icon}</div>
                            <span className={`text-xs ${item.active && 'text-primary font-semibold'}`}>{item.name}</span>
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default BottomNavbar;
