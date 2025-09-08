import Button from '@/components/shared/button/Button'
import SecondarySelectInput from '@/components/shared/inputs/secondary-select-input/SecondarySelectInput'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import useAuthAxios from '@/hooks/useAuthAxios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function WithdrawModalContents({ handleCloseModal }) {
    const methods = [
        { label: "BKash", value: "bkash" },
        { label: "Nagat", value: "nagat" },
        { label: "Rocket", value: "rocket" },
        { label: "Bank Transfer", value: "bank-transfer" },
    ]

    const [method, setMethod] = useState(null)
    const [accountNumber, setAccountNumber] = useState("")
    const [amount, setAmount] = useState("")

    const axios = useAuthAxios()
    const queryClient = useQueryClient()

    // ✅ Fetch available balance
    const { data, isLoading } = useQuery({
        queryKey: ["withdraw"],
        queryFn: async () => {
            const res = await axios.get("/customer/withdraw-info")
            return res?.data
        },
    })

    // ✅ Submit withdrawal mutation
    const withdrawMutation = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post('/customer/withdraw', data)
            return res.data
        },
        onSuccess: () => {
            toast.success("Withdrawal request submitted!")
            // refresh balance after withdraw
            queryClient.invalidateQueries({ queryKey: ["withdraw"] })
            handleCloseModal()
        },
        onError: () => {
            toast.error("Something went wrong, please try again later")
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!method || !accountNumber || !amount) {
            toast.error("Please fill all fields.")
            return
        }

        withdrawMutation.mutate({ account: accountNumber, amount, method: methods.find(singleMethod => singleMethod.value === method)?.label })
    }

    return (
        <form className='flex flex-col justify-between h-full' onSubmit={handleSubmit}>
            <div className='grow space-y-4'>
                <PrimaryTitle
                    title={`Available Balance: ${data?.available_balance || 0}`}
                    className={"mb-4"}
                />
                <SecondarySelectInput
                    placeholder='Choose a method'
                    options={methods}
                    setValue={setMethod}
                    value={method}
                    hasLabel={false}
                    containerClassName={"w-full lg:max-w-auto"}
                />
                <TextInput
                    placeholder={"Account Number"}
                    isNumber
                    value={accountNumber}
                    setValue={setAccountNumber}
                />
                <TextInput
                    placeholder={"Withdraw amount"}
                    isNumber
                    value={amount}
                    setValue={setAmount}
                />
            </div>

            <Button
                type="submit"
                text={withdrawMutation.isPending ? "Processing..." : "Withdraw"}
                className={"bg-red-600 text-white w-full"}
                disabled={withdrawMutation.isPending}
            />
        </form>
    )
}
