import FeaturedItems from '@/components/shared/featured-items/FeaturedItems'
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import { IMAGE_BASE_URL } from '@/config'
import { getFormattedProduct } from '@/utils/getFormattedData'
import Link from 'next/link'

export default function FeaturedProducts({ data }) {
    return (
        <div>
            <FeaturedItems title={"Featured Products"} desktopView={5} mobileView={3} >
                {
                    data?.map((item, index) =>
                        <Link href={"/single-item"} className="block" key={index}>
                            <PrimaryCard item={getFormattedProduct(item?.data)} containerClassName={"px-2"} />
                        </Link>
                    )
                }
            </FeaturedItems>
        </div>
    )
}
