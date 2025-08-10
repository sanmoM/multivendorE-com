import Button from '@/components/shared/button/Button';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { cn } from '@/utils/cn';
import Image from 'next/image';


export default function SellerInfo({ className, handleCustomOrderModal }) {
    return (
        <div className={cn("lg:w-1/3 lg:pl-10 xl:pl-20 lg:pr-0 flex flex-col mt-6 lg:mt-0", className)}>
            <PrimaryTitle title="Seller" />

            {/* Seller Info Card */}
            <div className="flex items-center rounded-lg mb-6">
                <Image
                    src="/images/seller-image.png"
                    alt="Sweet Delights Bakery"
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                    width={40}
                    height={40}
                />
                <div>
                    <p className="font-semibold text-primary">Sweet Delights Bakery</p>
                    <p className="text-sm text-secondary">Average response time: 2 hours</p>
                </div>
            </div>

            {/* Delivery Rate and Rating */}
            <div className="grid grid-cols-[4fr_3fr] gap-3 justify-around items-center mb-6">
                <div className=" pl-4 py-6 border-2 !border-secondary/30 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900 mb-2">98%</p>
                    <p className="text-sm text-secondary font-medium">Delivery rate</p>
                </div>
                <div className=" pl-4 py-6 border-2 !border-secondary/30 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900 mb-2">4.8</p>
                    <p className="text-sm text-secondary font-medium">Rating</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
                <Button text="Contact Seller" />
                <Button text="Follow" className={"bg-tertiary"} />
            </div>

            {/* Custom Cake Order Section */}
            <div className="mt-6 border-gray-200">
                <PrimaryTitle title="Custom Cake Order" />
                <p className="text-gray-600 mb-4 font-medium">
                    Need a cake tailored to your specific requirements? Fill out our custom order form and we'll create the perfect cake for you.
                </p>
                <Button text="Custom Order Form" className={"bg-tertiary"} onClick={handleCustomOrderModal} />
            </div>
        </div>
    )
}
