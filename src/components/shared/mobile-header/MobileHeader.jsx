import HeaderTitle from '@/components/shared/header-title/HeaderTitle';
import { cn } from '@/utils/cn';
import { IoMdNotificationsOutline } from "react-icons/io";
import BackBtn from '../back-btn/BackBtn';

export default function MobileHeader({ title, containerClassName }) {
    return (
        <div className={cn('lg:hidden', containerClassName)}>
            <div className="container mx-auto px-4 pt-3 flex items-center justify-between">
                {/* <BackBtn /> */}

                {/* Center Section: Home Title */}
                <HeaderTitle title={title} />

                {/* Right Section: Profile Icon */}
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                    <IoMdNotificationsOutline className='w-6 h-6 text-primary' />
                </button>
            </div>
        </div>
    )
}
