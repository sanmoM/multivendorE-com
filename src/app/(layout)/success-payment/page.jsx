"use client"

import Button from '@/components/shared/button/Button';
import { removeAllFromCart } from '@/lib/redux/features/cartSlice';
import { setCheckoutItems } from '@/lib/redux/features/checkoutSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function page() {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCheckoutItems([]));
        dispatch(removeAllFromCart())
    }, [])
    return (
        <div className="bg-white rounded-3xl p-8 w-full text-center transform transition-all duration-500 ease-in-out h-[calc(100vh-136px)] flex items-center justify-center">
            <div className='max-w-lg w-full'>
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full transition-all duration-500 ease-in-out hover:bg-green-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-green-500 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2 font-sans">Payment Successful!</h1>
                <p className="text-gray-600 mb-6 text-base font-medium">
                    Thank you for your purchase. Your order is confirmed and will be processed shortly.
                </p>
                <Button text="Go to Home" className="bg-red-500 text-white w-full mt-4" onClick={() => router.push('/')} />
            </div>
        </div>
    )
}
