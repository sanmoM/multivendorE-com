import AddressInfo from '@/components/address/address-info/AddressInfo'
import MobileFilterButtons from '@/components/address/filter-buttons/FilterButtons'
import React from 'react'

export default function address() {
    return (
        <div>
            <MobileFilterButtons />
            <AddressInfo />
        </div>
    )
}
