import Button from '@/components/shared/button/Button'
import CheckBox from '@/components/shared/inputs/check-box/CheckBox'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import React from 'react'

export default function BecomeASellerModalContents() {
    return (
        <div className='mt-2 space-y-4'>
            <TextInput placeholder={"Business Name"} />
            <TextInput placeholder={"Contact Number"} />
            <TextInput placeholder={"Email Address"} />
            <TextInput placeholder={"Business Address"} />
            <TextInput placeholder={"Business Address"} />
            <div className='flex items-center gap-2'>
                <CheckBox checked={false} label={"I agree to the terms and conditions"} />
                <p className='text-primary text-sm lg:text-base'>I agree to the terms and conditions</p>
            </div>
            <Button text={"Register"} className={"bg-red-600 text-white w-full"} />
        </div>
    )
}
