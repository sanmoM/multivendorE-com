import { IMAGE_BASE_URL } from '@/config';
import useAxios from '@/hooks/useAxios';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Logo({ className }) {
    const axios = useAxios();
    const [logoUrl, setLogoUrl] = useState("");

    useEffect(() => {
        const fetchLogo = async () => {
            const res = await axios.get("/logo-footer");
            setLogoUrl(res?.data?.data?.logo);
        };
        fetchLogo();
    }, [axios]);

    return (
        <Image
            src={IMAGE_BASE_URL + logoUrl || "/images/logo.png"}
            alt="Logo"
            className={cn(className)}
            width={150}
            height={150}
        />
    )
}
