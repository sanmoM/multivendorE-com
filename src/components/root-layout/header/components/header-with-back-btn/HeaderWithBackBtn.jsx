"use client";

import BackBtn from '@/components/shared/back-btn/BackBtn';
import HeaderTitle from '@/components/root-layout/header/components/header-title/HeaderTitle';
import { useRouter } from 'next/navigation';

export default function HeaderWithBackBtn() {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    return (
        <div className='lg:hidden pt-10'>
            <BackBtn className={"absolute top-10 left-3"} handleBack={handleBack} />
            <HeaderTitle title='Category' className={"text-center"} />
        </div>
    )
}
