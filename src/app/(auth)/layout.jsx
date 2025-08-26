import React from 'react'

export default function layout({ children }) {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='min-w-xl'>
                {children}
            </div>
        </div>
    )
}
