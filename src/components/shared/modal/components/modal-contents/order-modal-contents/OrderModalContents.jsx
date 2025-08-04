import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import React from 'react'
import ModalProductCard from '../../modal-product-card/ModalProductCard';

export default function OrderModalContents() {
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
    return (
        <div className="min-w-sm w-full space-y-8">

            {/* Main Order Details Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Order number</p>
                    <p className="text-primary">{orderDetails.orderNumber}</p>
                </div>
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Date</p>
                    <p className="text-primary">{orderDetails.date}</p>
                </div>
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Items</p>
                    <p className="text-primary">{orderDetails.itemsCount}</p>
                </div>
                <div className="flex justify-between items-center text-primary">
                    <p className='text-secondary'>Total</p>
                    <p className="text-primary">${orderDetails.total}</p>
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
            <div className="space-y-6">
                {orderDetails.orderItems.map(item => (
                    <ModalProductCard item={{ image: item.image, name: item.product, price: item.price, quantity: item.product }} />
                ))}
            </div>

            {/* Second Order Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-700">
                    <p className='text-secondary font-medium'>Order number</p>
                    <p className="text-primary">{orderDetails.secondOrder.transactionDate}</p>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                    <p className='text-secondary font-medium'>Transaction Date</p>
                    <p className="text-primary">{orderDetails.secondOrder.transactionDate}</p>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                    <p className='text-secondary font-medium'>Delivery Address</p>
                    <p className="text-primary">{orderDetails.secondOrder.deliveryAddress}</p>
                </div>
            </div>
        </div>
    )
}
