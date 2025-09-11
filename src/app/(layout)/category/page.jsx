"use client"

import CategoryProducts from '@/components/category/category-products/CategoryProducts'
import Subcategories from '@/components/category/subcategories/Subcategories'
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
    const subcategoryId = searchParams.get('subcategory')
    const [currentCategoryId, setCurrentCategoryId] = useState(categoryId)
    const [currentSubCategory, setCurrentSubCategory] = useState(subcategoryId)
    const axios = useAxios()

    const [categories, setCategories] = useState([])
    const [subcategories, setSubcategories] = useState([])
    const [categoryProducts, setCategoryProducts] = useState([])


    useEffect(() => {
        // if user didn't comes by click category navbar
        axios.get(`/categories`).then((res) => {
            if (categoryId || subcategoryId) {
                const newCategories = res?.data?.categories?.filter(category => category?.id === parseInt(categoryId))
                setCategories(newCategories)
            } else {
                setCategories(res?.data?.categories)
            }
        })

    }, [axios])

    useEffect(() => {
        axios.get(`/categories/${currentCategoryId}/products`).then((res) => {
            setSubcategories(res?.data?.subcategories)

            if (currentSubCategory) {
                axios.get(`/products/category/${currentCategoryId}/subcategory/${currentSubCategory}`).then((res) => {
                    if (res?.data?.products?.length !== 0) {
                        setCategoryProducts(res?.data?.products)
                    }
                })
            } else {
                setCategoryProducts(res?.data?.products)
            }
        })
    }, [currentCategoryId, currentSubCategory, axios])

    const handleCategoryClick = (id) => {
        setCurrentCategoryId(id)
        const params = new URLSearchParams(searchParams.toString())
        params.set("category", id)
        router.push(`?${params.toString()}`)
    }

    return (
        <div className={`${categories?.length === 0 ? 'min-h-screen' : ''}`}>
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
                <Subcategories items={subcategories} selectedSubcategory={currentSubCategory} setSelectedSubcategory={setCurrentSubCategory} />
                {
                    categoryProducts?.length > 0 && (
                        <CategoryProducts products={categoryProducts} />
                    )
                }
            </Container>
        </div>
    )
}

