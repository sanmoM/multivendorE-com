import Banner from "@/components/home-page/sections/banner/Banner";
import BrowseSection from "@/components/home-page/sections/browse-section/BrowseSection";
import PromotionalSection from "@/components/home-page/sections/promotional-section/PromotionalSection";
import Card2 from "@/components/shared/card-2/Card2";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Items from "@/components/shared/items/Items";
import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import { products } from "@/data";

export default function Home() {
  return (
    <div>
      <MobileHeaderWithSearchbar title={"Home"} />
      <Banner />
      <PromotionalSection />
      <BrowseSection />
      <Container className={"mt-6 lg:mt-10 "}>
        <FeaturedItems title={"Featured Products"} desktopView={5} mobileView={3} >
          {
            products?.map((product) => (
              <Card2 key={product.id} item={{ image: product?.image, name: product?.name, subtitle: `$${product?.price}` }} containerClassName={"px-2"} />
            ))
          }
        </FeaturedItems>
        <Items title={"More Featured Products"} desktopView={5} mobileView={3} hasLoadMoreBtn >
          {
            products?.map((product) => (
              <Card2 key={product.id} item={{ image: product?.image, name: product?.name, subtitle: `$${product?.price}` }} containerClassName={"px-2"} />
            ))
          }
        </Items>
      </Container>
    </div>

  );
}
