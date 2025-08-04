
import SecondaryContainer from '@/components/shared/container/SecondaryContainer';
import Link from 'next/link';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import NavbarSearchbar from '../../../../shared/navbar-searchbar/NavbarSearchbar';
import ProfileDropDown from './components/profile-dropdown/ProfileDropDown';

export default function DesktopNavbar({ setIsCartOpen }) {
    return (
        <SecondaryContainer className="max-w-[1550px] mx-auto px-4 py-5 lg:flex items-center justify-between hidden">
            {/* Left Section: Logo and Navigation */}
            <div className="flex items-center space-x-14">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 text-primary text-xl font-bold">
                    {/* Star/Sparkle Icon */}
                    <svg
                        className="h-6 w-6 text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.691h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.924 10.102c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.691l1.519-4.674z"></path>
                    </svg>
                    <span>Sakhipur Bazar</span>
                </Link>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-gray-700 text-base">
                    <Link href="/" className="text-primary hover:text-secondary font-medium">Home</Link>
                    <Link href="/category" className="text-primary hover:text-secondary font-medium">Category</Link>
                    <Link href="/shop" className="text-primary hover:text-secondary font-medium">Shop</Link>
                    <Link href="/reseller" className="text-primary hover:text-secondary font-medium">Reseller</Link>
                </nav>
            </div>

            {/* Right Section: Search and User Icons */}
            <div className="flex items-center space-x-8">

                <NavbarSearchbar inputClassName={'w-48'} />

                <div className='space-x-2'>
                    <button className="p-3 rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                        <IoMdNotificationsOutline className='w-6 h-6 text-secondary' />
                    </button>

                    {/* Cart Icon */}
                    <button onClick={() => setIsCartOpen(true)} className="p-3 rounded-full bg-tertiary hover:bg-secondary/50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                        <IoCartOutline className='w-6 h-6 text-secondary' />
                    </button>
                    <ProfileDropDown />
                </div>
            </div>
        </SecondaryContainer>
    )
}
