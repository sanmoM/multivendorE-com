"use client";

import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import React, { useState } from 'react';

// This is the main component for the entire FAQ section.
// It manages the state of which accordion item is currently open.
const FaqAccordion = () => {
    // Sample data for the FAQs. This can be replaced with data from an API or a CMS.
    const faqData = [
        {
            question: "How do I update my billing information?",
            answer: "You can update your billing information by navigating to your account settings and selecting the 'Billing' tab. From there, you will see an option to edit your payment methods and billing address."
        },
        {
            question: "How can I contact customer support?",
            answer: "To contact customer support, look for a 'Contact Us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance."
        },
        {
            question: "How do I update my profile information?",
            answer: "You can update your profile information in your account dashboard. Look for a 'Profile' or 'Account Settings' section where you can edit details like your name, email, and password."
        },
        {
            question: "How do I find my purchase history?",
            answer: "Your purchase history is available in the 'Orders' or 'History' section of your account. You can view all past transactions and invoices there."
        }
    ];

    // State to manage the index of the currently open FAQ item.
    // Using `null` means no item is open by default.
    const [openIndex, setOpenIndex] = useState(0);

    // Function to toggle an FAQ item's open/closed state.
    const handleToggle = (index) => {
        // If the clicked item is already open, close it. Otherwise, open the clicked item.
        setOpenIndex(openIndex === index ? null : index);
    };

    // A sub-component to render a single FAQ item.
    const FaqItem = ({ faq, index, isOpen, onToggle }) => {
        return (
            <div
                className={`accordion py-8 px-6 border border-solid !border-secondary transition-all duration-500 rounded-2xl ${isOpen ? 'bg-tertiary' : 'hover:bg-tertiary'
                    }`}
            >
                <button
                    onClick={() => onToggle(index)}
                    className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-primary w-full transition duration-500 text-left ${isOpen ? 'font-medium text-secondary' : 'hover:text-secondary'
                        }`}
                >
                    <h5>{faq.question}</h5>
                    <svg
                        className={`text-secondary transition duration-500 group-hover:text-secondary ${isOpen ? 'text-secondary rotate-180' : ''
                            }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                        }`}
                >
                    <p className="text-base text-gray-500 leading-6">{faq.answer}</p>
                </div>
            </div>
        );
    };

    return (
        <section className="">
            <MobileHeader title={"FAQs"} containerClassName={"mb-6"} />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:my-12">
                <div className="mb-6 lg:mb-10 text-center">
                    <h6 className="text-lg text-secondary font-medium mb-2">FAQs</h6>
                    <SectionTitle title={"Frequently Asked Questions"} className={"mb-4"} />
                </div>

                <div className="accordion-group space-y-6">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqAccordion;
