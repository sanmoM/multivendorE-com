import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={`max-w-7xl mx-auto px-4 lg:px-0 py-6 lg:py-10 ${className}`}>{children}</div>
    )
}
