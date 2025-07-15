"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
    "https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c0e3e8fe8.png",
    "https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c118c682d.png",
    "https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c198cdb8a.png",
    "https://amazcart.ischooll.com/public/uploads/images/12-12-2024/675acfc805d1d.png",
    "https://amazcart.ischooll.com/public/uploads/images/12-12-2024/675acfaf09496.png",
    "https://amazcart.ischooll.com/public/uploads/images/12-12-2024/675ace5b56e8b.png",
    "https://amazcart.ischooll.com/public/uploads/images/12-12-2024/675acfaf09496.png",
    "https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2c1d300418.png",
    "https://amazcart.ischooll.com/public/uploads/images/12-12-2024/675acde72d609.png",
    "https://amazcart.ischooll.com/public/uploads/images/12-12-2024/675ace02e6b42.png",
];

const Brands = () => {
    return (
        <section className="container max-w-7xl mx-auto px-3 mt-14">
            <h2 className="font-bold text-[16px] md:text-[20px] mb-6 lg:text-[30px]">
                Local Brands
            </h2>
            <div className="grid border border-gray-700 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center p-4">
                {brands.map((src, index) => (
                    <Link key={index} href="#" className="block">
                        <Image
                            src={src}
                            alt={`Brand ${index + 1}`}
                            width={112}
                            height={112}
                            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain mx-auto"
                            unoptimized
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Brands;
