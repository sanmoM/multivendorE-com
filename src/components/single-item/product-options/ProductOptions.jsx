import ColorPicker from '@/components/shared/color-picker/ColorPicker';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import { useState } from 'react';

import IncreaseDecreaseButtons from '@/components/shared/increase-decrease-buttons/IncreaseDecreaseButtons';
import Image from 'next/image';
import { IMAGE_BASE_URL } from '@/config';

export default function ProductOptions({ data }) {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  console.log(data?.variants)
  return (
    <div className=" max-w-xl w-full mt-6" id='cake-options'>
      <PrimaryTitle title={"Product Options"} />

      {/* variant */}
      <div className="mb-6">
        <SecondaryTitle title={"Variant"} />
        {
          data?.variants?.map((variant, index) => (
            <Image
              key={index}
              src={variant}
              alt={variant}
              width={60}
              height={60}
              className={`rounded-sm border-2 ${selectedVariant === index ? '!border-secondary' : 'border-transparent'} cursor-pointer object-contain`}
              onClick={() => setSelectedVariant(index)}
            />
          ))
        }
      </div>

      <div className="mb-6">
        <SecondaryTitle title={"Weight (in pounds)"} />
        <div className='flex items-center gap-4'>
          <p>Quantity</p>
          <IncreaseDecreaseButtons value={quantity} setValue={setQuantity} />
        </div>
      </div>


      {/* Total Price */}
      <div className="mb-8 border-gray-200">
        <p className=" text-gray-800">Total Price: ${data?.price * quantity}</p>
      </div>
    </div>
  )
}
