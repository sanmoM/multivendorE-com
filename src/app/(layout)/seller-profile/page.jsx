"use client";

import SellerStatistics from '@/components/seller-profile/seller-statistics/SellerStatistics';
import Card from '@/components/shared/card/Card';
import Container from '@/components/shared/container/Container';
import ItemCard from '@/components/shared/item-card/ItemCard';
import Items from '@/components/shared/items/Items';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { products } from '@/data';
import Image from 'next/image';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';

export default function page() {
    return (
        <Container>
            <div className="flex flex-col items-center text-center pb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md">
                    <Image
                        width={96}
                        height={96}
                        src="/images/seller-image.png"
                        alt="Bakery logo"
                        className="w-full h-full object-cover rounded-full"
                    // onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/96x96/E8D5C8/4A4A4A?text=Logo"; }}
                    />
                </div>
                {/* <h1 className="text-2xl font-semibold text-gray-900">Sweet Delights Bakery</h1> */}
                <PrimaryTitle title={"Sweet Delights Bakery"} className={"mb-0"} />
                <p className="text-secondary text-sm">4.8 • 1200+ ratings</p>
                <p className="text-secondary mt-1 text-xs max-w-xs">Specializing in custom cakes and pastries</p>
            </div>
            <div>
                <SectionTitle title={"About Us"} className={"mb-4"} />
                <p className="text-primary text-sm lg:text-lg">
                    Sweet Delights Bakery is a family-owned business dedicated to creating delicious and beautiful cakes for all occasions. We use only the finest ingredients and offer a wide variety of flavors and designs.
                </p>
            </div>

            <div className='space-y-4 lg:space-y-6 my-6 lg:my-12 lg:w-fit'>
                <ItemCard titleClassName={"text-xl lg:text-2xl"} subtitleClassName={"text-lg lg:text-xl"} item={{ title: "Address", icon: <IoLocationOutline className='w-6 h-6 lg:w-10 lg:h-10 text-primary' />, subtitle: "123 Main Street, Anytown", handleClick: () => { } }} />
                <ItemCard titleClassName={"text-xl lg:text-2xl"} subtitleClassName={"text-lg lg:text-xl"} item={{ title: "Phone", icon: <BsTelephone className='w-6 h-6 lg:w-10 lg:h-7 text-primary' />, subtitle: "+1 (555) 123-4567", handleClick: () => { } }} />
                <ItemCard titleClassName={"text-xl lg:text-2xl"} subtitleClassName={"text-lg lg:text-xl"} item={{ title: "Email", icon: <TfiEmail className='w-6 h-6 lg:w-10 lg:h-7 text-primary' />, subtitle: "sweetdelights@email.com", handleClick: () => { } }} />
            </div>

            <Items title={"Products"} hasLoadMoreBtn>
                {
                    products?.map((product) => (
                        <Card key={product.id} item={{ image: product?.image, name: product?.name, subtitle: `$${product?.price}` }} containerClassName={"px-2"} />
                    ))
                }
            </Items>

            <SellerStatistics />
        </Container>
    )
}
