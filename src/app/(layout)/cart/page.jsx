"use client";
import CartCard from '@/components/cart/cart-card/CartCard';
import OrderSummary from '@/components/cart/oredr-summary/OrderSummary';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { handleQuantity as handleQuantityForRedux } from '@/lib/redux/features/cartSlice';

export default function page() {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleQuantity = (id, quantity) => {
        dispatch(handleQuantityForRedux({ id, quantity }));
    };

    return (
        <div
            className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10 container mx-auto md:px-4 px-2"
        >
            <div className="col-span-2">
                <div
                    className="py-3 md:py-4 px-3 md:px-6 border bg-[#fcfdfd] mt-6 rounded text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 grid grid-cols-5 md:grid-cols-6 items-center"
                >
                    <h5 className="col-span-2">Item</h5>
                    <h5 className="text-center hidden md:block">Price</h5>
                    <h5 className="text-center">Quantity</h5>
                    <h5 className="text-center">Subtotal</h5>
                    <h5 className="text-center">Remove</h5>
                </div>

                {/* order cards */}
                {
                    cartItems.map((item, index) => (
                        <CartCard item={item} handleQuantity={handleQuantity} />
                    ))
                }
                <div className="mt-6 flex justify-between flex-wrap">
                    <a
                        className="text-black cursor-pointer hover:bg-black hover:text-white text-sm font-semibold py-3 px-6 rounded border border-black transition"
                    >
                        CONTINUE SHIPPING
                    </a>
                    <Link
                        href="/checkout"
                        className="bg-black cursor-pointer text-white hover:border hover:border-black text-sm font-semibold py-3 px-6 rounded hover:bg-white hover:text-black transition"
                    >
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            </div>

            {/* order summary */}
            <OrderSummary items={cartItems} />
        </div>
    )
}
