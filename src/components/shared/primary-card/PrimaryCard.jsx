import Image from "next/image";

export default function PrimaryCard({ item, containerClassName }) {
    return (
        <div className={containerClassName}>
            <Image src={item?.image} alt="product-1" width={300} height={400} />
            <h3 className="text-primary font-medium mt-4 text-sm lg:text-lg">{item?.title}</h3>
            <p className="text-secondary mt-1 text-xs lg:text-sm">{item?.subtitle}</p>
        </div>
    )
}
