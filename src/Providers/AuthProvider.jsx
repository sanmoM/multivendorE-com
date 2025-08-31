"use client"

import useAuthAxios from "@/hooks/useAuthAxios";
import { setUser } from "@/lib/redux/features/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const axios = useAuthAxios();

    useEffect(() => {
        const init = async () => {
            try {
                const res = await axios.get("/my-personal-info");
                dispatch(setUser(res.data?.info));
            } catch (error) {
                console.error("Error initializing:", error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [dispatch]);

    if (loading) {
        return <div className="h-screen flex items-center justify-center">
            <div className="w-[25%] lg:w-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#856161" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
            </div>
        </div>
    }
    return (
        <div>
            {children}
        </div>
    )
}