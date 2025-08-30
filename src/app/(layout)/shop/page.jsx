"use client"

import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Filter from "@/components/shared/filter/Filter";
import PrimaryCard from "@/components/shared/primary-card/PrimaryCard";
import SectionTitle from "@/components/shared/section-title/SectionTitle";
import useAxios from "@/hooks/useAxios";
import { getFormattedShop } from "@/utils/getFormattedData";
import { useEffect, useState } from "react";


export default function Page() {
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);

    // options for select input
    const categoryOptions = [{ label: "All Categories", value: "" }, ...categories?.map((category) => ({ label: category.categoryName, value: category.id }))];
    const locationOptions = [{ label: "All Locations", value: "" }, ...locations?.map((location) => ({ label: location.name, value: location.id }))];


    // state for filters
    const [category, setCategory] = useState(categoryOptions[0]);
    const [location, setLocation] = useState(locationOptions[0]);
    const [shopProducts, setShopProducts] = useState([]);
    const [shops, setShops] = useState([]);
    const axios = useAxios();

    // fetch shops data with filters
    useEffect(() => {
        if (category?.value) {
            axios.get(`/categories/${category?.value}/vendors`).then((res) => {
                setShops(res?.data?.vendors);
            });
        } else {
            axios.get(`/vendor-show`).then((res) => {
                setShops(res?.data?.data);
            });
        }
    }, [category, location]);

    // fetch categories and locations
    useEffect(() => {
        const fetchData = async () => {
            const categoriesRes = await axios.get("/categories");

            setCategories(categoriesRes?.data?.categories);
        };
        fetchData();
    }, []);

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
                                <PrimaryCard key={shop.id} item={getFormattedShop(shop)} containerClassName={"px-2"} />
                            ))
                        }
                    </FeaturedItems>
                </div>

                {
                    shopProducts.length > 0 && (
                        <shopProducts products={shopProducts} />
                    )
                }
            </Container>
        </div>
    )
}
