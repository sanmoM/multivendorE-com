"use client";

import NoDataText from '@/components/shared/no-data-text/NoDataText';
import TabButton from '@/components/shared/tab-button/TabButton';
import useAuthAxios from '@/hooks/useAuthAxios';
import useModalAction from '@/hooks/useModalAction';
import { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useQuery } from '@tanstack/react-query';

const SellerOrderModalContents = () => {
    const { handleOpenModal, setNextModalData } = useModalAction();
    const [activeTab, setActiveTab] = useState('pending');

    const axios = useAuthAxios();

    // 🚀 Fetch orders via React Query
    const { data: orders = [], isLoading, isError } = useQuery({
        queryKey: ["seller-orders"],
        queryFn: async () => {
            const [pendingRes, deliveredRes, cancelledRes] = await Promise.all([
                axios.get("/reseller-product-order-history"),
                axios.get("/reseller-product-order-history"),
                axios.get("/reseller-product-reject-history"),
            ]);


            return {
                pending: pendingRes?.data?.items || [],
                delivered: deliveredRes?.data?.items || [],
                cancelled: cancelledRes?.data?.items || [],
            };
        },
    });

    const arrowIcon = <GoArrowRight className="h-5 w-5 text-primary" />;

    if (isLoading) {
        return <p className="text-center text-secondary">Loading orders...</p>;
    }

    if (isError) {
        return <p className="text-center text-red-500">Failed to load orders.</p>;
    }

    return (
        <div className=" w-full space-y-6">

            {/* Tabs Section */}
            <div className="flex justify-around items-center border-b border-gray-200 mb-6">
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'Pending'} className={"text-lg"} value={"pending"} />
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'Delivered'} className={"text-lg"} value={"delivered"} />
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'Cancelled'} className={"text-lg"} value={"cancelled"} />
            </div>

            {/* Order List Section */}
            <div className="space-y-6">
                {orders[activeTab]?.length === 0 ? (
                    <NoDataText text={"No Orders Yet"} />
                ) : (
                    <>
                        {orders[activeTab]?.map((order, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => {
                                    handleOpenModal("order-modal");
                                    setNextModalData(order);
                                }}
                            >
                                <div>
                                    <h4 className="font-semibold text-primary text-nowrap">
                                        Order No: {order?.invoice_no}
                                    </h4>
                                    <p className="text-secondary text-nowrap">
                                        Amount: {order?.total_amount}
                                    </p>
                                    <p className="text-secondary text-nowrap">
                                        Address: {order?.shipping_address}
                                    </p>
                                </div>
                                {arrowIcon}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default SellerOrderModalContents;
