"use client";

import ColorPicker from '@/components/shared/color-picker/ColorPicker';
import IncreaseDecreaseButtons from '@/components/shared/increase-decrease-buttons/IncreaseDecreaseButtons';
import OptionBox from '@/components/shared/option-box/OptionBox';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';

const CakeOptions = ({ data, cartItem, setCartItem }) => {
    const selectedSlices = cartItem?.slices || "4 Slices";
    const selectedFlavor = cartItem?.flavor || "Chocolate";
    const cakeWeight = cartItem?.quantity || 1;
    const selectedColor = cartItem?.color || "Pink";

    const cakeColors = [
        { name: 'Pink', hex: '#FFC0CB' },
        { name: 'Light Blue', hex: '#ADD8E6' },
        { name: 'Light Green', hex: '#90EE90' },
        { name: 'Light Yellow', hex: '#FFFFE0' },
    ];

    const sliceOptions = ['4 Slices', '6 Slices', '8 Slices', '10 Slices'];
    const flavorOptions = ['Chocolate', 'Vanilla', 'Red Velvet'];

    return (
        <div className=" max-w-xl w-full mt-6" id='cake-options'>
            <PrimaryTitle title={"Cake Options"} />
            {/* Cake Slice Options */}
            <div className="mb-6" id='variants'>
                <SecondaryTitle title={"Cake Slice Options"} />
                <div className="flex flex-wrap gap-3">
                    {sliceOptions.map((option, index) => (
                        <OptionBox value={option} setValue={(value) => setCartItem({ ...cartItem, slices: value })} currentValue={selectedSlices} label={option} key={index} />
                    ))}
                </div>
            </div>

            {/* Cake Flavor */}
            <div className="mb-6" id='cake-flavors'>
                <SecondaryTitle title={"Cake Flavor"} />
                <div className="flex flex-wrap gap-3">
                    {flavorOptions.map((flavor, index) => (
                        <OptionBox value={flavor} setValue={(value) => setCartItem({ ...cartItem, flavor: value })} currentValue={selectedFlavor} label={flavor} key={index} />
                    ))}
                </div>
            </div>

            {/* Cake Flavor */}
            <div className="mb-6">
                <SecondaryTitle title={"Color"} />
                <div className="flex flex-wrap gap-3">
                    {cakeColors.map((color, index) => (
                        <ColorPicker setColor={(value) => setCartItem({ ...cartItem, color: value })} color={color} selectedColor={selectedColor} key={index} />
                    ))}
                </div>
            </div>

            {/* Cake Weight (lbs) */}
            <div className="mb-6">
                <SecondaryTitle title={"Weight (in pounds)"} />
                <div className='flex items-center gap-4'>
                    <p>Weight</p>
                    <IncreaseDecreaseButtons value={cakeWeight} setValue={(value) => setCartItem({ ...cartItem, quantity: value })} maxQuantity={data?.stock} />
                </div>
            </div>


            {/* Total Price */}
            <div className="mb-8 border-gray-200">
                <p className=" text-gray-800 text-lg lg:text-xl">Total Price: <span className='font-bold'>${data?.price * cakeWeight}</span></p>
            </div>
        </div>
    );
};

export default CakeOptions;

