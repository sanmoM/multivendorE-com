
import CustomSlider from "@/components/shared/custom-slider/CustomSlider";
import { IMAGE_BASE_URL } from "@/config";
import { getData } from "@/utils/fetch";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default async function PromotionalSection() {
    const { offer } = await getData("/vendor-slider", {
        cache: "no-store",
    })
    return (
        <div className="rounded-lg  mt-6 md:mt-8 max-w-[calc(1280px+1rem)] mx-auto hidden lg:block">
            <CustomSlider>
                {
                    offer?.map((item, index) => (
                        <div key={index} className="px-2 outline-0">
                            <Image
                                src={IMAGE_BASE_URL + item?.image}
                                alt={`Discount ${item}`}
                                height={400}
                                width={400}
                                className="w-full h-auto rounded-lg aspect-[2/1] object-cover"
                            />
                            <p className="text-primary font-medium mt-4">{`${parseInt(item.offer_percentage)} % off on ${item.name}`}</p>
                        </div>
                    ))
                }
            </CustomSlider>
        </div>
    );
}