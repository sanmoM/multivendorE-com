import Items from '@/components/shared/items/Items'
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import { getFormattedProduct } from '@/utils/getFormattedData'
import Link from 'next/link'

export default function ShopProducts({ products, isLoading }) {
    return (
        <Items title={"Products"} desktopView={6} mobileView={3}>
            {products?.map((product, index) => (
                <Link href={`/single-item?type=${product?.type}&id=${product?.id}`} className="block" key={index}>
                    <PrimaryCard
                        item={getFormattedProduct(product)}
                        containerClassName="px-2"
                        isLoading={isLoading}
                    />
                </Link>
            ))}
        </Items>
    )
}
