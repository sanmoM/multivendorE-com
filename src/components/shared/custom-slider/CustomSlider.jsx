
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./custom-slider.css";

export default function CustomSlider({ children, mobileView=3, desktopView=4 }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: desktopView, // show 4 slides
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: desktopView,
                },
            },
            // {
            //     breakpoint: 768,
            //     settings: {
            //         slidesToShow: 2,
            //     },
            // },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: mobileView,
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