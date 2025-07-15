
import React from 'react';
import Link from 'next/link';

const promotions = [
    {
        id: 1,
        image: '/images/promotion1.jpg',
        message: '🎉 Big Sale! Get 10% Off Sunglasses – Use Code:',
        code: 'SALE30',
    },
    {
        id: 2,
        image: '/images/promotion2.jpg',
        message: '🎉 Big Sale! Get 30% Off Home appliances – Use Code:',
        code: 'SALE30',
    },
];

const FirstPromotion = () => {
    return (
        <section className="mt-12 px-4">
            <div className="flex flex-col lg:flex-row gap-4">
                {promotions.map((promo) => (
                    <div
                        key={promo.id}
                        className="lg:w-1/2 relative h-[100px] sm:h-[200px] md:h-[200px]"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={promo.image}
                            alt="Promotion"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 text-center p-4">
                            <p className="text-sm sm:text-base md:text-lg text-white">
                                {promo.message}{' '}
                                <span className="font-bold text-yellow-300">{promo.code}</span>
                            </p>
                            <Link
                                href="#"
                                className="mt-3 text-sm bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
                            >
                                Get Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FirstPromotion;
