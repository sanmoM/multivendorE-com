// "use client";
// import { useEffect, useRef, useState } from "react";

// import Items from "@/components/shared/items/Items";
// import ProductCard from "@/components/shared/product-card/ProductCard";
// import useAxios from "@/hooks/useAxios";

// export default function FeaturedProducts() {
//     const axios = useAxios();
//     const wrapperRef = useRef(null);
//     const [end, setEnd] = useState(10);
//     const [allProducts, setAllProducts] = useState([]);
//     const [showAbleProducts, setShowAbleProducts] = useState([]);


//     // get all products
//     useEffect(() => {
//         axios.get("/all-products").then((res) => {
//             setAllProducts([...res?.data?.products, ...res?.data?.general_product]);
//             setShowAbleProducts([...res?.data?.products, ...res?.data?.general_product]?.slice(0, end));
//             setEnd(end + 10);
//         });
//     }, []);

//     // logic for infinite scroll
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         handleShowAbleProducts(); // 👉 call your function here
//                     }
//                 });
//             },
//             { threshold: 0.1 } // Trigger when 10% of the div is visible
//         );

//         if (wrapperRef.current) {
//             observer.observe(wrapperRef.current);
//         }

//         return () => {
//             if (wrapperRef.current) {
//                 observer.unobserve(wrapperRef.current);
//             }
//         };
//     }, []);

//     const handleShowAbleProducts = () => {
//         if (showAbleProducts.length === allProducts.length) return;
//         const newEnd = Math.min(end, allProducts.length);
//         console.log(allProducts.slice(0, newEnd))
//         setShowAbleProducts(allProducts.slice(0, newEnd));
//         setEnd(prev => prev + 10);
//     };

//     return (
//         <div ref={wrapperRef}>
//             <Items title={"More Featured Products"} desktopView={6} mobileView={3}>
//                 {showAbleProducts?.map((product, index) => (
//                     <ProductCard item={product} key={index}  />
//                 ))}
//             </Items>
//         </div>
//     );
// }

"use client";
import { useEffect, useRef, useState } from "react";

import Items from "@/components/shared/items/Items";
import ProductCard from "@/components/shared/product-card/ProductCard";
import useAxios from "@/hooks/useAxios";

export default function FeaturedProducts() {
    const axios = useAxios();
    const wrapperRef = useRef(null); // main container
    const loaderRef = useRef(null);  // sentinel at bottom

    const [allProducts, setAllProducts] = useState([]);
    const [showAbleProducts, setShowAbleProducts] = useState([]);

    // get all products
    useEffect(() => {
        axios.get("/all-products").then((res) => {
            const merged = [...res?.data?.products, ...res?.data?.general_product];
            setAllProducts(merged);
            setShowAbleProducts(merged.slice(0, 10));
        });
    }, []);

    // infinite scroll with window scroll
    useEffect(() => {
        if (!loaderRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting) {
                    handleShowAbleProducts();
                }
            },
            {
                root: null,     // 👈 observe relative to viewport (window scrollbar)
                threshold: 0.1, // trigger when 10% of sentinel is visible
            }
        );

        observer.observe(loaderRef.current);

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [allProducts, showAbleProducts]);

    const handleShowAbleProducts = () => {
        if (showAbleProducts.length >= allProducts.length) return;

        const nextCount = showAbleProducts.length + 10;
        const newEnd = Math.min(nextCount, allProducts.length);

        setShowAbleProducts(allProducts.slice(0, newEnd));
    };

    return (
        <div ref={wrapperRef}>
            <Items title={"More Featured Products"} desktopView={6} mobileView={3}>
                {showAbleProducts?.map((product, index) => (
                    <ProductCard item={product} key={index} />
                ))}
            </Items>

            {/* Sentinel div at bottom of wrapper */}
            <div ref={loaderRef} style={{ height: "40px" }} />
        </div>
    );
}

