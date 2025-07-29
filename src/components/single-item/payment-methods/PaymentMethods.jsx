"use client";

import RadioInput from '@/components/shared/inputs/radio-input/RadioInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { useState } from 'react';


const paymentMethods = ['credit-card', 'paypal', 'cash-on-delivery'];

export default function PaymentMethods() {
    const [selectedDelivery, setSelectedDelivery] = useState('credit-card');

    return (
        <div className="mt-8 lg:w-[70%]">
            <PrimaryTitle title={"Payment Methods"} className={"mb-6"} />
            <div className="space-y-4">
                {paymentMethods.map((option) => (
                    <label
                        key={option}
                        className={`flex gap-2 items-center p-4 rounded-lg border-1 !border-secondary cursor-pointer transition-colors duration-200 `}
                    >
                        <RadioInput onChange={() => setSelectedDelivery(option)} />
                        <span className="text-primary font-medium text-lg">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}



