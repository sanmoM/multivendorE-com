"use client";

import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/redux/features/userSlice";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect } from "react";

export default function AuthProvider({ children }) {
    const dispatch = useDispatch();
    const axios = useAuthAxios();

    const {
        data,
        isLoading,
    } = useQuery({
        queryKey: ["personal-info"],
        queryFn: async () => {
            const res = await axios.get("/my-personal-info");
            return res.data?.info;
        },
        enabled: !!axios,
        staleTime: 0,
        cacheTime: 0,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        retry: false,
    });

    // 🧠 Optional: useEffect is still safe to keep if you want redundancy
    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data, dispatch]);

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="w-[25%] lg:w-[10%]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
                        <path
                            fill="none"
                            stroke="#856161"
                            strokeWidth="15"
                            strokeLinecap="round"
                            strokeDasharray="300 385"
                            strokeDashoffset="0"
                            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
                        >
                            <animate
                                attributeName="stroke-dashoffset"
                                calcMode="spline"
                                dur="2"
                                values="685;-685"
                                keySplines="0 0 1 1"
                                repeatCount="indefinite"
                            />
                        </path>
                    </svg>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
