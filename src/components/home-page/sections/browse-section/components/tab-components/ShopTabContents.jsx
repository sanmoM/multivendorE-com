import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import Filter from '@/components/shared/filter/Filter';
import NoDataText from '@/components/shared/no-data-text/NoDataText';
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard';
import useAxios from '@/hooks/useAxios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ShopTabContents({ categories, locations }) {
    const [isLoading, setIsLoading] = useState(true);
    // options for select input
    const categoryOptions = [{ label: "All Categories", value: "all" }, ...categories?.map((category) => ({ label: category.categoryName, value: category.id }))];
    const locationOptions = [{ label: "All Locations", value: "all" }, ...locations?.map((location) => ({ label: location.upazila_name, value: location.id }))];

    // state for filters
    const [category, setCategory] = useState(categoryOptions[0]);
    const [location, setLocation] = useState(locationOptions[0]);
    const [shops, setShops] = useState(Array(6).fill(null));
    const axios = useAxios();

    // fetch shops data with filters
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`/vendors/filter/${category?.value}/${location?.value}`)
                setShops(res?.data?.vendors);
            } catch (error) {
                console.log(error);
                setShops([]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [category, location]);


    return (
        <div>
            <div className='mb-6 px-2 lg:px-0'>
                <Filter category={category} setCategory={setCategory} location={location} setLocation={setLocation} categoryOptions={categoryOptions} locationOptions={locationOptions} />
            </div>
            {
                shops?.length > 0 ? <CustomSlider mobileView={3} desktopView={6}>
                    {
                        shops.map((shop, index) => (
                            <Link href={`/shop?id=${shop?.user?.id}`} className='block w-full'>
                                <PrimaryCard key={index} item={{ image: shop?.image, title: shop?.shop_name, subtitle: shop?.address }} containerClassName={"px-2"} isLoading={isLoading} />
                            </Link>
                        ))
                    }
                </CustomSlider> : <NoDataText text={"No shops found"} />
            }
        </div>
    )
}
