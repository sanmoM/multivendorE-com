import SecondaryButton from '@/components/shared/secondary-button/SecondaryButton'
import { capitalizeText } from '@/utils/format-string'
import React from 'react'

export default function Subcategories({ items, selectedSubcategory, setSelectedSubcategory }) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {items.map((item, index) => (
                <SecondaryButton text={capitalizeText(item)} key={index} onClick={() => { setSelectedSubcategory(item) }} className={selectedSubcategory === item ? '!border-yellow-300' : ''} />
            ))}
        </div>
    )
}
