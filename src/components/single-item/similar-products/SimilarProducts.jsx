import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';


export default function SimilarProducts({ type, categoryId }) {
    const axios = useAxios();
    const {
        data: products,
        isLoading: relatedLoading,
        isError: relatedError,
    } = useQuery({
        queryKey: ["related-products"],
        queryFn: async () => {
            const res = await axios.get(
                `/related-product/${type}/${categoryId}`
            );
            return res.data.data;
        },
    });
    return (
        <div className='mt-8'>
            <PrimaryTitle title={"Similar Products"} className={"mb-6"} />
            <CustomSlider desktopView={6} mobileView={2} paddingDesktop={60} paddingMobile={30} autoplay>
                {
                    products?.map((item, index) => (
                        <>
                            <PrimaryCard item={{ image: item?.product_image || item?.image, title: item?.cake_name || item?.name, subtitle: `$${item?.regular_price}` }} containerClassName={"px-2"} />
                        </>
                    ))
                }
            </CustomSlider>
        </div>
    )
}
