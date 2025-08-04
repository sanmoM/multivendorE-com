import { products } from '@/data'
import ModalProductCard2 from '../../modal-product-card/ModalProductCard2'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'

export default function ProductsModalContents() {
    return (
        <div>
            <PrimaryTitle title={"Products"} />
            <div className="min-w-sm w-full space-y-6">
                {
                    products?.map((product) => (
                        <ModalProductCard2 key={product.id} item={{ id: product.id, image: product?.image, title: product?.name, text2: "100+ sold" }} />
                    ))
                }
            </div>
        </div>
    )
}
