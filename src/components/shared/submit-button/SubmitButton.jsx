import React from 'react'

export default function SubmitButton({ handleSubmit, label }) {
    return (
        <button
            onClick={handleSubmit}
            className="bg-black text-white px-5 py-3 max-sm:mt-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold hover:bg-white hover:text-black"
        >
            {label}
        </button>
    )
}
