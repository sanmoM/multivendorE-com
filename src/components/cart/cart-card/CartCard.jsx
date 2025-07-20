import React from 'react'

export default function CartCard({ item, handleQuantity }) {
    return (
        <div className="mt-2 space-y-3">
            <div
                className="bg-white border rounded-md p-3 grid grid-cols-5 md:grid-cols-6 items-center text-[10px] sm:text-xs md:text-sm"
            >
                <div className="col-span-2 flex gap-2 md:gap-4 items-center">
                    <img
                        className="w-10 h-10 object-cover rounded"
                        src={item.image}
                        alt="Product"
                    />
                    <h4 className="leading-tight font-semibold text-gray-700">
                        {item.name}
                    </h4>
                </div>

                <p className="text-center font-semibold hidden md:block">${item.price}</p>

                <div className="flex justify-center items-center gap-2">
                    <button
                        onClick={() => handleQuantity(item.id, item.quantity - 1)}
                        className="w-5 h-5 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="w-5 text-center">{item.quantity}</span>
                    <button
                        onClick={() => handleQuantity(item.id, item.quantity + 1)}
                        className="w-5 h-5 flex items-center justify-center border rounded text-gray-600 hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>

                <p className="text-center font-semibold text-gray-700">${item.price * item.quantity}</p>

                <button className="text-red-500 text-center hover:underline">✖</button>
            </div>
        </div>
    )
}
