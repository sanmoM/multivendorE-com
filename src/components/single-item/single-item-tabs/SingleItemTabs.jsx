"use client";

import { useState } from 'react'
import TabButton from './components/tab-button/TabButton'

const tabs = [
    {
        name: 'Description',
        value: 'description'
    },
    {
        name: 'Variants',
        value: 'variants'
    },
    {
        name: 'Cake Flavors',
        value: 'cake-flavors'
    },
    {
        name: "Delivery",
        value: 'delivery'
    },
    {
        name: "Reviews",
        value: 'reviews'
    }
]

export default function SingleItemTabs() {
    const [activeTab, setActiveTab] = useState('description')
    return (
        <div className='mt-10 lg:w-[70%]'>
            <div className='border-b border-gray-200'>
                <div className='flex justify-between lg:justify-start lg:space-x-8'>
                    {
                        tabs.map((tab, index) => {
                            return (
                                <div key={index}>
                                    <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName={tab.name} value={tab.value} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <p className='text-primary mt-4 lg:w-[95%]'>Our chocolate cake is made with rich chocolate and fudge frosting. It's a perfect combination of rich chocolate and fudge frosting. Made with finely ground cocoa, rich chocolate, and fudge frosting, our chocolate cake is a delicious treat that will satisfy your sweet tooth.</p>
        </div>
    )
}
