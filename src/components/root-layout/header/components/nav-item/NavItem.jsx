import Link from 'next/link'
import React from 'react'

export default function NavItem({path, text}) {
    return (
        <li className='list-none'><Link href={path}>{text}</Link></li>
    )
}
