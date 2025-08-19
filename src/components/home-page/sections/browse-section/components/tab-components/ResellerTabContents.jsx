import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import CustomSlider from '@/components/shared/custom-slider/CustomSlider'
import Filter from '@/components/shared/filter/Filter'
import React from 'react'

export default function ResellerTabContents({ resellers }) {
    return (
        <div>
            <div className='mb-6 px-2 lg:px-0'>
                <Filter />
            </div>
            <CustomSlider mobileView={3} desktopView={5}>
                {
                    resellers?.map((shop) => (
                        <PrimaryCard key={shop.id} item={shop} containerClassName={"px-2"} />
                    ))
                }
            </CustomSlider>
        </div>
    )
}
