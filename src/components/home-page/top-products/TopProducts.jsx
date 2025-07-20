'use client';

import ProductCard from '@/components/shared/product-card/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const items = [
    {
        id: 1,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399d2188d1a6.webp',
        discount: 20,
        name: 'Minimalistic Living Room Sofa 3pcs',
        price: 30.00,
    },
    {
        id: 2,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp',
        discount: 20,
        name: 'Minimalistic Living Room Sofa 3pcs',
        price: 30.00,
    },
    {
        id: 3,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399bc9d00979.webp',
        discount: 20,
        name: 'Minimalistic Living Room Sofa 3pcs',
        price: 30.00,
    },
    {
        id: 4,
        image: 'https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aaa2bce23a.webp',
        discount: 20,
        name: 'Minimalistic Living Room Sofa 3pcs',
        price: 30.00,
    },
    {
        id: 5,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399c876defe6.webp',
        discount: 20,
        name: 'Minimalistic Living Room Sofa 3pcs',
        price: 30.00,
    },
    {
        id: 6,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b882ce24f.webp',
        discount: 20,
        name: 'Minimalistic Living Room Sofa 3pcs',
        price: 30.00,
    },
];

export default function TopProducts() {
    return (
        <section className="container max-w-7xl mx-auto px-3">
            <div className="flex gap-6 mb-7">
                <a className="lg:text-[24px] sm:text-[14px] cursor-pointer font-bold transition duration-200 hover:text-[#ff2631]">
                    Top Rating
                </a>
                <a className="lg:text-[24px] sm:text-[14px] cursor-pointer font-bold transition duration-200 hover:text-[#ff2631]">
                    People Choices
                </a>
                <a className="lg:text-[24px] sm:text-[14px] cursor-pointer font-bold transition duration-200 hover:text-[#ff2631]">
                    Top Picks
                </a>
            </div>

            <div className="grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-4">
                {items.map((product, idx) => (
                    <ProductCard item={product} key={idx} />
                ))}
            </div>
        </section>
    );
}
