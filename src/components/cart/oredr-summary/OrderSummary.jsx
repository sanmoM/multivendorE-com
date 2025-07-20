import React from 'react'

export default function OrderSummary({ items }) {
    const subtotal = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const shippingCharge = 30;
    const discount = 2;
    const vatTaxGst = 5;
    const total = subtotal + shippingCharge + discount + vatTaxGst;
    return (
        <div className="col-span-1 mt-6 lg:mt-0 p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3">
                <div className="text-sm flex justify-between items-center">
                    <p>Subtotal</p>
                    <p className="text-gray-600">+$ {subtotal}</p>
                </div>
                <div className="text-sm flex justify-between items-center">
                    <div>
                        <p>Shipping Charge</p>
                        <p className="text-gray-600 text-[10px] font-light">
                            PACKAGE WISE SHIPPING CHANGE
                        </p>
                    </div>
                    <p className="text-gray-600">+${shippingCharge}</p>
                </div>
                <div className="text-sm flex justify-between items-center">
                    <p>Discount</p>
                    <p className="text-gray-600">+${discount}</p>
                </div>
                <div className="text-sm flex justify-between items-center">
                    <p>VAT/TAX/GST</p>
                    <p className="text-gray-600">+${vatTaxGst}</p>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                    <p className="font-bold text-sm text-gray-500">TOTAL</p>
                    <p className="font-bold">${total}</p>
                </div>
            </div>
        </div>
    )
}
