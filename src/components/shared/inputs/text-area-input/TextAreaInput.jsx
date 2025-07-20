import React from 'react'

export default function TextAreaInput({ label }) {
    return (
        <div className="flex flex-col gap-2">
            <label
                for="description"
                className="text-[16px] max-sm:text-[14px]"
            >{label}</label>
            <textarea
                className="w-full px-5 py-3 border rounded-sm shadow-sm bg-white"
                name="description"
                rows="5"
                id="description"
            ></textarea>
        </div>
    )
}
