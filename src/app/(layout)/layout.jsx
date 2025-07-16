import Footer from '@/components/root-layout/footer/Footer'
import Header from '@/components/root-layout/header/Header'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
