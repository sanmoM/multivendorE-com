import DateInput from '@/components/shared/inputs/date-input/DateInput'
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import React from 'react'

export default function InfoTab() {
    return (
        <div
            className="w-full"
        >
            <div className="w-full mx-auto space-y-6">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <TextInput label="First Name" placeholder="First Name" />
                    <TextInput label="Last Name" placeholder="Last Name" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <TextInput label="Email Address" placeholder="email" />
                    <TextInput label="Phone Number" placeholder="Phone" />
                </div>
                <DateInput label="Date of Birth" placeholder="Date of Birth" />
                <TextAreaInput label="Description" />
            </div>
            <div className="py-1 text-center mt-4 lg:mt-6">
                <button
                    className="bg-black text-white px-5 py-3 max-sm:mt-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold hover:bg-white hover:text-black"
                >
                    Update Now
                </button>
            </div>
        </div>
    )
}
