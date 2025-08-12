import React, { useState } from 'react';
import ItemCard from '../../../../../item-card/ItemCard';
import Button from '@/components/shared/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setPrimaryAddress } from '@/lib/redux/features/userSlice';

const AddressModalContents = ({ handleAddAddress }) => {
    const addresses = useSelector((state) => state.user.addresses);
    const dispatch = useDispatch();
    const handleToggle = (address) => {
        dispatch(setPrimaryAddress(address));
    }

    console.log(addresses, "addresses");

    return (
        <div className=" w-full flex flex-col h-full justify-between">
            <div className='space-y-6'>
                {addresses.map((address, index) => (
                    <div key={index} className="flex items-center justify-between space-x-4  rounded-lg">
                        <ItemCard item={{
                            title: `${address?.isPrimary ? 'Primary Address' : 'Additional Address'}`,
                            icon: (
                                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    //             </svg>
                            ),
                            subtitle: `${address?.street} ${address?.city}, ${address?.state} ${address?.zipCode}`, handleClick: () => { }
                        }} />
                        {/* {console.log(address?.isPrimary, "address is primary")} */}
                        <div
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${!address?.isPrimary ? 'bg-gray-300' : 'bg-red-500'}`}
                            onClick={() => handleToggle(address?.id)}
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${!address?.isPrimary ? '' : 'translate-x-6'}`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <Button text={"Add Address"} className={"bg-red-600 text-white w-full"} onClick={handleAddAddress} />
        </div>
    );
};

export default AddressModalContents;
