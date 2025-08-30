// "use client";

import Banner from "@/components/home-page/sections/banner/Banner";
import BrowseSection from "@/components/home-page/sections/browse-section/BrowseSection";
import FeaturedProducts from "@/components/home-page/sections/featured-products/FeaturedProducts";
import MoreFeaturedProducts from "@/components/home-page/sections/more-feature-products/MoreFeaturedProducts";
import PromotionalSection from "@/components/home-page/sections/promotional-section/PromotionalSection";
import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import Container from "@/components/shared/container/Container";
import { getData } from "@/utils/fetch";

export default async function Home() {
  const res = await getData("/home");

  return (
    <div>
      <MobileHeaderWithSearchbar title={"Shop Hub"} />
      <Container className={"space-y-6 lg:space-y-8 !pt-0"}>
        <Banner data={res.sliders} />
        <PromotionalSection />
        <BrowseSection />
        <FeaturedProducts data={res.featured_products} />
        <MoreFeaturedProducts />
      </Container>
    </div>

  );
}
