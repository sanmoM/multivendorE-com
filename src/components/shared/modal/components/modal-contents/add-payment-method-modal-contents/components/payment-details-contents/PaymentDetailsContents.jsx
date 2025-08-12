import Button from "@/components/shared/button/Button"
import TextInput from "@/components/shared/inputs/text-input/TextInput"
import SecondaryTitle from "@/components/shared/title/SecondaryTitle"

export const CardDetails = ({ item }) => {
    return (
        <div className="space-y-6 ">
            <SecondaryTitle title={"Card Details"} />

            {/* Card Number Input */}
            <div className="relative bg-tertiary rounded-xl">
                <TextInput placeholder={"1234 5678 9012 3456"} className={""} />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                    {/* Card Logos */}
                    <img src="https://placehold.co/32x20/F5F5F5/000000?text=VISA" alt="Visa" className="h-4 rounded-sm" />
                    <img src="https://placehold.co/32x20/F5F5F5/000000?text=MC" alt="Mastercard" className="h-4 rounded-sm" />
                    <img src="https://placehold.co/32x20/F5F5F5/000000?text=AMEX" alt="American Express" className="h-4 rounded-sm" />
                    <img src="https://placehold.co/32x20/F5F5F5/000000?text=CSS" alt="CSS" className="h-4 rounded-sm" />
                </div>
            </div>

            {/* Expiration Date and CVV */}
            <div className="flex space-x-4">
                <div className="relative flex-1">
                    <TextInput placeholder={"MM/YY"} className={""} />
                </div>
                <div className="relative flex-1">
                    <TextInput placeholder={"123"} className={""} />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        {/* <Icon path="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zM11 7h2v6h-2zM11 15h2v2h-2z" className="w-5 h-5" /> */}
                        {item?.icon}
                    </div>
                </div>
            </div>

            {/* Card Holder Name */}
            <div>
                <SecondaryTitle title={"Card Holder Name"} />
                <TextInput placeholder={"Full name on card"} className={""} />
            </div>
            <Button text={"Add Payment Method"} className={"bg-red-600 text-white w-full"} />
        </div>
    )
}

export const BkashDetails = ({ item }) => {
    return (
        <div>
            <TextInput placeholder={"1234 5678 9012 3456"} className={""} />
            <Button text={"Add Payment Method"} className={"bg-red-600 text-white w-full mt-4"} />
        </div>
    )
}