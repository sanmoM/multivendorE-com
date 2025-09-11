import NoDataText from '@/components/shared/no-data-text/NoDataText'
import Link from 'next/link'
import React from 'react'
import SecondaryButton from '../../../../../shared/secondary-button/SecondaryButton'
import { useRouter } from 'next/navigation'

export default function CategoryTabContents({ category, isLoading }) {
    const router = useRouter()
    return (
        < div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4" >
            {
                category.length > 0 ?
                    category?.map((category, index) => (
                        // <>
                        //     {
                        //         isLoading ? (<div
                        //             key={index}
                        //             className="flex items-center gap-4 px-4 py-3 justify-center border-2 border-gray-300 rounded-xl animate-pulse"
                        //         >
                        //             {/* Icon placeholder */}
                        //             {/* <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 rounded-full" /> */}

                        //             {/* Text placeholder */}
                        //             <div className="h-4 bg-gray-200 rounded w-20 lg:w-32" />
                        //         </div>) : (
                        //             <Link
                        //                 href={"/category?category=" + category?.id}
                        //                 key={index}
                        //                 className="flex items-center gap-4 px-4 py-3  justify-center border-2 border-gray-300 rounded-xl hover:bg-gray-200 transition-colors duration-200"
                        //             >
                        //                 {/* {category?.icon} */}
                        //                 <span className="text-xs lg:text-base text-primary font-bold text-nowrap">{category?.categoryName}</span>
                        //             </Link>
                        //         )
                        //     }
                        // </>
                        <SecondaryButton onClick={() => router.push("/category?category=" + category?.id)} isLoading={isLoading} text={category?.categoryName} key={index} />
                    )) : <NoDataText text={"No categories found"} />

            }
        </div >
    )
}
