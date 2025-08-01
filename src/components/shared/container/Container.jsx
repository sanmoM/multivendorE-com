import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={`max-w-7xl mx-auto px-4 lg:px-0 ${className}`}>{children}</div>
    )
}
