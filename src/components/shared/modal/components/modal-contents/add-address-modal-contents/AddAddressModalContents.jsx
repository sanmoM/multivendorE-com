"use client";

import Button from '@/components/shared/button/Button';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { addAddresses } from '@/lib/redux/features/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddAddressModalContents = ({ handleAddAddress }) => {
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAddresses({ street, city, state, zipCode, country }));
        handleAddAddress()
    };
    return (
        <div className=" w-full flex flex-col h-full justify-between">
            <div>
                <PrimaryTitle title={"Address Details"} />
                <div className='space-y-6'>
                    <TextInput placeholder={"Street"} className={"w-full"} value={street} setValue={setStreet} />
                    <TextInput placeholder={"City"} className={"w-full"} value={city} setValue={setCity} />
                    <TextInput placeholder={"State"} className={"w-full"} value={state} setValue={setState} />
                    <TextInput placeholder={"Zip Code"} className={"w-full"} value={zipCode} setValue={setZipCode} />
                    <TextInput placeholder={"Country"} className={"w-full"} value={country} setValue={setCountry} />
                </div>
            </div>

            <Button text={"Add Address"} className={"bg-red-600 text-white w-full"} onClick={handleSubmit} />
        </div>
    );
};

export default AddAddressModalContents;
