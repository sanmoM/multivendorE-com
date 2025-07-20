"use client";
import DateInput from '@/components/shared/inputs/date-input/DateInput';
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import SubmitButton from '@/components/shared/submit-button/SubmitButton';
import { useState } from 'react';

export default function InfoTab() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, phone, date, description);
    };
    return (
        <div
            className="w-full"
        >
            <div className="w-full mx-auto space-y-6">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <TextInput label="First Name" placeholder="First Name" value={firstName} setValue={setFirstName} />
                    <TextInput label="Last Name" placeholder="Last Name" value={lastName} setValue={setLastName} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <TextInput label="Email Address" placeholder="email" value={email} setValue={setEmail} type='email' />
                    <TextInput label="Phone Number" placeholder="Phone" value={phone} setValue={setPhone} type='tel' />
                </div>
                <DateInput label="Date of Birth" placeholder="Date of Birth" value={date} setValue={setDate} />
                <TextAreaInput label="Description" value={description} setValue={setDescription} />
            </div>
            <div className="py-1 text-center mt-4 lg:mt-6">
                <SubmitButton handleSubmit={handleSubmit} label="Update Now" />
            </div>
        </div>
    )
}
