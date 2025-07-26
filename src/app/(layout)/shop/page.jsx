import Container from "@/components/shared/container/Container";
import AllShops from "@/components/shop/sections/all-shop/AllShop";
import FeaturedShop from "@/components/shop/sections/featured-shop/FeaturedShop";
import ShopHeader from "@/components/shop/sections/shob-header/ShopHeader";
import ShopFilter from "@/components/shop/sections/shop-filter/ShopFilter";


export default function page() {
    return (
        <div>
            <ShopHeader />
            <Container>
                <div>
                    <h1 className="hidden lg:block text-3xl text-primary font-semibold mb-7">Shops</h1>
                    <ShopFilter />
                </div>
                <div className={"space-y-10 lg:space-y-16 mt-6 lg:mt-10 "}>
                    <FeaturedShop />
                    <AllShops />
                </div>
            </Container>
        </div>
    )
}
