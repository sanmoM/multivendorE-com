import { cn } from '@/utils/cn'
import React from 'react'

export default function TabButton({ text, activeTab, setActiveTab, value }) {
    return (
        <button onClick={() => setActiveTab(value)} className={cn("py-2 px-4 text-center text-gray-700 font-semibold border-red-500", activeTab === value ? "text-primary" : "text-secondary")}>
            {text}
        </button>
    )
}
