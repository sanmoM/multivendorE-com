import Items from '@/components/shared/items/Items'
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import { IMAGE_BASE_URL } from '@/config'
import { getFormattedProduct } from '@/utils/getFormattedData'
import Link from 'next/link'

export default function CategoryProducts({ products }) {

    return (
        <Items title={"Products"} desktopView={6} mobileView={3}>
            {products?.map((product, index) => (
                <Link href={`/single-item?&type=${product?.type}&id=${product?.id}`} key={index}>
                    {console.log({ ...getFormattedProduct(product), image: product?.product_image }, "product")}
                    <PrimaryCard
                        item={{ ...getFormattedProduct(product), image: product?.product_image }}
                        containerClassName="px-2"
                    />
                </Link>
            ))}
        </Items>
    )
}
