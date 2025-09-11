// "use client";

// import Button from '@/components/shared/button/Button';
// import FallbackImage from '@/components/shared/fallback-image/FallbackImage';
// import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
// import useAxios from '@/hooks/useAxios';
// import { cn } from '@/utils/cn';
// import { useEffect, useState } from 'react';


// export default function SellerInfo({ className, handleCustomOrderModal, vendorId }) {
//     const [data, setData] = useState({});
//     const axios = useAxios();
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 if (vendorId) {
//                     const sellerInfo = await axios.get(`/my-reviews-customer/${vendorId}`);
//                     setData(sellerInfo?.data);
//                     console.log(sellerInfo?.data, "seller info")
//                 }
//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 // setIsLoading(false);
//             }
//         }
//         fetchData();

//     }, [vendorId])

//     // console.log(vendorId, "vendor id in seller info")
//     console.log(data, "seller info in seller info")

//     return (
//         <div className={cn("lg:w-1/3 lg:pl-10 xl:pl-20 lg:pr-0 flex flex-col mt-6 lg:mt-0", className)}>
//             <PrimaryTitle title="Seller" />
//             <span>{data?.delivery_rate}</span>

//             {/* Seller Info Card */}
//             {/* <Link href={`/seller-profile`} className="block"> */}
//             <div className="flex items-center rounded-lg mb-6">
//                 {/* <Image
//                         src="/images/seller-image.png"
//                         alt="Sweet Delights Bakery"
//                         className="w-16 h-16 rounded-full mr-4 object-cover"
//                         width={40}
//                         height={40}
//                     /> */}
//                 {/* <FallbackImage
//                     src={data?.vendor?.image}
//                     alt="Sweet Delights Bakery"
//                     className="w-16 h-16 rounded-full mr-4 object-cover"
//                     width={40}
//                     height={40}
//                 /> */}
//                 <div>
//                     {console.log(data?.vendor?.name, "vendorName")}
//                     <p className="font-semibold text-primary">{`${data?.vendor?.name ?? "Loading..."}`}</p>
//                     <p className="text-sm text-secondary">Average response time: 2 hours</p>
//                 </div>
//             </div>
//             {/* </Link> */}

//             {/* Delivery Rate and Rating */}
//             <div className="grid grid-cols-[4fr_3fr] gap-3 justify-around items-center mb-6">
//                 <div className=" pl-4 py-6 border-2 !border-secondary/30 rounded-lg">
//                     <p className="text-2xl font-bold text-gray-900 mb-2">{`${data?.delivery_rate}`}</p>
//                     <p className="text-sm text-secondary font-medium">Delivery rate</p>
//                 </div>
//                 <div className=" pl-4 py-6 border-2 !border-secondary/30 rounded-lg">
//                     <p className="text-2xl font-bold text-gray-900 mb-2">{`${data?.average_rating}`}</p>
//                     <p className="text-sm text-secondary font-medium">Rating</p>
//                 </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex space-x-3">
//                 <Button text="Contact Seller" />
//                 {/* <Button text="Follow" className={"bg-tertiary"} /> */}
//             </div>

//             {/* Custom Cake Order Section */}
//             {/* <div className="mt-6 border-gray-200">
//                 <PrimaryTitle title="Custom Cake Order" />
//                 <p className="text-gray-600 mb-4 font-medium">
//                     Need a cake tailored to your specific requirements? Fill out our custom order form and we'll create the perfect cake for you.
//                 </p>
//                 <Button text="Custom Order Form" className={"bg-tertiary"} onClick={handleCustomOrderModal} />
//             </div> */}
//         </div>
//     )
// }


"use client";

import Button from '@/components/shared/button/Button';
import FallbackImage from '@/components/shared/fallback-image/FallbackImage';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAxios from '@/hooks/useAxios';
import { cn } from '@/utils/cn';
import { useQuery } from '@tanstack/react-query';

export default function SellerInfo({ className, handleCustomOrderModal, vendorId }) {

    const axios = useAxios();

    // --- Fetch seller info with react-query ---
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["seller-info", vendorId], // cache per vendor
        queryFn: async () => {
            const res = await axios.get(`/my-reviews-customer/${vendorId}`);
            return res?.data || {};
        },
        enabled: !!vendorId,
    });

    return (
        <div className={cn("lg:w-1/3 lg:pl-10 xl:pl-20 lg:pr-0 flex flex-col mt-6 lg:mt-0", className)}>
            <PrimaryTitle title="Seller" />

            {/* Seller Info Card */}
            <div className="flex items-center rounded-lg mb-6">
                {/* Optional FallbackImage if vendor image exists */}
                {data?.vendor?.image && (
                    <FallbackImage
                        src={data.vendor.image}
                        alt={data.vendor.name || "Seller"}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                        width={40}
                        height={40}
                    />
                )}
                <div>
                    <p className="font-semibold text-primary">
                        {data?.vendor?.name ?? "Loading..."}
                    </p>
                    <p className="text-sm text-secondary">
                        {data?.vendor?.address ?? "N/A"}
                    </p>
                </div>
            </div>

            {/* Delivery Rate and Rating */}
            <div className="grid grid-cols-[4fr_3fr] gap-3 justify-around items-center mb-6">
                <div className="pl-4 py-6 border-2 !border-secondary/30 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                        {data?.delivery_rate ?? "N/A"}
                    </p>
                    <p className="text-sm text-secondary font-medium">Delivery rate</p>
                </div>
                <div className="pl-4 py-6 border-2 !border-secondary/30 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                        {data?.average_rating ?? "N/A"}
                    </p>
                    <p className="text-sm text-secondary font-medium">Rating</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
                <Button text="Contact Seller" />
                {/* <Button text="Follow" className="bg-tertiary" /> */}
            </div>
        </div>
    );
}
