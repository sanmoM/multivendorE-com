// import { cn } from '@/utils/cn'
// import React from 'react'

// export default function Dropdown({ placeholder, containerClassName, isDropdownOpen, contents, contentsClassName }) {
//     return (
//         <div className={cn('relative', containerClassName)}>
//             {placeholder}
//             <div className={cn("absolute top-[calc(100%+0.5rem)] right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 !ring-secondary ring-opacity-5 focus:outline-none overflow-hidden", isDropdownOpen ? "opacity-100 " : "opacity-0 invisible", contentsClassName)}>
//                 {contents}
//             </div>
//         </div>
//     )
// }



import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/utils/cn'

export default function Dropdown({ placeholder, containerClassName, contents, contentsClassName }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={dropdownRef} className={cn('relative', containerClassName)}>
            <div onClick={() => setIsDropdownOpen((prev) => !prev)} >{placeholder}</div>

            <div
                className={cn(
                    'absolute top-[calc(100%+0.5rem)] right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 !ring-secondary ring-opacity-5 focus:outline-none overflow-hidden transition-opacity duration-200',
                    isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
                    contentsClassName
                )}
            >
                {contents}
            </div>
        </div>
    )
}
