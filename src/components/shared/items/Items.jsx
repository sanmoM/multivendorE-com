"use client";

import Card2 from "@/components/shared/card-2/Card2";
import SectionTitle from "@/components/shared/section-title/SectionTitle";
import { shops } from "@/data";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../load-more-btn/LoadMoreBtn";
import Link from "next/link";


export default function Items({ title, desktopView, mobileView, hasLoadMoreBtn = false, children, titleClassName }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="mt-6">
            <SectionTitle title={title} className={titleClassName} />
            <div className=' grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-6 grid'
                style={{
                    gridTemplateColumns: isMobile ? `repeat(${mobileView}, 1fr)` : `repeat(${desktopView}, 1fr)`,
                }}
            >
                {children}
            </div>
            {
                hasLoadMoreBtn && <LoadMoreBtn className='mt-6 lg:mt-10 block' />
            }
        </div>
    )
}
