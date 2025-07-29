import Banner from "@/components/home-page/sections/banner/Banner";
import BrowseSection from "@/components/home-page/sections/browse-section/BrowseSection";
import PromotionalSection from "@/components/home-page/sections/promotional-section/PromotionalSection";
import Container from "@/components/shared/container/Container";
import Items from "@/components/shared/items/Items";
import MobileHeaderWithSearchbar from "@/components/shared/mobile-header-withSearchbar/MobileHeaderWithSearchbar";

export default function Home() {
  return (
    <div>
      <MobileHeaderWithSearchbar title={"Home"} />
      <Banner />
      <PromotionalSection />
      <BrowseSection />
      <Container className={"space-y-10 lg:space-y-16 mt-6 lg:mt-10 "}>
        <Items title={"Featured Products"} desktopView={5} mobileView={3} hasLoadMoreBtn />
        <Items title={"More Featured Products"} desktopView={5} mobileView={3} hasLoadMoreBtn />
      </Container>
    </div>

  );
}
