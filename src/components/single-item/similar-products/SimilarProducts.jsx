import CustomSlider from '@/components/shared/custom-slider/CustomSlider'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import Image from 'next/image';
import React from 'react'


const sliderItems = [
    {
        id: 1,
        title: 'Chocolate Fudge Cake',
        price: 30,
        image: '/images/product/product-1.svg',
    },
    {
        id: 2,
        title: 'Chocolate Fudge Cake',
        price: 30,
        image: '/images/product/product-2.svg',
    },
    {
        id: 3,
        title: 'Chocolate Fudge Cake',
        price: 30,
        image: '/images/product/product-3.svg',
    },
    {
        id: 1,
        title: 'Pink Cake',
        price: 30,
        image: '/images/product/product-4.svg',
    },
    {
        id: 2,
        title: 'Pink Cake',
        price: 30,
        image: '/images/product/product-5.svg',
    },
    {
        id: 3,
        title: 'Pink Cake',
        price: 30,
        image: '/images/product/product-6.svg',
    },
];


export default function SimilarProducts() {
    return (
        <div className='mt-8'>
            <PrimaryTitle title={"Similar Products"} className={"mb-6"} />
            <CustomSlider desktopView={5.5} mobileView={2.5}>
                {
                    sliderItems.map((item, index) => (
                        <div key={index} className="px-2 outline-0">
                            <Image
                                src={item.image}
                                alt={`Discount ${item}`}
                                height={400}
                                width={400}
                                className="w-full h-auto rounded-lg aspect-square object-cover"
                            />
                            <p className="text-primary font-medium mt-2">{item.title}</p>
                            <p className="text-secondary font-medium">${item.price}</p>
                        </div>
                    ))
                }
            </CustomSlider>
        </div>
    )
}
