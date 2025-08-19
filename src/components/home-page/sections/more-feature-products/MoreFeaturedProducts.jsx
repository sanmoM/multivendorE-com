import Items from '@/components/shared/items/Items'
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import { products } from '@/data'
import Link from 'next/link'

export default function MoreFeaturedProducts() {
    return (
        <div>
            <Items title={"More Featured Products"} desktopView={5} mobileView={3} >
                {
                    products?.map((product, index) => (
                        <Link href={"/single-item"} className="block" key={index} >
                            <PrimaryCard item={{ image: product?.image, title: product?.name, subtitle: `$${product?.price}` }} containerClassName={"px-2"} />
                        </Link>
                    ))
                }
            </Items>
        </div>
    )
}
