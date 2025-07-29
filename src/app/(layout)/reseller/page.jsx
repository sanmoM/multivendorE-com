import Card2 from "@/components/shared/card-2/Card2";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Filter from "@/components/shared/filter/Filter";
import Items from "@/components/shared/items/Items";
import MobileHeaderWithSearchbar from "@/components/shared/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import { resellers } from "@/data";


export default function page() {
    return (
        <div>
            <MobileHeaderWithSearchbar title={"Resellers"} />
            <Container>
                <div>
                    <h1 className="hidden lg:block text-3xl text-primary font-semibold mb-7">Resellers</h1>
                    <Filter />
                </div>
                <div className={"space-y-10 lg:space-y-16 mt-6 lg:mt-10 "}>
                    {/* <FeaturedShop /> */}
                    {/* <AllShops /> */}
                    <FeaturedItems title={"Featured Resellers"} desktopView={5} mobileView={3} >
                        {
                            resellers?.map((reseller) => (
                                <Card2 key={reseller.id} item={reseller} containerClassName={"px-2"} />
                            ))
                        }
                    </FeaturedItems>
                    <Items title={"All Resellers"} desktopView={5} mobileView={3} >
                        {
                            resellers?.map((reseller) => (
                                <Card2 key={reseller.id} item={reseller} containerClassName={"px-2"} />
                            ))
                        }
                    </Items>
                </div>
            </Container>
        </div>
    )
}
