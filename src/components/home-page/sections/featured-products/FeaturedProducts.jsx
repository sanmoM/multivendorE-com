import FeaturedItems from '@/components/shared/featured-items/FeaturedItems'
import ProductCard from '@/components/shared/product-card/ProductCard'

export default function FeaturedProducts({ data }) {
    return (
        <div>
            <FeaturedItems title={"Featured Products"} desktopView={6} mobileView={3} >
                {
                    data?.map((item, index) =>
                        <ProductCard item={item?.data} key={index} />
                    )
                }
            </FeaturedItems>
        </div>
    )
}
