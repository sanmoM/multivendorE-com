"use client";

import SelectInput from '@/components/shared/inputs/select-input/SelectInput'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import SubmitButton from '@/components/shared/submit-button/SubmitButton';
import React, { useState } from 'react'

export default function AddressTab() {
    const [country, setCountry] = useState('');
    const [village, setVillage] = useState('');
    const [thana, setThana] = useState('');
    const [district, setDistrict] = useState('');
    const [division, setDivision] = useState('');
    const [postcode, setPostcode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(country, village, thana, district, division, postcode);
    };
    return (
        <div class="w-full">
            <h2 class="text-xl font-bold mb-5">Address Information</h2>
            <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                <SelectInput label="Country"
                    value={country}
                    setValue={setCountry}
                    options={[
                        {
                            label: 'Bangladesh',
                            value: 'BD',
                            selected: true,
                        },
                        {
                            label: 'India',
                            value: 'IN',
                        },
                        {
                            label: 'Pakistan',
                            value: 'PK',
                        },
                        {
                            label: 'Nepal',
                            value: 'NP',
                        },
                        {
                            label: 'USA',
                            value: 'US',
                        },
                        {
                            label: 'UK',
                            value: 'UK',
                        },
                    ]} />
                <TextInput label="Village" placeholder="Village" value={village} setValue={setVillage} />
                <TextInput label="Thana / Upazila" placeholder="Thana / Upazila" value={thana} setValue={setThana} />
                <TextInput label="District" placeholder="District" value={district} setValue={setDistrict} />
                <TextInput label="Division" placeholder="Division" value={division} setValue={setDivision} />
                <TextInput label="Postcode" placeholder="Postcode" value={postcode} setValue={setPostcode} />
            </div>

            <div class="mt-4 lg:mt-6 text-center">
                <SubmitButton handleSubmit={handleSubmit} label="Update Address" />
            </div>
        </div>
    )
}
