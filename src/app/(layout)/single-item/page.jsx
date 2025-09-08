// "use client";

// import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
// import Button from '@/components/shared/button/Button';
// import Container from '@/components/shared/container/Container';
// import Modal from '@/components/shared/modal/Modal';
// import AddReview from '@/components/single-item/add-review/AddReview';
// import CakeOptions from '@/components/single-item/cake-options/CakeOptions';
// import CustomOrderModalContents from '@/components/single-item/custom-order/CustomOrder';
// import CustomerReviews from '@/components/single-item/customer-reviews/CustomerReviews';
// import DeliveryOptions from '@/components/single-item/delivery-options/DeliveryOptions';
// import PaymentMethods from '@/components/single-item/payment-methods/PaymentMethods';
// import ProductInfo from '@/components/single-item/product-info/ProductInfo';
// import ProductOptions from '@/components/single-item/product-options/ProductOptions';
// import Reviews from '@/components/single-item/reviws/Reviews';
// import SellerInfo from '@/components/single-item/shared/seller-info/SellerInfo';
// import SimilarProducts from '@/components/single-item/similar-products/SimilarProducts';
// import SingleItemTabs from '@/components/single-item/single-item-tabs/SingleItemTabs';
// import useAxios from '@/hooks/useAxios';
// import useModalAction from '@/hooks/useModalAction';
// import { addToCart } from '@/lib/redux/features/cartSlice';
// import { setCheckoutItems } from '@/lib/redux/features/checkoutSlice';
// import { useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

// const App = () => {
//     const searchParams = useSearchParams();
//     const type = searchParams.get('type');
//     const id = searchParams.get('id');
//     const dispatch = useDispatch();

//     // this is cart item
//     const [cartItem, setCartItem] = useState(null);

//     const [data, setData] = useState(null);
//     const [relatedProducts, setRelatedProducts] = useState([]);

//     const axios = useAxios();


//     const { currentModal, handleCloseModal, handleOpenModal } = useModalAction();
//     const handleCustomOrderModal = () => {
//         handleOpenModal("custom-order-modal")
//     }

//     const handlePlaceOrder = () => {
//         handleOpenModal("checkout-modal")
//     }

//     // single item data fetching
//     useEffect(() => {
//         axios.get(`/item-details/${type}/${id}`).then((res) => {
//             setData(res?.data?.data);
//         });
//     }, []);

//     // related products fetching
//     useEffect(() => {
//         axios.get(`/related-product/${type}/${data?.category?.id}`).then((res) => {
//             setRelatedProducts(res?.data?.data);
//         });
//     }, [data]);


//     const handleAddToCart = () => {
//         // make item for cart based on product type
//         const item = data?.type === "product" ?
//             {
//                 ...cartItem,
//                 id,
//                 name: data?.cake_name,
//                 price: data?.regular_price,
//                 image: data?.product_image,
//                 type: data?.type,
//                 quantity: cartItem?.quantity || 1,
//                 stock: data?.stock
//             }
//             :
//             {
//                 ...cartItem,
//                 name: data?.name,
//                 image: cartItem?.variant || data?.variants?.[0],
//                 id,
//                 price: data?.regular_price,
//                 image: data?.image,
//                 type: data?.type,
//                 quantity: cartItem?.quantity || 1,
//                 stock: data?.stock
//             }


//         dispatch(addToCart(item));
//         setCartItem(null);
//         handleOpenModal("cart-modal");
//     }

//     const handleBuyNow = () => {
//         let productData;
//         if (data?.type === "product") {
//             productData = {
//                 ...data,
//                 image: data?.product_image,
//                 name: data?.cake_name || data?.name,
//                 price: data?.regular_price,
//                 slices: cartItem?.slices || "4 Slices",
//                 quantity: cartItem?.quantity || 1,
//                 weight: cartItem?.weight || 1,
//                 deliveryOption: cartItem?.deliveryOption || "full-payment",
//             }
//         } else {
//             productData = {
//                 ...data,
//                 image: data?.image,
//                 name: data?.name,
//                 price: data?.regular_price,
//                 quantity: cartItem?.quantity || 1,
//                 deliveryOption: cartItem?.deliveryOption || "full-payment",
//             }
//         }
//         dispatch(setCheckoutItems([productData]));
//         handleOpenModal("checkout-modal");
//     }

//     return (
//         <div className='my-6 lg:my-10'>
//             <MobileHeader title={"Single Item"} containerClassName={"mb-6"} />
//             <Container className={"overflow-hidden !pt-0"}>
//                 <ProductInfo data={data} />
//                 <div className='space-x-4'>
//                     {
//                         data && data?.type !== "product" && <Button text="Add to Cart" onClick={handleAddToCart} />
//                     }
//                     <Button text="Buy Now" className={"bg-tertiary"} onClick={() => handleBuyNow()} />
//                 </div>
//                 <SellerInfo className="lg:hidden" handleCustomOrderModal={handleCustomOrderModal} data={{ rating: data?.average_rating }} />
//                 <SingleItemTabs description={data?.description || data?.full_description} />
//                 <div className=' max-w-2xl w-full mt-8 space-y-8'>
//                     {
//                         data?.type === "product" ? <CakeOptions data={{
//                             price: data?.regular_price || 0, stock: data?.stock
//                         }} cartItem={cartItem} setCartItem={setCartItem} /> : <ProductOptions data={{
//                             price: data?.regular_price || 0, variants: data?.image_gallery, stock: data?.stock
//                         }} cartItem={cartItem} setCartItem={setCartItem} />
//                     }
//                     {
//                         data?.type === "product" && <DeliveryOptions cartItem={cartItem} setCartItem={setCartItem} />
//                     }
//                     {/* <PaymentMethods cartItem={cartItem} setCartItem={setCartItem} /> */}
//                     <Reviews id={id} />
//                     <CustomerReviews id={id} />
//                     <AddReview id={id} />
//                 </div>
//                 <SimilarProducts products={relatedProducts} />
//             </Container>

//             <Modal isLef={false} isOpen={currentModal === "custom-order-modal"} setIsOpen={() => handleCloseModal()} title={"Custom Order"}>
//                 <CustomOrderModalContents handlePlaceOrder={handlePlaceOrder} />
//             </Modal>
//         </div >
//     );
// };

// export default App;


"use client";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import MobileHeader from "@/components/root-layout/header/components/mobile-header/MobileHeader";
import Button from "@/components/shared/button/Button";
import Container from "@/components/shared/container/Container";
import Modal from "@/components/shared/modal/Modal";
import AddReview from "@/components/single-item/add-review/AddReview";
import CakeOptions from "@/components/single-item/cake-options/CakeOptions";
import CustomOrderModalContents from "@/components/single-item/custom-order/CustomOrder";
import CustomerReviews from "@/components/single-item/customer-reviews/CustomerReviews";
import DeliveryOptions from "@/components/single-item/delivery-options/DeliveryOptions";
import ProductInfo from "@/components/single-item/product-info/ProductInfo";
import ProductOptions from "@/components/single-item/product-options/ProductOptions";
import Reviews from "@/components/single-item/reviws/Reviews";
import SellerInfo from "@/components/single-item/shared/seller-info/SellerInfo";
import SimilarProducts from "@/components/single-item/similar-products/SimilarProducts";
import SingleItemTabs from "@/components/single-item/single-item-tabs/SingleItemTabs";

import Loader from "@/components/shared/loader/Loader";
import useModalAction from "@/hooks/useModalAction";
import { addToCart } from "@/lib/redux/features/cartSlice";
import { setCheckoutItems } from "@/lib/redux/features/checkoutSlice";
import { useDispatch } from "react-redux";

const cakeDeliveryOptions = [
    { label: "Full Payment", value: "full-payment" },
    { label: "Order with 10% Payment", value: "order-with-10-payment" },
];

const generalProductDeliveryOptions = [
    { label: "Full Payment", value: "full-payment" },
    { label: "Cash on Delivery", value: "cash-on-delivery" },
];

export default function SingleItem() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const id = searchParams.get("id");
    const axios = useAxios();
    const dispatch = useDispatch();

    const [cartItem, setCartItem] = useState(null);

    // --- Fetch single item ---
    const {
        data: itemData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["single-item", type, id],
        queryFn: async () => {
            const res = await axios.get(`/item-details/${type}/${id}`);
            return res.data.data;
        },
        enabled: !!type && !!id,
    });

    // --- Fetch related products ---
    const {
        data: relatedProductsData,
        isLoading: relatedLoading,
        isError: relatedError,
    } = useQuery({
        queryKey: ["related-products", type, itemData?.category?.id],
        queryFn: async () => {
            const res = await axios.get(
                `/related-product/${type}/${itemData?.category?.id}`
            );
            return res.data.data;
        },
        enabled: !!itemData?.category?.id,
    });

    const data = itemData;
    const relatedProducts = relatedProductsData || [];

    const { currentModal, handleCloseModal, handleOpenModal } = useModalAction();

    const handleCustomOrderModal = () => handleOpenModal("custom-order-modal");
    const handlePlaceOrder = () => handleOpenModal("checkout-modal");

    const handleAddToCart = () => {
        const item =
            data?.type === "product"
                ? {
                    ...cartItem,
                    id,
                    name: data?.cake_name,
                    price: data?.regular_price,
                    image: data?.product_image,
                    type: data?.type,
                    quantity: cartItem?.quantity || 1,
                    stock: data?.stock,
                }
                : {
                    ...cartItem,
                    name: data?.name,
                    image: cartItem?.variant || data?.variants?.[0],
                    id,
                    price: data?.regular_price,
                    image: data?.image,
                    type: data?.type,
                    quantity: cartItem?.quantity || 1,
                    stock: data?.stock,
                };

        dispatch(addToCart(item));
        setCartItem(null);
        handleOpenModal("cart-modal");
    };

    const handleBuyNow = () => {
        let productData;
        if (data?.type === "product") {
            productData = {
                ...data,
                image: data?.product_image,
                name: data?.cake_name || data?.name,
                price: data?.regular_price,
                slices: cartItem?.slices || "4 Slices",
                quantity: cartItem?.quantity || 1,
                weight: cartItem?.weight || 1,
                deliveryOption: cartItem?.deliveryOption || "full-payment",
            };
        } else {
            productData = {
                ...data,
                image: data?.image,
                name: data?.name,
                price: data?.regular_price,
                quantity: cartItem?.quantity || 1,
                deliveryOption: cartItem?.deliveryOption || "full-payment",
            };
        }
        dispatch(setCheckoutItems([productData]));
        handleOpenModal("checkout-modal");
    };

    return (
        <div>
            {
                isLoading ?
                    <div className="h-screen flex items-center justify-center">
                        <div className="w-[25%] lg:w-[10%]">
                            <Loader />
                        </div>
                    </div> :
                    <div className="my-6 lg:my-10">
                        <MobileHeader title={"Single Item"} containerClassName={"mb-6"} />
                        <Container className={"overflow-hidden !pt-0"}>
                            <ProductInfo data={data} />
                            <div className="space-x-4">
                                {data && data?.type !== "product" && (
                                    <Button text="Add to Cart" onClick={handleAddToCart} />
                                )}
                                <Button
                                    text="Buy Now"
                                    className={"bg-tertiary"}
                                    onClick={() => handleBuyNow()}
                                />
                            </div>
                            <SellerInfo
                                className="lg:hidden"
                                handleCustomOrderModal={handleCustomOrderModal}
                            // data={{ rating: data?.average_rating }}
                            />
                            <SingleItemTabs
                                description={data?.description || data?.full_description}
                            />
                            <div className="max-w-2xl w-full mt-8 space-y-8">
                                {data?.type === "product" ? (
                                    <CakeOptions
                                        data={{
                                            price: data?.regular_price || 0,
                                            stock: data?.stock,
                                        }}
                                        cartItem={cartItem}
                                        setCartItem={setCartItem}
                                    />
                                ) : (
                                    <ProductOptions
                                        data={{
                                            price: data?.regular_price || 0,
                                            variants: data?.image_gallery,
                                            stock: data?.stock,
                                        }}
                                        cartItem={cartItem}
                                        setCartItem={setCartItem}
                                    />
                                )}
                                <DeliveryOptions cartItem={cartItem} setCartItem={setCartItem} options={data?.type === "product" ? cakeDeliveryOptions : generalProductDeliveryOptions} />
                                <Reviews id={id} />
                                <CustomerReviews id={id} />
                                <AddReview id={id} />
                            </div>
                            {!relatedLoading && !relatedError && (
                                <SimilarProducts products={relatedProducts} />
                            )}
                        </Container>

                        <Modal
                            isLef={false}
                            isOpen={currentModal === "custom-order-modal"}
                            setIsOpen={() => handleCloseModal()}
                            title={"Custom Order"}
                        >
                            <CustomOrderModalContents handlePlaceOrder={handlePlaceOrder} />
                        </Modal>
                    </div>
            }
        </div >
    );
}
