import React, { useState } from 'react'

export default function FaqCard({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`accordion py-8 px-6 border border-solid !border-secondary transition-all duration-500 rounded-2xl cursor-pointer ${isOpen ? 'bg-tertiary' : 'hover:bg-tertiary'
                }`}
        >
            <button
                className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-primary w-full transition duration-500 text-left ${isOpen ? 'font-medium text-secondary' : 'hover:text-secondary'
                    }`}
            >
                <h5>{item?.question}</h5>
                <svg
                    className={`text-secondary transition duration-500 group-hover:text-secondary ${isOpen ? 'text-secondary rotate-180' : ''
                        }`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </button>
            <div
                className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
            >
                <p className="text-base text-gray-500 leading-6">{item?.answer}</p>
            </div>
        </div>
    )
}
