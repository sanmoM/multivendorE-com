import React from 'react'

export default function DateInput({ label, placeholder }) {
    return (
        <div className="flex flex-col gap-2">
            <label for="dob" className="text-[16px] max-sm:text-[14px]"
            >{label}</label>
            <input
                type="date"
                name="dob"
                id="dob"
                placeholder={placeholder}
                className="w-full px-5 py-3 border rounded-sm shadow-sm bg-white"
            />
        </div>
    )
}
