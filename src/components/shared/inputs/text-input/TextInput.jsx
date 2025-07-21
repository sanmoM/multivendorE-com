import { cn } from '@/utils/cn'
import React from 'react'

export default function TextInput({ label, placeholder, theme = "light", value, setValue, type = "text", variant, labelClass, inputClass, className }) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <label for="fname" className={cn("text-[16px] max-sm:text-[14px]", variant === "small" && "text-sm", labelClass)}
                dangerouslySetInnerHTML={{ __html: label }}
            ></label>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name="fname"
                id="fname"
                placeholder={placeholder}
                className={cn(`w-full px-5 py-3 border rounded-sm shadow-sm max-sm:text-sm ${theme === "light" ? "bg-white" : ""}`, variant === "small" && "text-sm py-2", variant === "medium" && "py-2.5", inputClass)}
            />
        </div>
    )
}
