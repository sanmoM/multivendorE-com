import Card2 from "@/components/shared/card-2/Card2";
import SectionTitle from "@/components/shared/section-title/SectionTitle";
import { shops } from "@/data";


export default function FeaturedShop() {
    return (
        <div className="mt-6">
            <SectionTitle title='Featured Products' />
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-6'>
                {
                    shops.slice(0, 4).map((product) => (
                        <Card2 key={product.id} item={{ image: product?.image, name: product?.name, subtitle: product?.subtitle }} />
                    ))
                }
            </div>
        </div>
    )
}
