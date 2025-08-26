"use client"

import OTPValidation from '@/components/auth/otp-validation/OTPValidation';
import useAxios from '@/hooks/useAxios';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

// Main App component for the OTP validation page
export default function App() {
    const searchParams = useSearchParams();
    const mobile = searchParams.get("mobile");
    const axios = useAxios();
    const router = useRouter();


    // Function to handle the verification
    const handleSubmit = async (enteredOtp) => {
        try {
            if (enteredOtp.length === 6) {
                await axios.post(`/otp_checker?mobile=${mobile}&otp=${enteredOtp}`);
                toast.success('OTP verified successfully!');
                router.replace(`/setup-new-password?mobile=${mobile}`);
            } else {
                toast.error('Please enter a valid 6-digit OTP.');
            }
        } catch (error) {
            toast.error('Error verifying OTP. Please try again.');
        }
    };

    // Function to resend OTP
    const handleResend = () => {
        setOtp(['', '', '', '', '', '']); // clear inputs
        setTimer(300); // reset timer ⏳ 5 minutes
        setIsCounting(true);
        alert("OTP resent!"); // Replace with actual resend logic
    };

    return (
        <div>
            <OTPValidation handleSubmit={handleSubmit} />
        </div>
    );
}
