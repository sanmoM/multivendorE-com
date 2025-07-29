import Container from "@/components/shared/container/Container";
import Filter from "@/components/shared/filter/Filter";
import Items from "@/components/shared/items/Items";
import MobileHeaderWithSearchbar from "@/components/shared/mobile-header-withSearchbar/MobileHeaderWithSearchbar";


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
                    <Items title={"Resellers"} desktopView={5} mobileView={3} />
                    <Items title={"All Resellers"} desktopView={5} mobileView={3} />
                </div>
            </Container>
        </div>
    )
}
