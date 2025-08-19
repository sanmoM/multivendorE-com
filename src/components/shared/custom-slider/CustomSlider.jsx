"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./custom-slider.css";

export default function CustomSlider({
    sliderRef,
    children,
    mobileView = 3,
    desktopView = 4,
    paddingDesktop,
    paddingMobile,
    autoplay = false,
}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: desktopView,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        autoplay: autoplay,
        centerPadding: paddingDesktop ? `${paddingDesktop}px` : "0px",
        initialSlide: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: desktopView,
                    centerMode: true,
                    centerPadding: paddingDesktop ? `${paddingDesktop}px` : "0px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: mobileView,
                    centerMode: true,
                    centerPadding: paddingMobile ? `${paddingMobile}px` : "0px",
                },
            },
        ],
    };

    return (
        <div className="w-full">
            <Slider ref={sliderRef} {...settings}>
                {children}
            </Slider>
        </div>
    );
}
