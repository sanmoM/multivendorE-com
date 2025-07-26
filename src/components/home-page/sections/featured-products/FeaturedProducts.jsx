"use client";

import Card2 from '@/components/shared/card-2/Card2';
import LoadMoreBtn from '@/components/shared/load-more-btn/LoadMoreBtn';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import { products } from '@/data';
import { useEffect, useState } from 'react';

export default function FeaturedProducts() {
    // product quantity logic
    const [visibleProducts, setVisibleProducts] = useState(products);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                // Show only 3 products on small devices
                setVisibleProducts(products.slice(0, 3));
            } else {
                // Show all products on large devices
                setVisibleProducts(products);
            }
        };

        // Initial check
        handleResize();

        // Listen to resize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div>
            <SectionTitle title='Featured Products' />
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 mt-6'>
                {
                    visibleProducts.map((product) => (
                        <Card2 key={product.id} item={{ image: product?.image, name: product?.name, subtitle: `$${product?.price}` }} />
                    ))
                }
            </div>
            <LoadMoreBtn className='mt-6 hidden md:block' />
        </div>
    )
}
