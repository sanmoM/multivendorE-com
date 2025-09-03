"use client"

import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Filter from "@/components/shared/filter/Filter";
import PrimaryCard from "@/components/shared/primary-card/PrimaryCard";
import SectionTitle from "@/components/shared/section-title/SectionTitle";
import ShopProducts from "@/components/shop/shop-products/ShopProducts";
import useAxios from "@/hooks/useAxios";
import { getFormattedShop } from "@/utils/getFormattedData";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Page() {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [categoryId, setCategoryId] = useState(id);


    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);

    // options for select input
    const categoryOptions = [{ label: "All Categories", value: "all" }, ...categories?.map((category) => ({ label: category.categoryName, value: category.id }))];
    const locationOptions = [{ label: "All Locations", value: "all" }, ...locations?.map((location) => ({ label: location.upazila_name, value: location.id }))];


    // state for filters
    const [category, setCategory] = useState(categoryOptions[0]);
    const [location, setLocation] = useState(locationOptions[0]);

    const [shopProducts, setShopProducts] = useState([]);
    const [shops, setShops] = useState([]);
    const axios = useAxios();

    // fetch shops data with filters
    useEffect(() => {
        axios.get(`/vendors/filter/${category?.value}/${location?.value}`).then((res) => {
            setShops(res?.data?.vendors);
        });
    }, [category, location]);

    // fetch categories and locations
    useEffect(() => {
        const fetchData = async () => {
            const [category, location] = await Promise.all([
                axios.get("/categories"),
                axios.get("/show-vendor-address")
            ]);

            setCategories(category?.data?.categories);
            setLocations(location?.data?.address);
        };
        fetchData();
    }, [])

    // get products by category id
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/vendor-product/${categoryId}`);
            setShopProducts(res?.data?.products || []);
        };
        fetchData();
    }, [categoryId]);


    return (
        <div>
            <MobileHeaderWithSearchbar title={"Shops"} />
            <Container>
                <div>
                    <SectionTitle title={"Featured Shops"} />
                    <Filter
                        categoryOptions={categoryOptions}
                        locationOptions={locationOptions}
                        setCategory={setCategory}
                        setLocation={setLocation}
                        category={category}
                        location={location}
                    />
                    <FeaturedItems desktopView={6} mobileView={3} >
                        {
                            shops?.map((shop) => (
                                <div key={shop.id} onClick={() => setCategoryId(shop.id)} className="w-full cursor-pointer">
                                    <PrimaryCard key={shop.id} item={{ image: shop?.image, title: shop?.shop_name, subtitle: shop?.address }} containerClassName={"px-2 w-full"} />
                                </div>
                            ))
                        }
                    </FeaturedItems>
                </div>

                {
                    shopProducts.length > 0 && (
                        <ShopProducts products={shopProducts} />
                    )
                }
            </Container>
        </div>
    )
}
