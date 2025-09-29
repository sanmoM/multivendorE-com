import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';

import FallbackImage from '@/components/shared/fallback-image/FallbackImage';
import IncreaseDecreaseButtons from '@/components/shared/increase-decrease-buttons/IncreaseDecreaseButtons';

export default function ProductOptions({ data, cartItem, setCartItem }) {
  const selectedVariant = cartItem?.variant || data?.variants?.[0];
  const quantity = cartItem?.quantity || 1;

  return (
    <div className=" max-w-xl w-full mt-6" id='cake-options'>
      <PrimaryTitle title={"Product Options"} />

      {/* variant */}
      <div className="mb-6">
        <SecondaryTitle title={"Variant"} />
        <div className='flex items-center gap-4'>
          {
            data?.variants?.map((variant, index) => (
              <FallbackImage
                key={index}
                src={variant}
                alt={variant}
                width={60}
                height={60}
                className={`rounded-sm aspect-square border-2 ${selectedVariant === variant ? '!border-secondary' : 'border-transparent'} cursor-pointer object-contain`}
                onClick={() => setCartItem({ ...cartItem, variant: variant })}
              />
            ))
          }
        </div>
      </div>

      <div className="mb-6">
        <SecondaryTitle title={"Quantity"} />
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4'>
            <p>Quantity</p>
            <IncreaseDecreaseButtons value={quantity} setValue={(value) => setCartItem({ ...cartItem, quantity: value })} maxQuantity={data?.stock} />
          </div>
          <p>{`(Stock : ${data?.stock})`}</p>
        </div>
      </div>


      {/* Total Price */}
      <div className="mb-8 border-gray-200">
        <p className=" text-gray-800">Total Price: ৳ {data?.price * quantity}</p>
      </div>
    </div>
  )
}
