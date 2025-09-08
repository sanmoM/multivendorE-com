import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import useAuthAxios from '@/hooks/useAuthAxios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import HorizontalCard from '../../../../horizontal-card/HorizontalCard'
import NoDataText from '@/components/shared/no-data-text/NoDataText'

export default function ProductsModalContents() {
    const [products, setProducts] = useState([])

    const user = useSelector(state => state?.user?.user);


    const axios = useAuthAxios()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/reseller/products/show/${user?.id}`)
                setProducts(res?.data?.data)
            } catch (error) {
                console.log(error)
            } finally {
                // setIsLoading(false)
            }
        }
        fetchData()
    }, [user?.id])

    return (
        <div>
            <div className="w-full space-y-6">
                {
                    products?.length > 0 ? products?.map((product, index) => (
                        <HorizontalCard key={index} item={{ id: product.id, image: product?.image, title: product?.name, text2: "100+ sold" }} />
                    )) : <NoDataText text={"No Products Found"} />
                }
            </div>
        </div>
    )
}
