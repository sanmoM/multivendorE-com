import Link from 'next/link'
import React from 'react'

export default function CategoryTabContents({ category }) {
    return (
        < div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4" >
            {
                category?.map((category, index) => (
                    <Link
                    href={"/category?category=" + category.id}
                    key={index}
                    className="flex items-center gap-4 px-4 py-3  justify-center border-2 border-gray-300 rounded-xl hover:bg-gray-200 transition-colors duration-200"
                    >
                        {category.icon}
                        <span className="text-primary font-bold">{category.categoryName}</span>
                    </Link>
                ))
            }
        </div >
    )
}
