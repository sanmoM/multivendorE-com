// "use client";

import Banner from "@/components/home-page/sections/banner/Banner";
import BrowseSection from "@/components/home-page/sections/browse-section/BrowseSection";
import PromotionalSection from "@/components/home-page/sections/promotional-section/PromotionalSection";
import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Items from "@/components/shared/items/Items";
import PrimaryCard from "@/components/shared/primary-card/PrimaryCard";
import { products } from "@/data";
import { getData } from "@/utils/fetch";
import Link from "next/link";

export default async function Home() {
  const res = await getData("/home");
  return (
    <div>
      <MobileHeaderWithSearchbar title={"Home"} />
      <Banner data={res.sliders} />
      <PromotionalSection data={res.offers} />
      <BrowseSection />
      <Container className={""}>
        <FeaturedItems title={"Featured Products"} desktopView={5} mobileView={3} >
          {
            products?.map((product, index) => (
              <Link href={"/single-item"} className="block" key={index}>
                <PrimaryCard item={{ image: product?.image, title: product?.name, subtitle: `$${product?.price}` }} containerClassName={"px-2"} />
              </Link>
            ))
          }
        </FeaturedItems>
        <Items title={"More Featured Products"} desktopView={5} mobileView={3} hasLoadMoreBtn >
          {
            products?.map((product, index) => (
              <Link href={"/single-item"} className="block" key={index} >
                <PrimaryCard item={{ image: product?.image, title: product?.name, subtitle: `$${product?.price}` }} containerClassName={"px-2"} />
              </Link>
            ))
          }
        </Items>
      </Container>
    </div>

  );
}
