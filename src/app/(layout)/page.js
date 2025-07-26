import HomePageHeader from "@/components/home-page/sections/home-page-header/HomePageHeader";
import Banner from "@/components/home-page/sections/banner/Banner";
import BrowseSection from "@/components/home-page/sections/browse-section/BrowseSection";
import FeaturedProducts from "@/components/home-page/sections/featured-products/FeaturedProducts";
import MoreFeaturedProducts from "@/components/home-page/sections/more-featured-product/MoreFeaturedProducts";
import PromotionalSection from "@/components/home-page/sections/promotional-section/PromotionalSection";
import Container from "@/components/shared/container/Container";

export default function Home() {
  return (
    <div>
      <HomePageHeader />
      <Banner />
      <PromotionalSection />
      <BrowseSection />
      <Container className={"space-y-10 lg:space-y-16 mt-6 lg:mt-10 "}>
        <FeaturedProducts />
        <MoreFeaturedProducts />
      </Container>
    </div>

  );
}
