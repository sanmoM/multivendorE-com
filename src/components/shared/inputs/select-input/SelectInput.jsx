import React from 'react'

export default function SelectInput({ label, options }) {
    return (
        <div class="flex flex-col gap-2">
            <label for="country" class="text-[16px] max-sm:text-[14px]"
            >{label}</label>
            <select
                id="country"
                disabled
                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-white"
            >
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value} selected={option.selected}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    )
}
