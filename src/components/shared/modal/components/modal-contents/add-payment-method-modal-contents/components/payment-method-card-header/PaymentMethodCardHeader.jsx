import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import React from 'react'

export default function PaymentMethodCardHeader({ item }) {
    return (
        <div className="flex items-center justify-between">
            <PrimaryTitle title={item?.name} />
            <button className="text-gray-500 hover:text-gray-700">
                {
                    item?.icon
                }
            </button>
        </div>
    )
}
