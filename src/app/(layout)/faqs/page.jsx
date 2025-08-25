"use client";

import FaqCard from '@/components/faq/faq-card/FaqCard';
import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import useAxios from '@/hooks/useAxios';
import { useEffect, useState } from 'react';

const FaqAccordion = () => {
    // Sample data for the FAQs. This can be replaced with data from an API or a CMS.
    const [faq, setFaq] = useState([]);

    const axios = useAxios()

    useEffect(() => {
        axios.get("/faq").then((res) => {
            setFaq(res?.data?.data);
        });
    }, [axios])

    console.log(faq)
    return (
        <section className="">
            <MobileHeader title={"FAQs"} containerClassName={"mb-6"} />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:my-12">
                <div className="mb-6 lg:mb-10 text-center">
                    <h6 className="text-lg text-secondary font-medium mb-2">FAQs</h6>
                    <SectionTitle title={"Frequently Asked Questions"} className={"mb-4"} />
                </div>

                <div className="accordion-group space-y-6">
                    {faq.map((faq, index) => (
                        <FaqCard
                            key={index}
                            item={faq}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqAccordion;
