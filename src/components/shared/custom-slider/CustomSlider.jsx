


"use client"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./custom-slider.css";

export default function App({ children = [], mobileView = 3, desktopView = 6, }) {
    return (
        <>
            <Swiper className="mySwiper"
                breakpoints={{
                    375: { // >= 640px (sm)
                        slidesPerView: mobileView,
                    },
                    1024: { // >= 1024px (lg)
                        slidesPerView: desktopView,
                    },
                }}
            >
                {
                    Array?.from(children)?.map((child, index) => {
                        return <SwiperSlide key={index}>{child}</SwiperSlide>
                    })
                }
            </Swiper>
        </>
    );
}
