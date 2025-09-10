"use client";

import Loader from '@/components/shared/loader/Loader';
import { setToken } from '@/utils/set-token';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();

    useEffect(() => {
        setToken(token)
        router.replace("/")
    }, []);
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[25%] lg:w-[10%]">
                {
                    loading ? <Loader /> : <h1 className="text-primary">Google Sign In Success</h1>
                }
            </div>
        </div>
    )
}
