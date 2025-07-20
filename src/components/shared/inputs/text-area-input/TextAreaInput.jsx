import { cn } from '@/utils/cn'
import React from 'react'

export default function TextAreaInput({ label, value, setValue, variant }) {
    return (
        <div className="flex flex-col gap-2">
            <label
                for="description"
                className={cn("text-[16px] max-sm:text-[14px]", variant === "small" && "text-sm")}
            >{label}</label>
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={cn("w-full px-5 py-3 border rounded-sm shadow-sm bg-white", variant === "small" && "text-sm py-2 h-28")}
                name="description"
                rows="5"
                id="description"
            ></textarea>
        </div>
    )
}
