import { cn } from '@/utils/cn'
import React from 'react'

export default function TabButton({ text, activeTab, setActiveTab, value, className }) {
    return (
        <button onClick={() => setActiveTab(value)} className={cn("py-2 px-4 text-center text-gray-700 font-semibold  !border-yellow-300", activeTab === value ? "text-primary border-b-2" : "text-secondary", className)}>
            {text}
        </button>
    )
}
