import Button from '@/components/shared/button/Button';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import { useState } from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import PaymentCard from './components/payment-card/PaymentCard';
import { BkashDetails, CardDetails } from './components/payment-details-contents/PaymentDetailsContents';
import PaymentMethodCardHeader from './components/payment-method-card-header/PaymentMethodCardHeader';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addPaymentMethod } from '@/lib/redux/features/userSlice';

// A helper component for displaying SVG icons to avoid external libraries
// const Icon = ({ path, viewBox = '0 0 24 24', className = 'w-6 h-6' }) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox={viewBox}
//         fill="currentColor"
//         className={className}
//     >
//         <path d={path} />
//     </svg>
// );

const AddPaymentMethodModalContents = ({ handleCloseModal }) => {
    const [selectedMethod, setSelectedMethod] = useState('Card');
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const dispatch = useDispatch();
    const handleAddPaymentMethod = () => {
        dispatch(addPaymentMethod({ cardNumber, cardHolderName, expiryDate, cvv, type: "Visa" }));
        handleCloseModal();
    }

    const paymentMethods = [
        { name: 'Card', icon: <FaRegCreditCard className='w-6 h-6 text-gray-500' />, details: CardDetails },
        // { name: 'Bkash', icon: <Image src="/images/payment/bkash.png" alt="Bkash" width={30} height={20} />, details: BkashDetails },
        // { name: 'SSL', icon: "" },
    ];

    const item = { name: 'Card', icon: <FaRegCreditCard className='w-6 h-6 text-gray-500' />, details: CardDetails }

    return (
        // <div className="space-y-4 h-full">
        //     {paymentMethods?.map((method) => (
        //         method?.name === selectedMethod ?
        //             <div className='flex items-center justify-between flex-col h-full'>
        //                 <PaymentMethodCardHeader item={method} />
        //                 {method?.details && <method.details item={method} />}
        //             </div> :
        //             <PaymentCard item={method} selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
        //     ))}
        // </div>
        <div className='flex flex-col h-full justify-between'>
            <div>
                <div className="flex items-center justify-between">
                    <PrimaryTitle title={item?.name} />
                    <button className="text-gray-500 hover:text-gray-700">
                        {
                            item?.icon
                        }
                    </button>
                </div>
                <div className="space-y-6">
                    <SecondaryTitle title={"Card Details"} />

                    {/* Card Number Input */}
                    <div className="relative bg-tertiary rounded-xl">
                        <TextInput placeholder={"1234 5678 9012 3456"} className={""} value={cardNumber} setValue={setCardNumber} />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                            {/* Card Logos */}
                            <img src="https://placehold.co/32x20/F5F5F5/000000?text=VISA" alt="Visa" className="h-4 rounded-sm" />
                            <img src="https://placehold.co/32x20/F5F5F5/000000?text=MC" alt="Mastercard" className="h-4 rounded-sm" />
                            <img src="https://placehold.co/32x20/F5F5F5/000000?text=AMEX" alt="American Express" className="h-4 rounded-sm" />
                            <img src="https://placehold.co/32x20/F5F5F5/000000?text=CSS" alt="CSS" className="h-4 rounded-sm" />
                        </div>
                    </div>

                    {/* Expiration Date and CVV */}
                    <div className="flex space-x-4">
                        <div className="relative flex-1">
                            <TextInput placeholder={"MM/YY"} className={""} value={expiryDate} setValue={setExpiryDate} />
                        </div>
                        <div className="relative flex-1">
                            <TextInput placeholder={"123"} className={""} value={cvv} setValue={setCvv} />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                {/* <Icon path="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zM11 7h2v6h-2zM11 15h2v2h-2z" className="w-5 h-5" /> */}
                                {item?.icon}
                            </div>
                        </div>
                    </div>

                    {/* Card Holder Name */}
                    <div>
                        <SecondaryTitle title={"Card Holder Name"} />
                        <TextInput placeholder={"Full name on card"} className={""} value={cardHolderName} setValue={setCardHolderName} />
                    </div>
                </div>
            </div>

            <Button text={"Add Payment Method"} className={"bg-red-600 text-white w-full"} onClick={handleAddPaymentMethod} />
        </div>
    );
};

export default AddPaymentMethodModalContents;
