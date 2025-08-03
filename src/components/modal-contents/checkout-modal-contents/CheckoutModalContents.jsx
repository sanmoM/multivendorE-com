import Button from '@/components/shared/button/Button';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import React, { useState } from 'react';

const CheckoutModalContents = () => {
    const [isAddressOpen, setIsAddressOpen] = useState(false);
    const [isTimeOpen, setIsTimeOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    return (
        <div className="min-w-sm w-full h-full flex flex-col">

            <div className='space-y-8 grow'>
                {/* Delivery Address Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsAddressOpen(!isAddressOpen)}
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-primary">Delivery Address</h3>
                            <p className="text-sm  text-secondary">Springfield, IL 62704</p>
                            <p className="text-sm  text-secondary">123 Maple Street, Apt 4B</p>
                        </div>
                        <svg className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isAddressOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    {isAddressOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700">This is a placeholder for the delivery address dropdown </p>
                        </div>
                    )}
                </div>

                {/* Delivery Time Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsTimeOpen(!isTimeOpen)}
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-primary">Delivery Time</h3>
                            {/* <h4 className=>{item.name}</h4> */}
                            <p className="text-sm  text-secondary">Tomorrow, 10:00 AM - 12:00 PM</p>
                        </div>
                        <svg className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isTimeOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    {isTimeOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700">This is a placeholder for the delivery time dropdown </p>
                        </div>
                    )}
                </div>

                {/* Payment Method Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-primary">Payment Method</h3>

                            <p className="text-sm  text-secondary">Credit Card (**** 1234)</p>
                        </div>
                        <svg className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isPaymentOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    {isPaymentOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700">This is a placeholder for the payment method dropdown </p>
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                <div>
                    <PrimaryTitle title={"Order Summary"} />
                    <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between items-center">
                            <p>Subtotal</p>
                            <p className='text-secondary'>$45.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Delivery</p>
                            <p className='text-secondary'>$5.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Taxes</p>
                            <p className='text-secondary'>$3.75</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Total</p>
                            <p className='text-secondary'>$53.75</p>
                        </div>
                    </div>
                </div>
            </div>

            <Button text={"Place Order"} className={"bg-red-600 text-white w-full"} onClick={() => { }} />
        </div>
    );
};

export default CheckoutModalContents;
