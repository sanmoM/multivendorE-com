import React from 'react'

export default function TextInput({ label, placeholder, theme = "light", value, setValue, type = "text" }) {
    return (
        <div className="flex flex-col gap-2">
            <label for="fname" className="text-[16px] max-sm:text-[14px]"
            >{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name="fname"
                id="fname"
                placeholder={placeholder}
                className={`w-full px-5 py-3 border rounded-sm shadow-sm ${theme === "light" ? "bg-white" : ""}`}
            />
        </div>
    )
}
