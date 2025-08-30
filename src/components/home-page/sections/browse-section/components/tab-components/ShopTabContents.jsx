import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import Filter from '@/components/shared/filter/Filter';
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard';
import useAxios from '@/hooks/useAxios';
import { getFormattedShop } from '@/utils/getFormattedData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ShopTabContents({ categories, locations }) {
    // options for select input
    const categoryOptions = [{ label: "All Categories", value: "" }, ...categories?.map((category) => ({ label: category.categoryName, value: category.id }))];
    const locationOptions = [{ label: "All Locations", value: "" }, ...locations?.map((location) => ({ label: location.name, value: location.id }))];

    // state for filters
    const [category, setCategory] = useState({});
    const [location, setLocation] = useState({});
    const [shops, setShops] = useState([]);
    const axios = useAxios();

    // fetch shops data with filters
    useEffect(() => {
        if (category?.value) {
            axios.get(`/categories/${category?.value}/vendors`).then((res) => {
                setShops(res?.data?.vendors);
            });
        } else {
            axios.get(`/vendor-show`).then((res) => {
                setShops(res?.data?.data);
            });
        }
    }, [category, location]);


    return (
        <div>
            <div className='mb-6 px-2 lg:px-0'>
                <Filter category={category} setCategory={setCategory} location={location} setLocation={setLocation} categoryOptions={categoryOptions} locationOptions={locationOptions} />
            </div>
            {
                shops?.length > 0 && <CustomSlider mobileView={3} desktopView={6}>
                    {
                        shops.map((shop) => (
                            <Link href={`/shop?id=${shop.id}`} className='block'>
                                <PrimaryCard key={shop.id} item={getFormattedShop(shop)} containerClassName={"px-2"} />
                            </Link>
                        ))
                    }
                </CustomSlider>
            }
        </div>
    )
}
