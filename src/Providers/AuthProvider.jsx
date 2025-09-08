"use client";

import Loader from "@/components/shared/loader/Loader";
import useAuthAxios from "@/hooks/useAuthAxios";
import { setUser } from "@/lib/redux/features/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AuthProvider({ children }) {
    const dispatch = useDispatch();
    const axios = useAuthAxios();

    const { isLoading, isError, data: user } = useQuery({
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

    useEffect(() => {
        if (user) {
            dispatch(setUser(user));
        }
    }, [user]);

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="w-[25%] lg:w-[10%]">
                    <Loader />
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-red-500">Failed to fetch user info.</p>
            </div>
        );
    }

    return <>{children}</>;
}
