import Link from 'next/link'
import React from 'react'

export default function NavItem({path, text}) {
    return (
        <li className='list-none hover:text-[#ff2631]'><Link href={path}>{text}</Link></li>
    )
}
