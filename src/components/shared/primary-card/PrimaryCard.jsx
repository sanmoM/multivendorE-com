import { IMAGE_BASE_URL } from "@/config";
import Image from "next/image";

export default function PrimaryCard({ item, containerClassName }) {
    return (
        <div className={containerClassName}>
            <Image src={IMAGE_BASE_URL + item?.image} alt="product-1" width={300} height={400} className="w-full aspect-square object-cover rounded-lg" />
            <h3 className="text-primary font-medium mt-4 text-sm lg:text-lg">{item?.title?.slice(0, 20)}</h3>
            <p className="text-secondary mt-1 text-xs lg:text-sm">{item?.subtitle?.slice(0, 30)?.concat('...')}</p>
        </div>
    )
}
