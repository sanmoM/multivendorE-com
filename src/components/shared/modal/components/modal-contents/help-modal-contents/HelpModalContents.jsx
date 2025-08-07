import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const HelpModalContents = () => {
    const menuSections = [
        {
            title: 'How can we help?',
            items: [
                {
                    label: 'FAQs',
                },
                {
                    label: 'Contact Us',
                },
                {
                    label: 'Live Chat',
                },
            ],
        },
        {
            title: 'Resources',
            items: [
                {
                    label: 'Shipping & Delivery',
                },
                {
                    label: 'Returns & Refunds',
                },
                {
                    label: 'Payment Methods',
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
                            <div
                                key={itemIndex}
                                className="flex items-center justify-between cursor-pointer"
                            >
                                <p className="text-lg text-gray-800">{item.label}</p>
                                {arrowIcon}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HelpModalContents;
