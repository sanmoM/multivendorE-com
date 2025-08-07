import { products } from '@/data'
import HorizontalCard from '../../../../horizontal-card/HorizontalCard'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'

export default function ProductsModalContents() {
    return (
        <div>
            <PrimaryTitle title={"Products"} />
            <div className="w-full space-y-6">
                {
                    products?.map((product) => (
                        <HorizontalCard key={product.id} item={{ id: product.id, image: product?.image, title: product?.name, text2: "100+ sold" }} />
                    ))
                }
            </div>
        </div>
    )
}
