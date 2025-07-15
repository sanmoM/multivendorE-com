'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const promoBanners = [
  {
    id: 1,
    href: '',
    src: 'https://amazcart.ischooll.com/public/uploads/images/04-01-2023/63b5623427671.jpeg',
  },
  {
    id: 2,
    href: '',
    src: 'https://amazcart.ischooll.com/public/uploads/images/04-01-2023/63b562344b987.jpeg',
  },
  {
    id: 3,
    href: '',
    src: 'https://amazcart.ischooll.com/public/uploads/images/04-01-2023/63b56f410e74b.jpeg',
  },
];

export default function ProductPromotion() {
  return (
    <section className="container max-w-7xl mx-auto px-3 my-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {promoBanners.map((banner) => (
          <div className="w-full" key={banner.id}>
            <Link href={banner.href}>
              <Image
                src={banner.src}
                alt={`Promo ${banner.id}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
