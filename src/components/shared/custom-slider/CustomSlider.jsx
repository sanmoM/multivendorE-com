
// "use client";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "./custom-slider.css";
// import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

// export default function CustomSlider({ children, mobileView = 3, desktopView = 4, paddingDesktop, paddingMobile, autoplay = false, bottomArrows = false }) {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: desktopView,
//         slidesToScroll: 2,
//         autoplaySpeed: 2000,
//         arrows: false,
//         centerMode: true,
//         autoplay: autoplay,
//         centerPadding: paddingDesktop || 0, // adjust this for half visibility
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: desktopView,
//                     centerMode: true,
//                     centerPadding: paddingDesktop || 0,
//                 },
//             },
//             // {
//             //     breakpoint: 768,
//             //     settings: {
//             //         slidesToShow: 2,
//             //         centerMode: true,
//             //         centerPadding: "30px",
//             //     },
//             // },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: mobileView,
//                     centerMode: true,
//                     centerPadding: paddingMobile || 0,
//                 },
//             },
//         ],
//     };
//     return (
//         <div>
//             <Slider {...settings}>
//                 {children}
//             </Slider>
//             {
//                 bottomArrows && <div className="flex gap-4 justify-center">
//                     <button className="bg-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-300" onClick={() => settings.currentSlide -= 1}>
//                         <IoChevronBackOutline className="h-6 w-6" />
//                     </button>
//                     <button className="bg-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-300" onClick={() => settings.currentSlide += 1}>
//                         <IoChevronForwardOutline className="h-6 w-6" />
//                     </button>
//                 </div>
//             }
//         </div>
//     );
// }



"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./custom-slider.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useRef } from "react";

export default function CustomSlider({
    ref,
    children,
    mobileView = 3,
    desktopView = 4,
    paddingDesktop,
    paddingMobile,
    autoplay = false,
    bottomArrows = false,
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
        centerPadding: paddingDesktop || 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: desktopView,
                    centerMode: true,
                    centerPadding: paddingDesktop || 0,
                },
            },
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
        <Slider ref={ref} {...settings}>
            {children}
        </Slider>
    );
}
