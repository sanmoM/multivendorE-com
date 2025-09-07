import NoDataText from '@/components/shared/no-data-text/NoDataText';
import TabButton from '@/components/shared/tab-button/TabButton';
import useAuthAxios from '@/hooks/useAuthAxios';
import useModalAction from '@/hooks/useModalAction';
import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

const MyOrderModalContents = () => {
    const {  handleOpenModal, setNextModalData } = useModalAction();
    const [activeTab, setActiveTab] = useState('pending');

    const axios = useAuthAxios();

    const [data, setData] = useState([]);

    const pendingOrders = data?.filter((order) => order?.order_status === 0);
    const deliveredOrders = data?.filter((order) => order?.order_status === 1);
    const cancelledOrders = data?.filter((order) => order?.order_status === 2);


    const orders = {
        pending: pendingOrders,
        delivered: deliveredOrders,
        cancelled: cancelledOrders,
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/customer/orders`);
                setData(res?.data?.orders);
            } catch (error) {
                console.log(error);
            } finally {
                // setIsLoading(false);
            }
        };
        fetchData();
    }, []);


    const arrowIcon = (
        <GoArrowRight className="h-5 w-5 text-primary" />
    );

    return (
        <div className=" w-full space-y-6">

            {/* Tabs Section */}
            <div className="flex justify-around items-center border-b border-gray-200 mb-6">
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'Pending'} className={"text-lg"} value={"pending"} />
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'delivered'} className={"text-lg"} value={"delivered"} />
                <TabButton activeTab={activeTab} setActiveTab={setActiveTab} text={'cancelled'} className={"text-lg"} value={"cancelled"} />
            </div>

            {/* Order List Section */}
            <div className="space-y-6">
                {
                    orders[activeTab]?.length === 0 ? <NoDataText text={"No Orders Yet"} /> : (
                        <>
                            {orders[activeTab]?.map((order, index) => (
                                <div key={index} className="flex items-center justify-between cursor-pointer"

                                    onClick={() => {
                                        handleOpenModal("order-modal")
                                        setNextModalData(order)
                                    }}
                                >
                                    <div>
                                        <h4 className="font-semibold text-primary text-nowrap">Order No: {order?.invoice_no}</h4>
                                        <p className="text-secondary text-nowrap">Amount: {order?.total_amount}</p>
                                        {/* <p className=" text-secondary text-nowrap">Price: ${order?.price}</p> */}
                                        <p className="text-secondary text-nowrap">Address: {order?.shipping_address}</p>
                                    </div>
                                    {arrowIcon}
                                </div>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrderModalContents;
