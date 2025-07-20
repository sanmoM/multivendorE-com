import React from 'react'

export default function PurchaseHistoryCard({ item }) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h6 className="text-[14px] text-gray-400">
                        Order ID: {item.orderId}
                    </h6>
                    <p className="text-[12px]">Packege: {item.packetge}</p>
                    <p className="text-[12px]">{item.date}</p>
                </div>
                <p className="max-sm:text-[12px]">${item.amount}</p>
                <div>
                    <button
                        className={`mx-3 max-sm:text-[10px] py-2 text-[14px] w-[100px]  flex justify-center items-center transition duration-300 rounded-md  ${item.status === 'Processing' && 'bg-blue-100 text-blue-600'} ${item.status === 'Completed' && 'bg-green-100 text-green-600'} ${item.status === 'Cancelled' && 'bg-red-100 text-red-600'} ${item.status === 'Pending' && 'bg-yellow-100 text-yellow-600'}`}>
                        {item.status}
                    </button>
                </div>
            </div>
            <hr />
        </div>
    )
}
