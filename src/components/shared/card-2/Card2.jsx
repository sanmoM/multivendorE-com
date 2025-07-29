import Card from "@/components/shared/card/Card";

export default function Card2({ item, containerClassName }) {
    return (
        <div className={containerClassName}>
            <Card item={{ image: item?.image, name: item?.name }} />
            <p className="text-secondary mt-1 text-xs lg:text-sm">{item?.subtitle}</p>
        </div>
    )
}
