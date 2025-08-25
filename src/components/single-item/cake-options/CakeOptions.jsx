"use client";

import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { useState } from 'react';
import CakeOptionSelect from './components/cake-option-select/CakeOptionSelect';
import OptionBox from '@/components/shared/option-box/OptionBox';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import IncreaseDecreaseButtons from '@/components/shared/increase-decrease-buttons/IncreaseDecreaseButtons';
import ColorPicker from '@/components/shared/color-picker/ColorPicker';

const ChooseCake = () => {
    const [selectedSlices, setSelectedSlices] = useState(null);
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [cakeQuantity, setCakeQuantity] = useState(1);
    const [cakeWeight, setCakeWeight] = useState(1);
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const cakeColors = [
        { name: 'Pink', hex: '#FFC0CB' },
        { name: 'Light Blue', hex: '#ADD8E6' },
        { name: 'Light Green', hex: '#90EE90' },
        { name: 'Light Yellow', hex: '#FFFFE0' },
    ];

    const sliceOptions = ['4 Slices', '6 Slices', '8 Slices', '10 Slices'];
    const flavorOptions = ['Chocolate', 'Vanilla', 'Red Velvet'];
    const colorOptions = ['Chocolate', 'Vanilla', 'Red Velvet'];
    const deliveryOptions = [
        {
            label: 'Self-Collection', icon: (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m-8-4v10l8 4m0-10v10"></path>
                </svg>
            )
        },
        {
            label: 'Book with Cash on Delivery', icon: (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9.828a2 2 0 00-1.414.586L6 11.414V17a2 2 0 002 2z"></path>
                </svg>
            )
        },
        {
            label: 'Order with 10% Payment', icon: (
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h10m-9 4h8m-10 4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-2.5"></path>
                </svg>
            )
        },
    ];

    const handleQuantityChange = (type) => {
        setCakeQuantity(prev => type === 'increment' ? prev + 1 : Math.max(1, prev - 1));
    };

    const handleWeightChange = (type) => {
        setCakeWeight(prev => type === 'increment' ? prev + 1 : Math.max(1, prev - 1));
    };

    return (
        <div className=" max-w-xl w-full mt-6" id='cake-options'>
            <PrimaryTitle title={"Cake Options"} />
            {/* Cake Slice Options */}
            <div className="mb-6" id='variants'>
                <SecondaryTitle title={"Cake Slice Options"} />
                <div className="flex flex-wrap gap-3">
                    {sliceOptions.map((option) => (
                        <OptionBox value={option} setValue={setSelectedSlices} currentValue={selectedSlices} label={option} />
                    ))}
                </div>
            </div>

            {/* Cake Flavor */}
            <div className="mb-6" id='cake-flavors'>
                <SecondaryTitle title={"Cake Flavor"} />
                <div className="flex flex-wrap gap-3">
                    {flavorOptions.map((flavor) => (
                        <OptionBox value={flavor} setValue={setSelectedFlavor} currentValue={selectedFlavor} label={flavor} />
                    ))}
                </div>
            </div>

            {/* Cake Flavor */}
            <div className="mb-6">
                <SecondaryTitle title={"Color"} />
                <div className="flex flex-wrap gap-3">
                    {cakeColors.map((color) => (
                        <ColorPicker setColor={setSelectedColor} color={color} selectedColor={selectedColor} />
                    ))}
                </div>
            </div>

            {/* Cake Color */}
            <div className="mb-6">
                <SecondaryTitle title={"Color"} />
                <div className="flex flex-wrap gap-3">
                    {flavorOptions.map((flavor) => (
                        <OptionBox value={flavor} setValue={setSelectedFlavor} currentValue={selectedFlavor} label={flavor} />
                    ))}
                </div>
            </div>

            {/* Cake Quantity */}
            <div className="mb-6">
                <SecondaryTitle title={"Cake Quantity"} />
                <div className='flex items-center gap-4'>
                    <p>Quantity</p>
                    <IncreaseDecreaseButtons value={cakeQuantity} setValue={setCakeQuantity} />
                </div>
            </div>

            {/* Cake Weight (lbs) */}
            <div className="mb-6">
                <SecondaryTitle title={"Weight (in pounds)"} />
                <div className='flex items-center gap-4'>
                    <p>Weight</p>
                    <IncreaseDecreaseButtons value={cakeWeight} setValue={setCakeWeight} />
                </div>
            </div>


            {/* Total Price */}
            <div className="mb-8 border-gray-200">
                <p className=" text-gray-800">Total Price: $35.00</p>
            </div>
        </div>
    );
};

export default ChooseCake;

