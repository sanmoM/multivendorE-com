import React from 'react'
import BackBtn from '../back-btn/BackBtn'

export default function Modal({ isLeft, children, isOpen, setIsOpen, title }) {
    console.log(isOpen)
    return (
        <div onClick={() => setIsOpen(false)} className={` fixed h-[100vh] w-[100vw] top-0 transform right-0 rounded-lg duration-300 shadow-md bg-black/50 flex justify-center items-center z-50 ${isLeft ? "justify-start -translate-x-full" : "justify-end translate-x-full"} ${isOpen && "!translate-x-0"}`}>
            <div className='bg-white pb-10 overflow-y-auto max-h-[100svh]' onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className='px-4 py-6 sticky top-0 bg-white'>
                    <div className='relative flex justify-between items-center' >
                        <BackBtn className={"relative z-[100]"} handleBack={() => setIsOpen(false)} />
                        <h3 className='w-full absolute top-0 text-center text-lg font-bold lg:text-2xl'>{title}</h3>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

// ${isLeft ? 'left-0 translate-x-full' : 'right-0 -translate-x-full'}
