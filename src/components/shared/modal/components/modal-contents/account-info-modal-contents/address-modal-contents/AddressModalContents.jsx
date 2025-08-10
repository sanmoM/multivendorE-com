import React, { useState } from 'react';
import ItemCard from '../../../../../item-card/ItemCard';
import Button from '@/components/shared/button/Button';

const AddressModalContents = ({ handleAddAddress }) => {
    const [isWorkAddressEnabled, setIsWorkAddressEnabled] = useState(false);

    const addresses = [
        {
            label: 'Home',
            address: '123 Maple Street, Anytown, USA',
            icon: (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
            ),
            isToggle: false,
        },
        {
            label: 'Work',
            address: '456 Oak Avenue, Anytown, USA',
            icon: (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.518 23.518 0 0112 15c-3.18 0-6.22-.522-9-1.745M16 4V1m-4 13l-4 4m8-4l-4 4M4 14l3.585-3.585C8.016 9.87 9.006 9.5 10 9.5c1.173 0 2.298.532 3.23 1.5l1.625 1.585C15.938 14.12 17.062 15 18.5 15h2.5a2 2 0 002-2V9a2 2 0 00-2-2h-2.5a2.5 2.5 0 01-2.5-2.5V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5V4m-3 0h3"></path>
                </svg>
            ),
            isToggle: true,
        },
        {
            label: "Mom's House",
            address: '789 Pine Lane, Anytown, USA',
            icon: (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
            ),
            isToggle: false,
        },
    ];

    return (
        <div className=" w-full flex flex-col h-full justify-between">
            <div className='space-y-6'>
                {addresses.map((address, index) => (
                    <div key={index} className="flex items-center justify-between space-x-4  rounded-lg">
                        {/* <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                            {address.icon}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{address.label}</h4>
                            <p className="text-sm text-gray-500">{address.address}</p>
                        </div>
                    </div> */}
                        <ItemCard item={{ title: address.label, icon: address.icon, subtitle: address.address, handleClick: () => { } }} />
                        {address.isToggle && (
                            <div
                                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${isWorkAddressEnabled ? 'bg-gray-300' : 'bg-red-500'}`}
                                onClick={() => setIsWorkAddressEnabled(!isWorkAddressEnabled)}
                            >
                                <div
                                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${isWorkAddressEnabled ? '' : 'translate-x-6'}`}
                                ></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <Button text={"Add Address"} className={"bg-red-600 text-white w-full"} onClick={handleAddAddress} />
        </div>
    );
};

export default AddressModalContents;
