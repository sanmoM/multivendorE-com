import Button from '@/components/shared/button/Button';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import React from 'react';
import { FaRegCreditCard } from 'react-icons/fa';

const PaymentModalContents = () => {
    const savedPaymentMethods = [
        {
            id: 'visa',
            type: 'Visa',
            lastFour: '4567',
            expiry: '08/25',
        },
        {
            id: 'mastercard',
            type: 'Mastercard',
            lastFour: '1234',
            expiry: '05/24',
        },
    ];

    const otherPaymentMethods = [
        {
            id: 'paypal',
            type: 'PayPal',
        },
        {
            id: 'applepay',
            type: 'Apple Pay',
        },
        {
            id: 'venmo',
            type: 'Venmo',
        },
    ];

    return (
        <div className="w-full flex flex-col justify-between h-full">
            <div className='space-y-6'>
                {/* Saved Payment Methods Section */}
                <div>
                    {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">Saved Payment Methods</h3> */}
                    <PrimaryTitle title={"Saved Payment Methods"} />
                    <div className="space-y-4">
                        {savedPaymentMethods.map((method) => (
                            <div key={method.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {/* Checkbox Placeholder */}
                                    <FaRegCreditCard className='w-10 h-10 text-gray-700' />
                                    <div>
                                        <p className="text-lg text-gray-800 font-medium">
                                            {method.type} ... {method.lastFour}
                                        </p>
                                        <p className="text-base text-secondary">Expires {method.expiry}</p>
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
                    {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Payment Methods</h3> */}
                    <PrimaryTitle title={"Other Payment Methods"} />
                    <div className="space-y-4">
                        {otherPaymentMethods.map((method) => (
                            <div key={method.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {/* Checkbox Placeholder */}
                                    <div className="w-6 h-6 border border-gray-300 rounded-md"></div>
                                    <p className="text-lg text-gray-800 font-medium">{method.type}</p>
                                </div>
                                {/* Right-side Checkbox Placeholder */}
                                <div className="w-6 h-6 border border-gray-300 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Button text={"Add Payment Method"} className={"bg-red-600 text-white w-full"} />
        </div>
    );
};

export default PaymentModalContents;
