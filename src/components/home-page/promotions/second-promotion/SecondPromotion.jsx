"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondPromotion = () => {
    return (
        <section class="container max-w-7xl mx-auto px-3 my-12">
            <div class="w-full">
                <Link href="#">
                    <Image
                        height={400}
                        width={400}
                        class="w-full"
                        src="https://amazcart.ischooll.com/public/uploads/images/18-12-2022/639ece3aa613f.jpeg"
                        alt=""
                    /></Link>
            </div>
        </section>
    );
};

export default SecondPromotion;
