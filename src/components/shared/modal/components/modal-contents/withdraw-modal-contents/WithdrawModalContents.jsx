import Button from '@/components/shared/button/Button'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import useAuthAxios from '@/hooks/useAuthAxios'
import { useQuery } from '@tanstack/react-query'

export default function WithdrawModalContents({ handleCloseModal }) {
    const axios = useAuthAxios()
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["withdraw"],
        queryFn: async () => {
            const res = await axios.get("/customer/withdraw-info")
            return res?.data
        },
    })

console.log(data, "data")
    return (
        <div>
            <PrimaryTitle title={`Available Balance: `} className={"mb-4"} />
            {/* <PrimaryTitle title={"End date"} className={"mb-4"} /> */}
            <TextInput placeholder={"Select end date"} />

            <Button text={"Create Promotion"} className={"bg-red-600 text-white w-full"} onClick={() => handleCloseModal()} />
        </div >
    )
}
