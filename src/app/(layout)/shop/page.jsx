import PrimaryCard from "@/components/shared/primary-card/PrimaryCard";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Filter from "@/components/shared/filter/Filter";
import Items from "@/components/shared/items/Items";
import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import { shops } from "@/data";


export default function page() {
    return (
        <div>
            {/* <ShopHeader /> */}
            <MobileHeaderWithSearchbar title={"Shops"} />
            <Container>
                <div>
                    <h1 className="hidden lg:block text-3xl text-primary font-semibold mb-7">Shops</h1>
                    <Filter />
                </div>
                <div className={"space-y-10 lg:space-y-16 mt-6 lg:mt-10 "}>
                    <FeaturedItems title={"Featured Shops"} desktopView={5} mobileView={3} >
                        {
                            shops?.map((shop) => (
                                <PrimaryCard key={shop.id} item={shop} containerClassName={"px-2"} />
                            ))
                        }
                    </FeaturedItems>
                    <Items title={"All Shops"} desktopView={5} mobileView={3} >

                        {
                            shops?.map((shop) => (
                                <PrimaryCard key={shop.id} item={shop} containerClassName={"px-2"} />
                            ))
                        }
                    </Items>
                </div>
            </Container>
        </div>
    )
}
