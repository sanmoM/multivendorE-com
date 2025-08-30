"use client";

import HeaderTitle from "@/components/root-layout/header/components/header-title/HeaderTitle";
import BackBtn from "@/components/shared/back-btn/BackBtn";
import { cn } from "@/utils/cn";
import { usePathname, useRouter } from "next/navigation";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function MobileHeader({ title, containerClassName }) {
  const router = useRouter();
  const pathName = usePathname();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={cn("lg:hidden", containerClassName)}>
      <div className="container mx-auto px-4 pt-3 flex items-center justify-between">
        {
          pathName !== "/" ? (
            <BackBtn handleBack={handleBack} />
          ) : <></>
        }
        <HeaderTitle title={title} />
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
          <IoMdNotificationsOutline className="w-6 h-6 text-primary" />
        </button>
      </div>
    </div>
  );
}
