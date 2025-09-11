import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'
import SecondaryButton from '../../../../../shared/secondary-button/SecondaryButton'
import { useRouter } from 'next/navigation'

export default function FoodTabContents() {
  const [categories, setCategories] = useState(Array(5).fill(null))
  const [isLoading, setIsLoading] = useState(true)
  const axios = useAxios()
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/categories/3/products')
      setCategories(res?.data?.subcategories)
      setIsLoading(false)
    }
    fetchData()
  }, [])
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
      {
        categories.map((category, index) => (
          <SecondaryButton text={category} key={index} isLoading={isLoading} onClick={() => { router.push(`/category?category=3&subcategory=${category}`) }} />
        ))
      }
    </div>
  )
}
