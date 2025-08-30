"use client";

import SectionTitle from "@/components/shared/section-title/SectionTitle";
import { useEffect, useState } from "react";
import CustomSlider from "../custom-slider/CustomSlider";


export default function FeaturedItems({ title, desktopView, mobileView, children }) {
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
