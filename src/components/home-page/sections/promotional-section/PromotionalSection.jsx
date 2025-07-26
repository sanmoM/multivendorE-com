
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./promotional-section.css";

const sliderItems = [
    {
        id: 1,
        title: '25% off on electronics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        image: '/images/home/slider/slider-1.svg',
    },
    {
        id: 2,
        title: '20% off on fashion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        image: '/images/home/slider/slider-2.svg',
    },
    {
        id: 3,
        title: '15% off on food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        image: '/images/home/slider/slider-3.svg',
    },
    {
        id: 4,
        title: '10% off on cake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        image: '/images/home/slider/slider-4.svg',
    },
];

export default function PromotionalSection() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // show 4 slides
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="rounded-lg  mt-6 md:mt-8 max-w-[calc(1280px+1rem)] mx-auto hidden lg:block">
            <Slider {...settings}>
                {
                    sliderItems.map((item, index) => (
                        <div key={index} className="px-2 outline-0">
                            <Image
                                src={item.image}
                                alt={`Discount ${item}`}
                                height={400}
                                width={400}
                                className="w-full h-auto rounded-lg aspect-[2/1] object-cover"
                            />
                            <p className="text-primary font-medium mt-4">{item.title}</p>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}