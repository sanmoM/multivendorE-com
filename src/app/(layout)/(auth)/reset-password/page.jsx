"use client"

import AuthTextInput from '@/components/auth/auth-inputs/auth-text-input/AuthTextInput'
import Button from '@/components/shared/button/Button'
import Container from '@/components/shared/container/Container'
import useAxios from '@/hooks/useAxios'
import { handleMobileNumberChange } from '@/utils/number-validation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function page() {
    const [mobile, setMobile] = useState('')
    const axios = useAxios()
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/verify_mobile", {
                mobile: mobile
            })

            console.log(res)
            if (res.status === 200) {
                router.replace("/otp-validation?mobile=01919173356")
                toast.success("OTP sent to your mobile number")
                return
            }
            toast.error("Something went wrong")
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <Container
            className="lg:min-h-[70vh] min-h-[calc(100svh-73.5px)] md:min-h-[calc(100svh-84px)] grid place-items-center"
        >
            <div className="w-full max-w-md mx-auto">

                <h2 className="text-3xl font-bold mb-1 text-center">Forgot Password?</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Enter your mobile number and we'll send you a OTP to reset your password.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 space-y-4">
                        <AuthTextInput label="Mobile" placeholder="Mobile" value={mobile} setValue={(value) => setMobile(handleMobileNumberChange(value))} isRequired isNumber />
                    </div>

                    <Button
                        type="submit"
                        className="w-full py-3 bg-red-600 text-white font-bold rounded-full text-sm"
                        text={"GET OTP"}
                    />
                </form>
            </div>
        </Container>
    )
}
