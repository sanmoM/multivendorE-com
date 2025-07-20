import Link from 'next/link'
import './navItem2.css'

export default function NavItem2({ path, text, Icon }) {
    return (
        <div className='flex items-center gap-3 nav-item-2 '>
            <Link href={path} className="hover:text-[#ff2631] transition duration-200 flex items-center gap-2">
                <Icon className="fa-solid fa-truck text-red-600" /> <p>{text}</p>
            </Link>
            <span class="h-3 w-[1px] bg-gray-300 block"></span>
        </div>
    )
}
