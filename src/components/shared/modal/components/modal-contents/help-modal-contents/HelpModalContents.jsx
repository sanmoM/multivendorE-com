"use client";

import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useModalAction from '@/hooks/useModalAction';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const HelpModalContents = () => {
    const { handleCloseAllModals } = useModalAction();
    const menuSections = [
        {
            title: 'How can we help?',
            items: [
                {
                    label: 'FAQs',
                    href: '/faqs',
                },
                {
                    label: 'Contact Us',
                    href: '/contact-us',
                },
                {
                    label: 'Live Chat',
                    href: '/ticket',
                },
            ],
        },
        {
            title: 'Resources',
            items: [
                {
                    label: 'Shipping & Delivery',
                    href: '/shipping-and-delivery'
                },
                {
                    label: 'Returns & Refunds',
                    href: '/returns-and-refunds'
                },
            ],
        },
    ];

    const arrowIcon = (
        <GoArrowRight className="h-5 w-5 text-primary" />
    );

    return (
        <div className="bg-white w-full space-y-8">
            {menuSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3> */}
                    <PrimaryTitle title={section.title} />
                    <div className="space-y-6 my-6 lg:my-10 lg:space-y-8">
                        {section.items.map((item, itemIndex) => (
                            <Link key={itemIndex} href={item?.href || "#"} className='block' onClick={() => handleCloseAllModals()}>
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                >
                                    <p className="text-lg text-gray-800">{item.label}</p>
                                    {arrowIcon}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HelpModalContents;
