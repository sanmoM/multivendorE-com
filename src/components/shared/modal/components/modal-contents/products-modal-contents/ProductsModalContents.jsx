import NoDataText from '@/components/shared/no-data-text/NoDataText'
import Tabs from '@/components/shared/Tabs/Tabs'
import useAuthAxios from '@/hooks/useAuthAxios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import HorizontalCard from '../../../../horizontal-card/HorizontalCard'



export default function ProductsModalContents() {
    const user = useSelector(state => state?.user?.user);
    const [activeTab, setActiveTab] = useState('pending');
    const [products, setProducts] = useState({
        pending: Array(5).fill(null),
        approved: Array(5).fill(null),
        rejected: Array(5).fill(null),
    })
    const [isLoading, setIsLoading] = useState(true)

    const currentProducts = products[activeTab]


    const tabs = [
        { label: 'Pending', value: 'pending', onClick: () => setActiveTab('pending') },
        { label: 'Approved', value: 'approved', onClick: () => setActiveTab('approved') },
        { label: 'Rejected', value: 'rejected', onClick: () => setActiveTab('rejected') },
    ]



    const axios = useAuthAxios()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [pendingProducts, approvedProducts, rejectedProducts] = await Promise.all([
                    axios.get(`/reseller-pending-products/show`),
                    axios.get(`/reseller-generalproducts/show`),
                    axios.get(`/reseller-reject-products/show`),
                ])
                setProducts({
                    pending: pendingProducts?.data?.products,
                    approved: approvedProducts?.data?.products,
                    rejected: rejectedProducts?.data?.products,
                })
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [user?.id])


    return (
        <div>
            <div className="w-full space-y-6">
                {
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
                }
                {
                    currentProducts?.length > 0 ? currentProducts?.map((product, index) => (
                        <HorizontalCard key={index} item={{ id: product?.id, image: product?.image, title: product?.name, text2: `${product?.stock} in Stock` }} isLoading={isLoading} />
                    )) : <NoDataText text={"No Products Found"} />
                }
            </div>
        </div>
    )
}
