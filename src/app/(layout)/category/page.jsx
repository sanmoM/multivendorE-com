"use client"

import CategoryProducts from '@/components/category/category-products/CategoryProducts'
import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader'
import Container from '@/components/shared/container/Container'
import PrimaryCard from '@/components/shared/primary-card/PrimaryCard'
import SectionTitle from '@/components/shared/section-title/SectionTitle'
import useAxios from '@/hooks/useAxios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const categoryId = searchParams.get('category')
    const [currentId, setCurrentId] = useState(categoryId)
    const axios = useAxios()

    const [categories, setCategories] = useState([])
    const [categoryProducts, setCategoryProducts] = useState([])

    useEffect(() => {
        axios.get(`/categories`).then((res) => {
            setCategories(res?.data?.categories)
        })
    }, [axios])

    useEffect(() => {
        if (currentId) {
            axios.get(`/categories/${currentId}/products`).then((res) => {
                setCategoryProducts(res?.data?.products)
            })
        }
    }, [currentId, axios])

    const handleCategoryClick = (id) => {
        setCurrentId(id)
        const params = new URLSearchParams(searchParams.toString())
        params.set("category", id)
        router.push(`?${params.toString()}`)
    }


    return (
        <div className={`${categories.length === 0 ? 'min-h-screen' : ''}`}>
            <MobileHeader title={"Categories"} />
            <Container className={"space-y-10"}>
                <div>
                    <SectionTitle title='Main Categories' />
                    <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-x-4 lg:gap-y-8 mt-6'>
                        {
                            categories?.map((category) => (
                                <div
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category?.id)}
                                    className='cursor-pointer'
                                >
                                    <PrimaryCard item={{ image: category?.image, title: category?.categoryName, subtitle: category?.categoryDescription }} />
                                </div>
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

