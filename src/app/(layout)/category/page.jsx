"use client"

import CategoryProducts from '@/components/category/category-products/CategoryProducts'
import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader'
import Card from '@/components/shared/card/Card'
import Container from '@/components/shared/container/Container'
import SectionTitle from '@/components/shared/section-title/SectionTitle'
import { categories } from '@/data'
import useAxios from '@/hooks/useAxios'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function page() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const axios = useAxios();

    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        if (category) {
            axios.get(`/categories/${category}/products`).then((res) => {
                setCategoryProducts(res?.data?.products);
            });
        }
    }, [category, axios]);

    console.log(categoryProducts)
    return (
        <div>
            <MobileHeader title={"Categories"} />
            <Container className={"space-y-10"}>
                <div className=''>
                    <SectionTitle title='Main Categories' />
                    <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-x-4 lg:gap-y-8 mt-6'>
                        {
                            categories.map((category) => (
                                <Card key={category.id} item={{ image: category?.image, name: category?.title }} />
                            ))
                        }
                    </div>
                </div>
                {
                    categoryProducts.length > 0 && (
                        <CategoryProducts products={categoryProducts} />
                    )
                }
            </Container>
        </div>
    )
}
