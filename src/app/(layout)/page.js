import Banner from "@/components/home-page/banner/Banner";
import BestDeals from "@/components/home-page/best-deal/BestDeal";
import Brands from "@/components/home-page/brands/Brands";
import Category from "@/components/home-page/category/Category";
import MoreProducts from "@/components/home-page/more-products/MoreProducts";
import ProductPromotion from "@/components/home-page/product-promotion/ProductPromotion";
import Products from "@/components/home-page/products/Products";
import FirstPromotion from "@/components/home-page/promotions/first-promotion/FirstPromotion";
import SecondPromotion from "@/components/home-page/promotions/second-promotion/SecondPromotion";
import TopProducts from "@/components/home-page/top-products/TopProducts";
import Container from "@/components/shared/container/Container";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Category />
      <BestDeals />
      <FirstPromotion />
      <Products />
      <SecondPromotion />
      <TopProducts />
      <ProductPromotion />
      <MoreProducts />
      <Brands />
    </Container>
  );
}
