import Button from '@/components/shared/button/Button';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import React, { useState } from 'react';

const PromotionModalContents = ({ handleCloseModal }) => {
    const [discountType, setDiscountType] = useState('Percentage');
    const [discountValue, setDiscountValue] = useState('');
    const [selectedProducts, setSelectedProducts] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className='flex flex-col justify-between space-y-6 h-full'>
            <div className="space-y-6">

                {/* Discount Type */}
                <div>
                    <PrimaryTitle title={"Discount type"} className={"mb-4"} />
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setDiscountType('Percentage')}
                            className={`!border-secondary py-2 px-5 rounded-lg border transition-colors duration-200 ${discountType === 'Percentage'
                                ? 'bg-tertiary text-secondary border-gray-300 shadow-sm'
                                : ' hover:bg-gray-200 text-primary'
                                }`}
                        >
                            Percentage
                        </button>
                        <button
                            onClick={() => setDiscountType('Amount')}
                            className={`!border-secondary py-2 px-5 rounded-lg border transition-colors duration-200 ${discountType === 'Amount'
                                ? 'bg-tertiary text-secondary border-gray-300 shadow-sm'
                                : ' hover:bg-gray-200 text-primary'
                                }`}
                        >
                            Amount
                        </button>
                    </div>
                </div>

                <PrimaryTitle title={"Discount Details"} className={"mb-4"} />
                {/* Discount Value */}
                <div>
                    <TextInput placeholder={"Enter discount value"} />
                </div>

                {/* Products */}
                <div>
                    {/* <PrimaryTitle title={"Products"} className={"mb-4"} /> */}
                    <TextInput placeholder={"Select products"} />
                </div>

                {/* Start date */}
                <div>
                    {/* <PrimaryTitle title={"Start date"} className={"mb-4"} /> */}
                    <TextInput placeholder={"Select start date"} />
                </div>

                {/* End date */}
                <div>
                    {/* <PrimaryTitle title={"End date"} className={"mb-4"} /> */}
                    <TextInput placeholder={"Select end date"} />
                </div>

            </div>
            <Button text={"Create Promotion"} className={"bg-red-600 text-white w-full"} onClick={() => handleCloseModal()} />
        </div>
    );
};

export default PromotionModalContents;
