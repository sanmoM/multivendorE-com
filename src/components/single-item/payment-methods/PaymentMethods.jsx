"use client";

import RadioInput from '@/components/shared/inputs/radio-input/RadioInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { BiLogoPaypal } from "react-icons/bi";
import { FaRegCreditCard } from 'react-icons/fa';


const paymentOptions = [{
    label: 'B-Kash',
    value: 'bkash',
    Icon: <FaRegCreditCard className='w-6 h-6 text-secondary' />
},
{
    label: 'SSL',
    value: 'ssl',
    Icon: <BiLogoPaypal className='w-6 h-6 text-secondary' />
},
    // {
    //     label: 'Cash on Delivery',
    //     value: 'cash-on-delivery',
    //     Icon: <FaHandHoldingDollar className='w-6 h-6 text-secondary' />
    // },
];

export default function PaymentOptions({ cartItem, setCartItem }) {
    const selectedPayment = cartItem?.paymentMethod || 'bkash';

    return (
        <div className="mt-8 lg:w-[70%]">
            <PrimaryTitle title={"Payment Methods"} className={"mb-6"} />
            <div className="space-y-4">
                {paymentOptions.map((option) => (
                    <label
                        key={option}
                        className={`flex gap-2 items-center rounded-lg cursor-pointer transition-colors duration-200 `}
                    >
                        <RadioInput onChange={() => setCartItem({ ...cartItem, paymentMethod: option.value })} checked={selectedPayment === option.value} />
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



