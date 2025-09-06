"use client";

import RadioInput from '@/components/shared/inputs/radio-input/RadioInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { FaRegCreditCard } from 'react-icons/fa';
import { RiBox2Line } from 'react-icons/ri';


const deliveryOptions = [{
    label: 'Full Payment',
    value: 'full-payment',
    Icon: <RiBox2Line className='w-6 h-6 text-secondary' />,
},
// {
//     label: 'Cash on Delivery',
//     value: 'cash-on-delivery',
//     Icon: <FaRegMoneyBillAlt className='w-6 h-6 text-secondary' />
// },
{
    label: 'Order with 10% Payment',
    value: 'order-with-10-payment',
    Icon: <FaRegCreditCard className='w-6 h-6 text-secondary' />,
    // alwaysChecked: true,
}
];

export default function DeliveryOptions({ cartItem, setCartItem }) {
    // const [selectedDelivery, setSelectedDelivery] = useState('order-with-10-payment');
    const selectedDelivery = cartItem?.deliveryOption || 'full-payment';
    return (
        <div className="lg:w-[70%]" id='delivery'>
            <PrimaryTitle title={"Delivery Options"} className={"mb-6"} />
            <div className="space-y-4">
                {deliveryOptions.map((option, index) => (
                    <label
                        key={index}
                        className={`flex gap-2 items-center rounded-lg cursor-pointer transition-colors duration-200 `}
                    >
                        <RadioInput onChange={() => setCartItem({ ...cartItem, deliveryOption: option.value })} checked={option?.alwaysChecked ? true : selectedDelivery === option.value} />
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



