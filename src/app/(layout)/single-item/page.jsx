"use client";

import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
import Button from '@/components/shared/button/Button';
import SecondaryContainer from '@/components/shared/container/SecondaryContainer';
import Modal from '@/components/shared/modal/Modal';
import AddReview from '@/components/single-item/add-review/AddReview';
import CakeOptions from '@/components/single-item/cake-options/CakeOptions';
import CustomOrderModalContents from '@/components/single-item/custom-order/CustomOrder';
import CustomerReviews from '@/components/single-item/customer-reviews/CustomerReviews';
import DeliveryOptions from '@/components/single-item/delivery-options/DeliveryOptions';
import PaymentMethods from '@/components/single-item/payment-methods/PaymentMethods';
import ProductInfo from '@/components/single-item/product-info/ProductInfo';
import ProductOptions from '@/components/single-item/product-options/ProductOptions';
import Reviews from '@/components/single-item/reviws/Reviews';
import SellerInfo from '@/components/single-item/shared/seller-info/SellerInfo';
import SimilarProducts from '@/components/single-item/similar-products/SimilarProducts';
import SingleItemTabs from '@/components/single-item/single-item-tabs/SingleItemTabs';
import useAxios from '@/hooks/useAxios';
import useModalAction from '@/hooks/useModalAction';
import { addToCart } from '@/lib/redux/features/cartSlice';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const id = searchParams.get('id');
    const dispatch = useDispatch();

    // this is cart item
    const [cartItem, setCartItem] = useState(null);

    const [data, setData] = useState(null);
    const axios = useAxios();


    const { currentModal, handleCloseModal, handleOpenModal } = useModalAction();
    const handleCustomOrderModal = () => {
        handleOpenModal("custom-order-modal")
    }

    const handlePlaceOrder = () => {
        handleOpenModal("checkout-modal")
    }

    useEffect(() => {
        axios.get(`/item-details/${type}/${id}`).then((res) => {
            setData(res?.data?.data);
        });
    }, [axios]);

    const handleAddToCart = () => {
        // make item for cart based on product type
        const item = data?.type === "product" ?
            {
                ...cartItem,
                id,
                name: data?.name,
                price: data?.regular_price,
                image: data?.product_image,
                type: data?.type,
            }
            :
            {
                ...cartItem,
                id,
                name: data?.cake_name,
                price: data?.regular_price,
                image: data?.image,
                type: data?.type,
            }

        dispatch(addToCart(item));
        setCartItem(null);
        handleOpenModal("cart-modal");
    }

    return (
        <div className='my-6 lg:my-10'>
            <MobileHeader title={"Single Item"} containerClassName={"mb-6"} />
            <SecondaryContainer className={"overflow-hidden"}>

                <ProductInfo data={data} />

                {/* Add to Cart and Buy Now buttons */}
                <div className='space-x-4'>
                    <Button text="Add to Cart" onClick={handleAddToCart} />
                    <Button text="Buy Now" className={"bg-tertiary"} /> <br />
                </div>
                <SellerInfo className="lg:hidden" handleCustomOrderModal={handleCustomOrderModal} data={{ rating: data?.average_rating }} />

                {/* tabs */}
                <SingleItemTabs description={data?.description || data?.full_description} />
                {
                    data?.type === "product" ? <CakeOptions data={{ price: data?.regular_price || 0 }} cartItem={cartItem} setCartItem={setCartItem} /> : <ProductOptions data={{ price: data?.regular_price || 0, variants: data?.image_gallery }} cartItem={cartItem} setCartItem={setCartItem} />
                }
                <DeliveryOptions cartItem={cartItem} setCartItem={setCartItem} />
                <PaymentMethods cartItem={cartItem} setCartItem={setCartItem} />
                <Reviews id={id} />
                <CustomerReviews id={id} />
                <AddReview id={id} />
                <SimilarProducts />
            </SecondaryContainer>

            <Modal isLef={false} isOpen={currentModal === "custom-order-modal"} setIsOpen={() => handleCloseModal()} title={"Custom Order"}>
                <CustomOrderModalContents handlePlaceOrder={handlePlaceOrder} />
            </Modal>
        </div >
    );
};

export default App;
