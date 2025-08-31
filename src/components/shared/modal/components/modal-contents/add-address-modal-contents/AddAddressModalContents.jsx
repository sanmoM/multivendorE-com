"use client";

import Button from '@/components/shared/button/Button';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAuthAxios from '@/hooks/useAuthAxios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const AddAddressModalContents = ({ handleCloseAllModal }) => {
    const user = useSelector(state => state.user?.user);
    const [street, setStreet] = useState(user?.street);
    const [city, setCity] = useState(user?.city);
    const [state, setState] = useState(user?.state);
    const [zipCode, setZipCode] = useState(user?.zip_code);
    const [country, setCountry] = useState(user?.country);

    const axios = useAuthAxios();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/address/store", {
            street,
            city,
            state,
            zip_code: zipCode,
            country
        }).then((response) => {
            handleCloseAllModal();
            toast.success("Address added successfully");
        }).catch((error) => {
            toast.error("Failed to add address");
        });
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
