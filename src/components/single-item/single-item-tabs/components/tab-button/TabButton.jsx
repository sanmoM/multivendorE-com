import { cn } from '@/utils/cn'
import React from 'react'

export default function TabButton({ activeTab, setActiveTab, tabName, value }) {
    return (
        <button onClick={() => setActiveTab(value)} className={cn("text-secondary pb-2 font-semibold text-sm lg:text-base", activeTab === value && "text-primary border-b-2 !border-yellow-500 ")}>{tabName}</button>
    )
}
