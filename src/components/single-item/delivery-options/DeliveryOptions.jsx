"use client";

import RadioInput from '@/components/shared/inputs/radio-input/RadioInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { useState } from 'react';
import { FaRegCreditCard, FaRegMoneyBillAlt } from 'react-icons/fa';
import { RiBox2Line } from 'react-icons/ri';


const deliveryOptions = [{
    label: 'Self-Collection',
    value: 'self-collection',
    Icon: <RiBox2Line className='w-6 h-6 text-secondary' />,
},
{
    label: 'Cash on Delivery',
    value: 'cash-on-delivery',
    Icon: <FaRegMoneyBillAlt className='w-6 h-6 text-secondary' />
},
{
    label: 'Order with 10% Payment',
    value: 'order-with-10-payment',
    Icon: <FaRegCreditCard className='w-6 h-6 text-secondary' />,
    alwaysChecked: true,
}
];

export default function DeliveryOptions() {
    const [selectedDelivery, setSelectedDelivery] = useState('order-with-10-payment');
    return (
        <div className="mt-8 lg:w-[70%]" id='delivery'>
            <PrimaryTitle title={"Delivery Options"} className={"mb-6"} />
            <div className="space-y-4">
                {deliveryOptions.map((option) => (
                    <label
                        key={option}
                        className={`flex gap-2 items-center rounded-lg cursor-pointer transition-colors duration-200 `}
                    >
                        <RadioInput onChange={() => setSelectedDelivery(option.value)} checked={option?.alwaysChecked ? true : selectedDelivery === option.value} />
                        <p className="text-primary font-medium text-lg flex items-center gap-2">
                            {option.Icon}
                            <span>{option.label}</span>
                        </p>
                    </label>
                ))}
            </div>
        </div>
    )
}



