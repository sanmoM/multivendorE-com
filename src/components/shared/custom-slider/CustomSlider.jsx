
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./custom-slider.css";

export default function CustomSlider({ children, mobileView = 3, desktopView = 4, paddingDesktop, paddingMobile }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: desktopView,
        slidesToScroll: 2,
        arrows: false,
        centerMode: true,
        centerPadding: paddingDesktop || 0, // adjust this for half visibility
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: desktopView,
                    centerMode: true,
                    centerPadding: paddingDesktop || 0,
                },
            },
            // {
            //     breakpoint: 768,
            //     settings: {
            //         slidesToShow: 2,
            //         centerMode: true,
            //         centerPadding: "30px",
            //     },
            // },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: mobileView,
                    centerMode: true,
                    centerPadding: paddingMobile || 0,
                },
            },
        ],
    };
    return (
        // <div className="rounded-lg  mt-6 md:mt-8 max-w-[calc(1280px+1rem)] mx-auto hidden lg:block">
        <Slider {...settings}>
            {children}
        </Slider>
        // </div>
    );
}