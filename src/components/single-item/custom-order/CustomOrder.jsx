"use client";


import ColorPicker from '@/components/shared/color-picker/ColorPicker';
import IncreaseDecreaseButtons from '@/components/shared/increase-decrease-buttons/IncreaseDecreaseButtons';
import OptionBox from '@/components/shared/option-box/OptionBox';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import useModalAction from '@/hooks/useModalAction';
import { useState } from 'react';
import DateAndTimeInput from './components/DateAndTimeInput';

const CustomOrderModalContents = ({ handlePlaceOrder: handlePlaceOrderAction }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [weight, setWeight] = useState(1);
    const [designNotes, setDesignNotes] = useState('');
    const [pickupDelivery, setPickupDelivery] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');

    const { handleOpenModal } = useModalAction();

    const cakeSizes = [
        { label: 'Small (6–8 servings)', value: 'small' },
        { label: 'Medium (10–12 servings)', value: 'medium' },
        { label: 'Large (14–16 servings)', value: 'large' },
    ];

    const cakeFlavors = ['Vanilla', 'Chocolate', 'Red Velvet', 'Carrot'];

    const cakeColors = [
        { name: 'Pink', hex: '#FFC0CB' },
        { name: 'Light Blue', hex: '#ADD8E6' },
        { name: 'Light Green', hex: '#90EE90' },
        { name: 'Light Yellow', hex: '#FFFFE0' },
    ];

    const handlePlaceOrder = () => {
        handlePlaceOrderAction()
    };

    return (
        <div className="flex items-center justify-center font-sans max-w-xl ">
            <div className="bg-white max-w-xl w-full p-6 sm:p-8 ">
                {/* Cake Size */}
                <div className="mb-6">
                    {/* <h3 className="text-lg font-semibold text-primary mb-3">Cake Size</h3> */}
                    <SecondaryTitle title={"Cake Size"} />
                    <div className="flex flex-wrap gap-3">
                        {cakeSizes.map((size) => (

                            <OptionBox value={size.value} setValue={setSelectedSize} currentValue={selectedSize} label={size.label} />
                        ))}
                    </div>
                </div>

                {/* Flavor */}
                <div className="mb-6">
                    <SecondaryTitle title={"Flavor"} />
                    <div className="flex flex-wrap gap-3">
                        {cakeFlavors.map((flavor) => (
                            <OptionBox value={flavor} setValue={setSelectedFlavor} currentValue={selectedFlavor} label={flavor} />
                        ))}
                    </div>
                </div>

                {/* Color */}
                <div className="mb-6">
                    <SecondaryTitle title={"Color"} />
                    <div className="flex flex-wrap gap-3">
                        {cakeColors.map((color) => (

                            <ColorPicker setColor={setSelectedColor} color={color} selectedColor={selectedColor} />
                        ))}
                    </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                    <SecondaryTitle title={"Quantity"} />
                    <div className='flex items-center gap-4'>
                        <p>Quantity</p>
                        <IncreaseDecreaseButtons value={quantity} setValue={setQuantity} />
                    </div>
                </div>

                {/* Weight (in pounds) */}
                <div className="mb-6">
                    <SecondaryTitle title={"Weight (in pounds)"} />
                    <div className='flex items-center gap-4'>
                        <p>Weight</p>
                        <IncreaseDecreaseButtons value={weight} setValue={setWeight} />
                    </div>
                </div>

                {/* Design Notes */}
                <div className="mb-6">
                    <SecondaryTitle title={"Design"} />
                    <textarea
                        value={designNotes}
                        onChange={(e) => setDesignNotes(e.target.value)}
                        rows="4"
                        className="w-full px-4 py-2 border !border-secondary/50 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200 resize-y"
                        placeholder="Enter design notes here..."
                    ></textarea>
                </div>

                {/* Pickup/Delivery Date and Time */}
                <div className="mb-6">
                    <SecondaryTitle title={"Pickup/Delivery"} />
                    <DateAndTimeInput />
                </div>

                {/* Additional Notes */}
                <div className="mb-8">
                    <SecondaryTitle title={"Additional Notes"} />
                    <textarea
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        rows="4"
                        className="w-full px-4 py-2 border !border-secondary/50 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200 resize-y"
                        placeholder="Enter any additional notes here..."
                    ></textarea>
                </div>

                {/* Place Order Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handlePlaceOrder}
                        className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-opacity-75 w-full"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomOrderModalContents;

