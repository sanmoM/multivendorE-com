import FeaturedItems from '@/components/shared/featured-items/FeaturedItems'
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import { IMAGE_BASE_URL } from '@/config'
import Link from 'next/link'

export default function FeaturedProducts({ products }) {
    return (
        <div>
            <FeaturedItems title={"Featured Products"} desktopView={5} mobileView={3} >
                {
                    products?.map((product, index) => (
                        <Link href={"/single-item"} className="block" key={index}>
                            {/* {console.log(product?.data?.product_image, "featured product")} */}
                            <PrimaryCard item={{ image: product?.data?.product_image, title: product?.data?.cake_name, subtitle: `$${product?.data?.regular_price}` }} containerClassName={"px-2"} />
                        </Link>
                    ))
                }
            </FeaturedItems>
        </div>
    )
}
