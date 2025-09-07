"use client";

import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/redux/features/userSlice";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect } from "react";
import Loader from "@/components/shared/loader/Loader";

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
                    <Loader />
                </div>
            </div>
        );
    }


    return <>{children}</>;
}
