import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import React, { useEffect, useState } from 'react'
import ModalProductCard from '../../modal-product-card/ModalProductCard';
import useAuthAxios from '@/hooks/useAuthAxios';
import useModalAction from '@/hooks/useModalAction';
import { formatDate } from '@/utils/date';

export default function OrderModalContents() {
    const { modalData } = useModalAction();
    console.log(modalData, "modalData")
    const orderDetails = {
        orderNumber: '9X2Y7Z',
        date: '15/08/23',
        itemsCount: 3,
        total: 125,
        statusPercentage: 75,
        estimatedDelivery: 'Today, 3–5 PM',
        orderItems: [
            {
                id: 1,
                vendor: 'Sweet Delights Bakery',
                product: 'Chocolate Fudge Cake',
                price: 55,
                image: '/images/product/product-1.svg',
            },
            {
                id: 2,
                vendor: 'Mom & Baby Essentials',
                product: 'Organic Baby Wipes, Diapers',
                price: 70,
                image: '/images/product/product-2.svg',
            },
        ],
        secondOrder: {
            orderNumber: '7FG9HI',
            transactionDate: '15/08/23',
            deliveryAddress: '123 Oak Street, Anytown',
        },
    };

    const axios = useAuthAxios();

    const [data, setData] = useState(orderDetails);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/customer/orders`);
                setData(res?.data?.orders);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log(data, "data")
    return (
        <div className="w-full space-y-8">

            {/* Main Order Details Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Order number</p>
                    <p className="text-primary">{modalData?.invoice_no}</p>
                </div>
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Date</p>
                    <p className="text-primary">{formatDate(modalData?.created_at)}</p>
                </div>
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Items</p>
                    <p className="text-primary">{modalData?.items?.length}</p>
                </div>
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Total</p>
                    <p className="text-primary">${modalData?.items?.reduce((acc, item) => acc + item?.total_price, 0)}</p>
                </div>
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Shipping Address</p>
                    <p className="text-primary">{modalData?.shipping_address}</p>
                </div>
            </div>

            {/* Order Status Section */}
            <div className="pt-4 space-y-2">
                <div className="flex justify-between items-center">
                    {/* <h3 className="text-xl font-medium text-primary">Order status</h3> */}
                    <SecondaryTitle title={"Order status"} className={"mb-0"} />
                    <span className=" text-primary">{orderDetails.statusPercentage}%</span>
                </div>
                <div className="w-full bg-tertiary rounded-full h-2.5">
                    <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${orderDetails.statusPercentage}%` }}
                    ></div>
                </div>
                <p className="text-sm text-secondary">Estimated delivery: {orderDetails.estimatedDelivery}</p>
            </div>

            {/* Order Items Section */}
            <div className="space-y-6 w-1/2">
                {modalData?.items?.map((item, index) => (
                    <ModalProductCard item={{ image: item?.product?.product_image, name: item?.product_name, price: item?.total_price, quantity: item?.quantity }} key={index} />
                ))}
            </div>
        </div>
    )
}
