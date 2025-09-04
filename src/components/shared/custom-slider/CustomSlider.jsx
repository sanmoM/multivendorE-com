// "use client";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "./custom-slider.css";

// export default function CustomSlider({
//     sliderRef,
//     children,
//     mobileView = 3,
//     desktopView = 4,
//     paddingDesktop,
//     paddingMobile,
//     autoplay = false,
// }) {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: desktopView,
//         autoplaySpeed: 2000,
//         arrows: false,
//         centerMode: true, // this option will be uncommented when we have the slider in the center
//         autoplay: autoplay,
//         centerPadding: paddingDesktop ? `${paddingDesktop}px` : "0px",
//         initialSlide: 1,
//         adaptiveHeight: true,
//         //  slidesToScroll: 5, 
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     // slidesToScroll: 5,
//                     slidesToShow: desktopView,
//                     centerMode: true,
//                     centerPadding: paddingDesktop ? `${paddingDesktop}px` : "0px",
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     // slidesToScroll: 2,
//                     slidesToShow: mobileView,
//                     centerMode: true,
//                     centerPadding: paddingMobile ? `${paddingMobile}px` : "0px",
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="w-full">
//             <Slider ref={sliderRef} {...settings}>
//                 {children}
//             </Slider>
//         </div>
//     );
// }


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
