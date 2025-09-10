import React from 'react'
import TabButton from '../tab-button/TabButton'
import { cn } from '@/utils/cn'

export default function Tabs({ activeTab, tabs, className }) {
    return (
        <div className='overflow-x-auto hide-scrollbar  border-b mb-4 lg:mb-6'>
            <div className={cn(`flex justify-between `, className)}>
                {
                    tabs.map((tab, index) => (
                        <TabButton text={tab.label} value={tab.value} activeTab={activeTab} setActiveTab={tab.onClick} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
