"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Items from "@/components/shared/items/Items";
import PrimaryCard from "@/components/shared/primary-card/PrimaryCard";
import useAxios from "@/hooks/useAxios";
import { getFormattedProduct } from "@/utils/getFormattedData";

export default function FeaturedProducts() {
    const axios = useAxios();
    const wrapperRef = useRef(null);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    const [allProducts, setAllProducts] = useState([]);
    const [showAbleProducts, setShowAbleProducts] = useState([]);

    // get all products
    useEffect(() => {
        axios.get("/all-products").then((res) => {
            setAllProducts(res?.data?.products);
            setShowAbleProducts(res?.data?.products?.slice(start, end));
        });
    }, []);

    // logic for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        handleShowAbleProducts(); // 👉 call your function here
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the div is visible
        );

        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        return () => {
            if (wrapperRef.current) {
                observer.unobserve(wrapperRef.current);
            }
        };
    }, []);

    const handleShowAbleProducts = () => {
        setStart(prev => prev + 10);
        setEnd(prev => prev + 10);
        setShowAbleProducts(setShowAbleProducts?.concat(products?.slice(start, end)));
    };

    return (
        <div ref={wrapperRef}>
            <Items title={"More Featured Products"} desktopView={5} mobileView={3}>
                {showAbleProducts?.map((product, index) => (
                    <Link href="/single-item" className="block" key={index}>
                        <PrimaryCard
                            item={getFormattedProduct(product)}
                            containerClassName="px-2"
                        />
                    </Link>
                ))}
            </Items>
        </div>
    );
}
