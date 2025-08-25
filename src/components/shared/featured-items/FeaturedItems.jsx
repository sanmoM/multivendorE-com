"use client";

import SectionTitle from "@/components/shared/section-title/SectionTitle";
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
