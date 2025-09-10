"use client";
import { useEffect, useRef, useState } from "react";

import Items from "@/components/shared/items/Items";
import ProductCard from "@/components/shared/product-card/ProductCard";
import useAxios from "@/hooks/useAxios";

export default function FeaturedProducts() {
    const axios = useAxios();
    const wrapperRef = useRef(null);
    const [end, setEnd] = useState(10);
    const [allProducts, setAllProducts] = useState([]);
    const [showAbleProducts, setShowAbleProducts] = useState([]);


    // get all products
    useEffect(() => {
        axios.get("/all-products").then((res) => {
            setAllProducts(res?.data?.products);
            setShowAbleProducts(res?.data?.products?.slice(0, end));
            setEnd(end + 10);
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
        if (showAbleProducts.length === allProducts.length) return;
        const newEnd = Math.min(end, allProducts.length);
        setShowAbleProducts(allProducts.slice(0, newEnd));
        setEnd(prev => prev + 10);
    };

    return (
        <div ref={wrapperRef}>
            <Items title={"More Featured Products"} desktopView={6} mobileView={3}>
                {showAbleProducts?.map((product, index) => (
                    <ProductCard item={product} key={index}  />
                ))}
            </Items>
        </div>
    );
}
