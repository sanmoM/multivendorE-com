import Card from "@/components/shared/card/Card";

export default function Card2({ item }) {
    return (
        <div>
            <Card item={{ image: item?.image, name: item?.name }} />
            <p className="text-secondary mt-1 text-xs lg:text-sm">{item?.subtitle}</p>
        </div>
    )
}
