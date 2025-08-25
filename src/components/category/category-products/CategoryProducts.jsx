import Items from '@/components/shared/items/Items'
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import { getFormattedProduct } from '@/utils/getFormattedData'
import Link from 'next/link'

export default function CategoryProducts({products}) {
    return (
        <Items title={"Products"} desktopView={5} mobileView={3}>
            {products?.map((product, index) => (
                <Link href="/single-item" className="block" key={index}>
                    <PrimaryCard
                        item={getFormattedProduct(product)}
                        containerClassName="px-2"
                    />
                </Link>
            ))}
        </Items>
    )
}
