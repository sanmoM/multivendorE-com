import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import Filter from '@/components/shared/filter/Filter';
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard';
import useAxios from '@/hooks/useAxios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ShopTabContents({ categories, locations }) {
    // options for select input
    const categoryOptions = [{ label: "All Categories", value: "all" }, ...categories?.map((category) => ({ label: category.categoryName, value: category.id }))];
    const locationOptions = [{ label: "All Locations", value: "all" }, ...locations?.map((location) => ({ label: location.upazila_name, value: location.id }))];

    // state for filters
    const [category, setCategory] = useState(categoryOptions[0]);
    const [location, setLocation] = useState(locationOptions[0]);
    const [shops, setShops] = useState([]);
    const axios = useAxios();

    // fetch shops data with filters
    useEffect(() => {
        axios.get(`/vendors/filter/${category?.value}/${location?.value}`).then((res) => {
            setShops(res?.data?.vendors);
        });
    }, [category, location]);


    return (
        <div>
            <div className='mb-6 px-2 lg:px-0'>
                <Filter category={category} setCategory={setCategory} location={location} setLocation={setLocation} categoryOptions={categoryOptions} locationOptions={locationOptions} />
            </div>
            {
                shops?.length > 0 ? <CustomSlider mobileView={3} desktopView={6}>
                    {
                        shops.map((shop) => (
                            <Link href={`/shop?id=${shop.id}`} className='block w-full'>
                                <PrimaryCard key={shop.id} item={{ image: shop?.image, title: shop?.shop_name, subtitle: shop?.address }} containerClassName={"px-2"} />
                            </Link>
                        ))
                    }
                </CustomSlider> : <h2 className='text-primary font-semibold text-xl h-[20vh] flex items-center justify-center'><span>No shops found</span></h2>
            }
        </div>
    )
}
