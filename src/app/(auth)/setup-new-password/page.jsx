"use client"

import AuthTextInput from '@/components/auth/auth-inputs/auth-text-input/AuthTextInput'
import Button from '@/components/shared/button/Button'
import Container from '@/components/shared/container/Container'
import useAxios from '@/hooks/useAxios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function page() {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const searchParams = useSearchParams();
    const mobile = searchParams.get("mobile");

    const axios = useAxios()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/set-new-password?mobile=${mobile}`, {
                password: newPassword,
                password_confirmation: confirmPassword
            })
            if (res.status === 200) {
                router.replace(`/login`)
                toast.success("Password updated successfully")
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

                <h2 className="text-3xl font-bold mb-1 text-center">Set New Password</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Please enter your new password below.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 space-y-4">
                        <AuthTextInput label="New Password" placeholder="New Password" value={newPassword} setValue={(value) => setNewPassword(value)} isRequired type='password' />
                        <AuthTextInput label="Confirm Password" placeholder="Confirm Password" value={confirmPassword} setValue={(value) => setConfirmPassword(value)} isRequired type='password' />
                    </div>

                    <Button
                        type="submit"
                        className="w-full py-3 bg-red-600 text-white font-bold rounded-full text-sm"
                        text={"CONFIRM"}
                    />
                </form>
            </div>
        </Container>
    )
}
