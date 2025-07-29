"use client";

import Card2 from "@/components/shared/card-2/Card2";
import SectionTitle from "@/components/shared/section-title/SectionTitle";
import { shops } from "@/data";
import { useEffect, useState } from "react";
import CustomSlider from "../custom-slider/CustomSlider";


export default function FeaturedItems({ title, desktopView, mobileView, children }) {
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
            <SectionTitle title={title} />
            <div className="mt-6">
                <CustomSlider mobileView={mobileView} desktopView={desktopView}>
                    {children}
                </CustomSlider>
            </div>
        </div>
    )
}
