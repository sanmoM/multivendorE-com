import Button from '@/components/shared/button/Button';
import CheckBox from '@/components/shared/inputs/check-box/CheckBox';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import React, { useState } from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const PaymentModalContents = ({ handleAddPaymentMethod }) => {
    const savedPaymentMethods = useSelector((state) => state.user.paymentMethods);
    const [selectedMethod, setSelectedMethod] = useState("card");


    const otherPaymentMethods = [
        {
            name: 'B-Kash',
            value: 'bkash',
        },
        {
            name: 'SSL',
            value: 'ssl',
        },
    ];

    return (
        <div className="w-full flex flex-col justify-between h-full">
            <div className='space-y-6'>
                {/* Saved Payment Methods Section */}
                <div>
                    <PrimaryTitle title={"Saved Payment Methods"} />
                    <div className="space-y-4">
                        {savedPaymentMethods.map((method) => (
                            <div key={method.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {/* Checkbox Placeholder */}
                                    <FaRegCreditCard className='w-8 h-8 text-primary' />
                                    <div>
                                        <p className="text-lg text-gray-800 font-medium">
                                            {method.type} ... {method.cardNumber.slice(method.cardNumber.length - 4)}
                                        </p>
                                        <p className="text-base text-secondary">Expires: {method.expiryDate}</p>
                                    </div>
                                </div>
                                <button className="bg-tertiary text-secondary text-sm font-semibold px-8 py-2 rounded-full">
                                    Info
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Payment Methods Section */}
                <div>
                    <PrimaryTitle title={"Other Payment Methods"} />
                    <div className="space-y-4">
                        {otherPaymentMethods.map((method) => (
                            <div key={method.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <CheckBox checked={selectedMethod === method.value} setChecked={() => setSelectedMethod(method?.value)} />
                                    <p className="text-lg text-gray-800 font-medium">{method.name}</p>
                                </div>
                                {/* Right-side Checkbox Placeholder */}
                                <div className="w-6 h-6 border border-gray-300 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Button text={"Add Payment Method"} className={"bg-red-600 text-white w-full"} onClick={handleAddPaymentMethod} />
        </div>
    );
};

export default PaymentModalContents;
