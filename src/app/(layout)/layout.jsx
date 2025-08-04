"use client";

import Footer from '@/components/root-layout/footer/Footer';
import Header from '@/components/root-layout/header/Header';

export default function layout({ children }) {


    return (
        <div className='pb-[73.5px] lg:pb-0'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}




