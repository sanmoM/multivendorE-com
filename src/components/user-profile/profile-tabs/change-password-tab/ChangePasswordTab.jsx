import TextInput from '@/components/shared/inputs/text-input/TextInput'
import React from 'react'

export default function ChangePasswordTab() {
    return (
        <div className="w-full rounded-sm">
            <div className='space-y-6'>
                <TextInput label="Current Password" placeholder="Current Password" />
                <TextInput label="New Password" placeholder="New Password" />
                <TextInput label="Confirm Password" placeholder="Confirm Password" />
            </div>

            <div className="mt-4 lg:mt-6 text-center">
                <button
                    className="bg-black text-white px-5 py-3 max-sm:mt-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold hover:bg-white hover:text-black"
                >
                    Update Password
                </button>
            </div>
        </div>
    )
}
