"use client"

import OTPValidation from "@/components/auth/otp-validation/OTPValidation";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function page() {
    const axios = useAxios();
    const router = useRouter();
    const searchParams = new URLSearchParams(window.location.search);
    const mobile = searchParams.get("mobile");
    const handleSubmit = async (enteredOtp) => {
        try {
            if (enteredOtp.length === 6) {
                await axios.get(`/otp_check?mobile=${mobile}&otp=${enteredOtp}`);
                toast.success('OTP verified successfully!');
                router.push(`/login`);
            } else {
                toast.error('Please enter a valid 6-digit OTP.');
            }
        } catch (error) {
            toast.error('Error verifying OTP. Please try again.');
        }
    }

    const handleResend = () => {
        toast.success('OTP resent successfully!');
    }

    return (
        <div>
            <OTPValidation handleSubmit={handleSubmit} />
        </div>
    )
}
