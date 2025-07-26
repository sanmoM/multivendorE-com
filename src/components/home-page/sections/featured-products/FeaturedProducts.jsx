import SectionTitle from '@/components/shared/section-title/SectionTitle'
import { products } from '@/data'
import FeaturedProductCard from '../../components/product-card/ProductCard'
import LoadMoreBtn from '@/components/shared/load-more-btn/LoadMoreBtn'

export default function FeaturedProducts() {
    return (
        <div>
            <SectionTitle title='Featured Products' />
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 mt-4 lg:mt-6'>
                {
                    products.map((product) => (
                        <FeaturedProductCard key={product.id} item={product} />
                    ))
                }
            </div>
            <LoadMoreBtn className='mt-8' />
        </div>
    )
}
