"use client"

import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Filter from "@/components/shared/filter/Filter";
import Items from "@/components/shared/items/Items";
import PrimaryCard from "@/components/shared/primary-card/PrimaryCard";
import useAxios from "@/hooks/useAxios";
import { getData } from "@/utils/fetch";
import { getFormattedShop } from "@/utils/getFormattedData";
import { useEffect, useState } from "react";


export default function Page() {
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);

    // options for select input
    const categoryOptions = categories?.map((category) => ({ label: category.categoryName, value: category.id }))
    const locationOptions = locations?.map((location) => ({ label: location.name, value: location.id }))

    console.log(categories);

    // state for filters
    const [category, setCategory] = useState({});
    const [location, setLocation] = useState({});
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
            // console.log(categoriesRes, "categories")
            // const locationsData = await getData("/locations");

            setCategories(categoriesRes?.data?.categories);
            // setLocations(locationsData);
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* <ShopHeader /> */}
            <MobileHeaderWithSearchbar title={"Shops"} />
            <Container>
                <div>
                    <h1 className="hidden lg:block text-3xl text-primary font-semibold mb-7">Shops</h1>
                    <Filter
                        categoryOptions={categoryOptions}
                        locationOptions={locationOptions}
                        setCategory={setCategory}
                        setLocation={setLocation}
                        category={category}
                        location={location}
                    />
                </div>
                <div className={"space-y-10 lg:space-y-16 mt-6 lg:mt-10 "}>
                    <FeaturedItems title={"Featured Shops"} desktopView={5} mobileView={3} >
                        {
                            shops?.map((shop) => (
                                <PrimaryCard key={shop.id} item={getFormattedShop(shop)} containerClassName={"px-2"} />
                            ))
                        }
                    </FeaturedItems>
                    <Items title={"All Shops"} desktopView={5} mobileView={3} >

                        {
                            shops?.map((shop) => (
                                <PrimaryCard key={shop.id} item={getFormattedShop(shop)} containerClassName={"px-2"} />
                            ))
                        }
                    </Items>
                </div>
            </Container>
        </div>
    )
}
