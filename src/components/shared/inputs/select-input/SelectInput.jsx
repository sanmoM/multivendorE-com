import { cn } from '@/utils/cn'
import React from 'react'

export default function SelectInput({ label, options, value, setValue, variant }) {
    return (
        <div class="flex flex-col gap-2">
            <label for="country" class={cn("text-[16px] max-sm:text-[14px]", variant === "small" && "text-sm")}
            >{label}</label>
            <select
                id="country"
                class={cn("w-full px-5 py-3 border rounded-sm shadow-sm bg-white", variant === "small" && "text-sm py-2")}
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    )
}
