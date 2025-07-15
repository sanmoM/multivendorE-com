'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const items = [
    {
        id: 1,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399d2188d1a6.webp',
        offer: '$2.00 Off',
        title: 'Minimalistic Living Room Sofa 3pcs',
        price: '$30.00',
    },
    {
        id: 2,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp',
        offer: '$2.00 Off',
        title: 'Minimalistic Living Room Sofa 3pcs',
        price: '$30.00',
    },
    {
        id: 3,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399bc9d00979.webp',
        offer: '$2.00 Off',
        title: 'Minimalistic Living Room Sofa 3pcs',
        price: '$30.00',
    },
    {
        id: 4,
        image: 'https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aaa2bce23a.webp',
        offer: '$2.00 Off',
        title: 'Minimalistic Living Room Sofa 3pcs',
        price: '$30.00',
    },
    {
        id: 5,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399c876defe6.webp',
        offer: '$2.00 Off',
        title: 'Minimalistic Living Room Sofa 3pcs',
        price: '$30.00',
    },
    {
        id: 6,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b882ce24f.webp',
        offer: '$2.00 Off',
        title: 'Minimalistic Living Room Sofa 3pcs',
        price: '$30.00',
    },
];

const Products = () => {
    return (
        <section className="px-3 mt-16">
            <div className="grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-4">
                {items.map((product, idx) => (
                    <div
                        key={idx}
                        className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                    >
                        <div className="relative">
                            <Link href="/singlePage.html" className="block overflow-hidden">
                                <Image
                                    width={400}
                                    height={400}
                                    src={product.image}
                                    alt="Sofa"
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>

                            <div className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full">
                                {product.offer}
                            </div>

                            <div className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 rounded-md shadow-lg p-2 flex flex-col gap-2 z-10">
                                <Link href="#" className="hover:text-[#ff2631] text-xs sm:text-sm">
                                    <i className="fa-solid fa-code-compare"></i>
                                </Link>
                                <Link href="#" className="hover:text-[#ff2631] text-xs sm:text-sm">
                                    <i className="fa-regular fa-eye"></i>
                                </Link>
                                <Link href="#" className="hover:text-[#ff2631] text-xs sm:text-sm">
                                    <i className="fa-regular fa-heart"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                            <h4 className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3">
                                {product.title}
                            </h4>

                            <div className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0">
                                <p className="text-center md:text-left font-bold text-gray-800">
                                    {product.price}
                                </p>

                                <Link
                                    href="#"
                                    className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                >
                                    Buy
                                </Link>

                                <Link
                                    href="#"
                                    className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                >
                                    <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
