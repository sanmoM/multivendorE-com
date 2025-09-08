import FallbackImage from '@/components/shared/fallback-image/FallbackImage';
import { cn } from '@/utils/cn';

export default function ModalProductCard({ item, imageClassName }) {

    return (
        <div className="flex items-center space-x-4">
            <FallbackImage
                src={item?.image}
                alt={item?.name}
                className={cn('rounded-md object-cover aspect-square', imageClassName)}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/E0E0E0/808080?text=Item"; }}
                height={70}
                width={70}
            />
            <div>
                <h4 className="font-semibold text-primary text-nowrap">{item.name}</h4>
                <p className="text-secondary text-nowrap">Quantity: {item.quantity}</p>
                <p className=" text-secondary text-nowrap">Price: ${item.price}</p>
                {item?.stock && <p className="text-secondary text-nowrap">Stock: {item.stock}</p>}
                {item?.date && <p className="text-primary text-nowrap">Order Date: {item.date}</p>}
                {item?.paymentStatus && <p className={cn('text-primary py-[2px] px-5 w-fit rounded-sm mt-2 text-nowrap', item.paymentStatus === 'Paid' ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200')}>{item.paymentStatus}</p>}
            </div>
        </div>
    )
}
