import React from 'react'

export default function SelectInput({ label, options, value, setValue }) {
    return (
        <div class="flex flex-col gap-2">
            <label for="country" class="text-[16px] max-sm:text-[14px]"
            >{label}</label>
            <select
                id="country"
                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-white"
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
