"use client"

import MobileHeaderWithSearchbar from "@/components/root-layout/header/components/mobile-header-withSearchbar/MobileHeaderWithSearchbar";
import Container from "@/components/shared/container/Container";
import FeaturedItems from "@/components/shared/featured-items/FeaturedItems";
import Items from "@/components/shared/items/Items";
import NoDataText from "@/components/shared/no-data-text/NoDataText";
import PrimaryCard from "@/components/shared/primary-card/PrimaryCard";
import useAxios from "@/hooks/useAxios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [resellerId, setResellerId] = useState(id);
    const [isLoading, setIsLoading] = useState(true);
    const [resellers, setResellers] = useState(Array(6).fill(null));
    const [resellersProducts, setResellersProducts] = useState([]);

    const axios = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resellerRes = await axios.get(`/all/reseller`);
                setResellers(resellerRes?.data?.resellers);

                const resellerProductsRes = await axios.get(`/reseller/products/show/${resellerId}`);
                setResellersProducts(resellerProductsRes?.data?.products);
            } catch (error) {
                console.log(error);
                setResellers([]);
                setResellersProducts([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            <MobileHeaderWithSearchbar title={"Resellers"} />
            <Container>
                {/* <div>
                    <h1 className="hidden lg:block text-3xl text-primary font-semibold mb-7">Resellers</h1>
                    <Filter />
                </div> */}
                <div className={"space-y-10 lg:space-y-16 mt-6 lg:mt-10 "}>
                    {
                        resellers?.length > 0 ? <FeaturedItems title={"All Resellers"} desktopView={6} mobileView={3} >
                            {
                                resellers?.map((reseller, index) => (
                                    <Link className="w-full block" href={`/reseller?id=${resellerId}`} key={index} onClick={() => setResellerId(reseller?.reseller?.id)}>
                                        <PrimaryCard key={index} item={{ image: reseller?.reseller?.image, title: reseller?.reseller?.business_name, subtitle: reseller?.reseller?.bussiness_address }} containerClassName={"px-2 w-full"} isLoading={isLoading} />
                                    </Link>
                                ))
                            }
                        </FeaturedItems> : <NoDataText text={"No resellers found"} />
                    }
                    {
                        resellersProducts?.length > 0 &&
                        <Items title={"Resellers Products"} desktopView={6} mobileView={3} >
                            {
                                resellers?.map((reseller, index) => (
                                    <PrimaryCard key={index} item={reseller} containerClassName={"px-2 w-full"} isLoading={isLoading} />
                                ))
                            }
                        </Items>

                    }
                </div>
            </Container>
        </div>
    )
}
