"use client";

import Button from '@/components/shared/button/Button';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import React, { useState, useEffect } from 'react';
import CartCard from './components/cart-card/CartCard';

const CartModalContents = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Chocolate Cake',
            price: 45,
            quantity: 1,
            image: '/images/product/product-1.svg',
        },
        {
            id: 2,
            name: 'Organic Baby Wipes',
            price: 30,
            quantity: 2,
            image: '/images/product/product-2.svg',
        },
        {
            id: 3,
            name: 'Gourmet Cookies',
            price: 50,
            quantity: 1,
            image: '/images/product/product-3.svg',
        },
    ]);

    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(5);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const newSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
    }, [items]);

    const handleQuantityChange = (id, type) => {
        setItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id) {
                    if (type === 'increment') {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return { ...item, quantity: Math.max(1, item.quantity - 1) };
                    }
                }
                return item;
            })
        );
    };

    const calculateTotal = () => {
        return (subtotal + shipping).toFixed(2);
    };

    return (
        <div className=" w-full flex flex-col h-full">
            {/* Header */}
            {/* <h1 className="text-2xl font-bold text-gray-800">Shopping Bag ({totalItems})</h1> */}
            <SectionTitle title={"Shopping Bag(3)"} />

            {/* Totals Section */}
            <div className="space-y-2 text-gray-700 my-6">
                <div className="flex justify-between items-center text-secondary">
                    <p>Subtotal</p>
                    <p className='text-primary'>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center text-secondary">
                    <p>Shipping</p>
                    <p className='text-primary'>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center text-lg text-secondary">
                    <p>Total</p>
                    <p className='text-primary'>${calculateTotal()}</p>
                </div>
            </div>

            {/* Product Items */}
            <div className="grow space-y-4 lg:space-y-6">
                {items.map((item) => (
                    <CartCard item={item} />
                ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
                <Button text={"Checkout"} className={"bg-red-600 text-white w-full"} />
                <Button text={"Checkout"} className={"bg-transparent text-primary border !border-primary w-full"} />
            </div>
        </div>
    );
};

export default CartModalContents;
