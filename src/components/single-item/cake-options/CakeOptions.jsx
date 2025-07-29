"use client";

import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { useState } from 'react';
import CakeOptionSelect from './components/cake-option-select/CakeOptionSelect';

const ChooseCake = () => {
    const [numberOfSlices, setNumberOfSlices] = useState('');
    const [cakeFlavor, setCakeFlavor] = useState('');
    const [cakeColor, setCakeColor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [weight, setWeight] = useState('');

    // Dummy options for dropdowns (you'd replace these with actual data)
    const sliceOptions = ['8', '12', '16', '20'];
    const flavorOptions = ['Vanilla', 'Chocolate', 'Strawberry', 'Red Velvet'];
    const colorOptions = ['White', 'Pink', 'Blue', 'Green'];
    const weightOptions = ['1 kg', '1.5 kg', '2 kg', '2.5 kg'];
    const quantityOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        <div className="max-w-xl w-full mt-6">
            {/* <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Cake Options</h2> */}
            <PrimaryTitle title={"Cake Options"} />

            <div className='space-y-6'>
                <CakeOptionSelect
                    label="Number of Slices"
                    value={numberOfSlices}
                    onChange={(e) => setNumberOfSlices(e.target.value)}
                    options={sliceOptions}
                />

                <CakeOptionSelect
                    label="Cake Flavor"
                    value={cakeFlavor}
                    onChange={(e) => setCakeFlavor(e.target.value)}
                    options={flavorOptions}
                />

                <CakeOptionSelect
                    label="Cake Color"
                    value={cakeColor}
                    onChange={(e) => setCakeColor(e.target.value)}
                    options={colorOptions}
                />
                <CakeOptionSelect
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    options={quantityOptions}
                />

                <CakeOptionSelect
                    label="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    options={weightOptions}
                />
            </div>

            <p className="text-lg text-secondary mt-4">Total: $35.00</p>

        </div>
    );
};

export default ChooseCake;
