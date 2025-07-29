import Card2 from '@/components/shared/card-2/Card2'
import CustomSlider from '@/components/shared/custom-slider/CustomSlider'
import React from 'react'

export default function ResellerTabContents({ resellers }) {
    return (
        <div>
            <CustomSlider mobileView={3} desktopView={5}>
                {
                    resellers?.map((shop) => (
                        <Card2 key={shop.id} item={shop} containerClassName={"px-2"} />
                    ))
                }
            </CustomSlider>
        </div>
    )
}
