"use client";
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import SubmitButton from '@/components/shared/submit-button/SubmitButton';
import React, { useState } from 'react'

export default function ChangePasswordTab() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentPassword, newPassword, confirmPassword);
    };
    return (
        <div className="w-full rounded-sm">
            <div className='space-y-6'>
                <TextInput label="Current Password" placeholder="Current Password" value={currentPassword} setValue={setCurrentPassword} type='password' />
                <TextInput label="New Password" placeholder="New Password" value={newPassword} setValue={setNewPassword} type='password' />
                <TextInput label="Confirm Password" placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} type='password' />
            </div>

            <div className="mt-4 lg:mt-6 text-center">
                <SubmitButton handleSubmit={handleSubmit} label="Update Password" />
            </div>
        </div>
    )
}
