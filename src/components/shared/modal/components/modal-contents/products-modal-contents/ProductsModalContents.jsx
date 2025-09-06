import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import useAuthAxios from '@/hooks/useAuthAxios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import HorizontalCard from '../../../../horizontal-card/HorizontalCard'

export default function ProductsModalContents() {
    const [products, setProducts] = useState([])

    const user = useSelector(state => state?.user?.user);

    console.log(user, "user")

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
            <PrimaryTitle title={"Products"} />
            <div className="w-full space-y-6">
                {
                    products?.map((product, index) => (
                        <HorizontalCard key={index} item={{ id: product.id, image: product?.image, title: product?.name, text2: "100+ sold" }} />
                    ))
                }
            </div>
        </div>
    )
}
