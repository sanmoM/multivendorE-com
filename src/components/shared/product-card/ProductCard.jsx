import { getFormattedProduct } from '@/utils/getFormattedData'
import Link from 'next/link'
import PrimaryCard from '../primary-card/PrimaryCard'

export default function ProductCard({ item }) {
    return (
        <Link href={`/single-item?type=${item?.type}&id=${item?.id}`} className="block w-full" >
            <PrimaryCard item={getFormattedProduct(item)} containerClassName={"px-2"} />
        </Link>
    )
}
