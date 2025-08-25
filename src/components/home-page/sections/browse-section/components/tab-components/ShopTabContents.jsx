import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import Filter from '@/components/shared/filter/Filter';
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard';
import useAxios from '@/hooks/useAxios';
import { useEffect, useState } from 'react';

export default function ShopTabContents({ categories, locations }) {
    // options for select input
    const categoryOptions = categories?.map((category) => ({ label: category.categoryName, value: category.id }))
    const locationOptions = locations?.map((location) => ({ label: location.name, value: location.id }))

    // state for filters
    const [category, setCategory] = useState({});
    const [location, setLocation] = useState({});
    const [shops, setShops] = useState([]);
    const axios = useAxios();

    // fetch shops data with filters
    useEffect(() => {
        axios.get(`/categories/${category?.value}/vendors`).then((res) => {
            setShops(res?.data?.vendors);
        });
    }, [category, location]);

    return (
        <div>
            <div className='mb-6 px-2 lg:px-0'>
                <Filter category={category} setCategory={setCategory} location={location} setLocation={setLocation} categoryOptions={categoryOptions} locationOptions={locationOptions} />
            </div>
            {
                shops?.length > 0 && <CustomSlider mobileView={3} desktopView={5}>
                    {
                        shops.map((shop) => (
                            <>
                                <PrimaryCard key={shop.id} item={{ title: shop?.vendor?.shop_name, subtitle: shop?.vendor?.address, image: shop?.vendor?.image }} containerClassName={"px-2"} />
                            </>
                        ))
                    }
                </CustomSlider>
            }
        </div>
    )
}
