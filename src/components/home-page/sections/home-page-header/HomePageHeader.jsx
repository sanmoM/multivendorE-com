import HeaderTitle from '@/components/shared/header-title/HeaderTitle'
import NavbarSearchbar from '@/components/shared/navbar-searchbar/NavbarSearchbar'
import { FaRegBell } from 'react-icons/fa'
import { LuUserRound } from 'react-icons/lu'

export default function HomePageHeader() {
    return (
        <div className='lg:hidden'>
            <div className="container mx-auto px-4 pt-3 flex items-center justify-between">
                {/* Left Section: Notification Icon */}
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                    <FaRegBell className='w-6 h-6 text-primary' />
                </button>

                {/* Center Section: Home Title */}
                <HeaderTitle title='Home' />

                {/* Right Section: Profile Icon */}
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                    <LuUserRound className='w-6 h-6 text-primary' />
                </button>
            </div>

            {/* Search Bar Section */}
            <div className="container mx-auto px-4 py-3">
                <NavbarSearchbar />
            </div>
        </div>
    )
}
