
export default function PaymentCard({ item, selectedMethod, setSelectedMethod }) {
    return (
        <label
            key={item.name}
            className={`flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors duration-200 ${selectedMethod === item.name ? 'bg-purple-50 ring-2 ring-purple-500' : 'hover:bg-gray-50'
                }`}
        >
            <div className="flex items-center space-x-4">
                <input
                    type="radio"
                    name="paymentMethod"
                    checked={selectedMethod === item.name}
                    onChange={() => setSelectedMethod(item.name)}
                    className="form-radio h-5 w-5 text-purple-600"
                />
                <span className="text-gray-700 font-medium">{item.name}</span>
            </div>
            {item.icon && <div>{item.icon}</div>}
            {item.logoUrl && (
                <img
                    src={item.logoUrl}
                    alt={`${item.name} Logo`}
                    className="h-6"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/80x30/F5F5F5/000000?text=${item.name.charAt(0)}`;
                    }}
                />
            )}
        </label>
    )
}
