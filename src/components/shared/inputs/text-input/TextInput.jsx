import React from 'react'

export default function TextInput({ label, placeholder, theme = "light" }) {
    return (
        <div className="flex flex-col gap-2">
            <label for="fname" className="text-[16px] max-sm:text-[14px]"
            >{label}</label>
            <input
                type="text"
                name="fname"
                id="fname"
                placeholder={placeholder}
                className={`w-full px-5 py-3 border rounded-sm shadow-sm ${theme === "light" ? "bg-white" : ""}`}
            />
        </div>
    )
}
