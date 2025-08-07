import Image from 'next/image';
import React, { useState } from 'react';
import ModalProductCard from '../../../../modal-product-card/ModalProductCard';
import { GoArrowRight } from 'react-icons/go';
import TabButton from '@/components/shared/tab-button/TabButton';

const MyOrderModalContents = () => {
    const [activeTab, setActiveTab] = useState('delivered');

    const orders = {
        delivered: [
            {
                orderNumber: '789012',
                orderDate: '12/11/23',
                total: 55,
                image: '/images/product/product-1.svg',
            },
            {
                orderNumber: '345678',
                orderDate: '05/10/23',
                total: 30,
                image: '/images/product/product-2.svg',
            },
            {
                orderNumber: '901234',
                orderDate: '20/09/23',
                total: 45,
                image: '/images/product/product-3.svg',
            },
            {
                orderNumber: '567890',
                orderDate: '15/08/23',
                total: 20,
                image: '/images/product/product-4.svg',
            },
        ],
        cancelled: [
            // Placeholder data for cancelled orders
            {
                orderNumber: '112233',
                orderDate: '01/01/23',
                total: 15,
                image: '/images/product/product-5.svg',
            },
        ],
    };

    const arrowIcon = (
        <GoArrowRight className="h-5 w-5 text-primary" />
    );

    return (
        <div className=" w-full space-y-6">

            {/* Tabs Section */}
            <div className="flex justify-around items-center border-b border-gray-200 mb-6">
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'delivered'} className={"text-lg"} value={"delivered"} />
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'cancelled'} className={"text-lg"} value={"cancelled"} />
            </div>

            {/* Order List Section */}
            <div className="space-y-6">
                {orders[activeTab]?.map((order, index) => (
                    <div key={index} className="flex items-center justify-between cursor-pointer">
                        {/* <div className="flex items-center space-x-4">
                            <Image
                                src={order.image}
                                alt={`Order ${order.orderNumber}`}
                                className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/E0E0E0/808080?text=Item"; }}
                                width={64}
                                height={64}
                            />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">
                                    Order number: {order.orderNumber}
                                </p>
                                <p className="text-sm text-gray-500">Order date: {order.orderDate}</p>
                                <p className="text-sm font-semibold text-gray-800">Total: ${order.total}</p>
                            </div>
                        </div> */}
                        <ModalProductCard item={{ image: order.image, name: `Order ${order.orderNumber}`, price: order.total, quantity: order.orderNumber }} />
                        {arrowIcon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrderModalContents;
