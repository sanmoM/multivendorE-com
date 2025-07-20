import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/shared/product-card/ProductCard';

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

const BestDeals = () => {
  return (
    <section className="px-3 my-12">
      <div className="flex items-center mb-6 justify-between">
        <h2 className="lg:text-[30px] md:text-[22px] text-[16px] font-bold">Best Deal</h2>
        <div className="text-[14px] font-bold">
          <Link href="#">
            <span className="text-sm md:text-[14px]">VIEW ALL</span>
            <i className="fa-solid fa-angle-right px-2 text-[8px] md:text-[12px] py-1.5 bg-black ml-2 text-white rounded-full"></i>
          </Link>
        </div>
      </div>

      <div className="grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-4">
        {items.map((product, idx) => (
          <ProductCard item={product} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
