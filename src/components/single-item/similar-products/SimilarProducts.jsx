import CustomSlider from '@/components/shared/custom-slider/CustomSlider';
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';


export default function SimilarProducts({ products }) {
    console.log(products, "products")
    return (
        <div className='mt-8'>
            <PrimaryTitle title={"Similar Products"} className={"mb-6"} />
            <CustomSlider desktopView={6} mobileView={2} paddingDesktop={60} paddingMobile={30} autoplay>
                {
                    products.map((item, index) => (
                        <>
                            <PrimaryCard item={{ image: item?.product_image || item?.image, title: item?.cake_name || item?.name, subtitle: `$${item?.regular_price}` }} containerClassName={"px-2"} />
                        </>
                    ))
                }
            </CustomSlider>
        </div>
    )
}
