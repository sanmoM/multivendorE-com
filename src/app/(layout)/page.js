import Banner from "@/components/home-page/banner/Banner";
import BestDeals from "@/components/home-page/best-deal/BestDeal";
import Brands from "@/components/home-page/brands/Brands";
import BrowseSection from "@/components/home-page/browse-section/BrowseSection";
import MoreProducts from "@/components/home-page/more-products/MoreProducts";
import ProductPromotion from "@/components/home-page/product-promotion/ProductPromotion";
import Products from "@/components/home-page/products/Products";
import PromotionalSection from "@/components/home-page/promotional-section/PromotionalSection";
import FirstPromotion from "@/components/home-page/promotions/first-promotion/FirstPromotion";
import SecondPromotion from "@/components/home-page/promotions/second-promotion/SecondPromotion";
import TopProducts from "@/components/home-page/top-products/TopProducts";
import Container from "@/components/shared/container/Container";

export default function Home() {
  return (
    <div>
      <Banner />
      <PromotionalSection />
      <BrowseSection />
      <Container>
        <BestDeals />
        <FirstPromotion />
        <Products />
        <SecondPromotion />
        <TopProducts />
        <ProductPromotion />
        <MoreProducts />
        <Brands />
      </Container>
    </div>

  );
}
