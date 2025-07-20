"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/shared/product-card/ProductCard";

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

const MoreProducts = () => {
  return (
    <section className="container max-w-7xl mx-auto px-3">
      <div className="border-x border-gray-200 border-t p-4">
        <h2 className="lg:text-[24px] font-bold">
          MORE PRODUCTS THAT YOU MAY LOVE
        </h2>
      </div>

      <div className="grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-4">
        {items.map((product, idx) => (
          <ProductCard item={product} key={idx} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="border-2 text-sm border-black hover:bg-black hover:text-white text-[14px] font-medium transition duration-200 px-8 py-2">
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default MoreProducts;
