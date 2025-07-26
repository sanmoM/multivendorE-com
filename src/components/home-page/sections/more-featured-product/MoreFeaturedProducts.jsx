import SectionTitle from '@/components/shared/section-title/SectionTitle'
import { products } from '@/data'
import LoadMoreBtn from '@/components/shared/load-more-btn/LoadMoreBtn'
import FeaturedProductCard from '../../components/product-card/ProductCard'

export default function MoreFeaturedProducts() {
    return (
        <div>
            <SectionTitle title='More Featured Products' />
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
