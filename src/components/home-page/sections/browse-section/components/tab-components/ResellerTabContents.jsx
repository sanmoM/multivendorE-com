import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard';
import useAxios from '@/hooks/useAxios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ResellerTabContents() {
    const [isLoading, setIsLoading] = useState(true);

    const [resellers, setResellers] = useState(Array(6).fill(null));
    const axios = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/all/reseller")
            setResellers(res?.data?.resellers);
            console.log(res?.data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* <div className='mb-6 px-2 lg:px-0'>
                <Filter />
            </div> */}
            <CustomSlider mobileView={3} desktopView={6}>
                {
                    resellers?.map((item, index) => (
                        <Link href={`/reseller?id=${item?.reseller?.id}`} className='block w-full'>
                            <PrimaryCard key={index} item={{ image: item?.reseller?.image, title: item?.reseller?.business_name, subtitle: item?.reseller?.bussiness_address }} containerClassName={"px-2"} isLoading={isLoading} />
                        </Link>
                    ))
                }
            </CustomSlider>
        </div>
    )
}
