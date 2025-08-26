"use client"

import Button from '@/components/shared/button/Button';
import { useEffect, useRef, useState } from 'react';

// Main OTP validation component
export default function OTPValidation({ handleSubmit, handleResend: handleResendProp }) {

    const [otp, setOtp] = useState(['', '', '', '', '', '']); // State to hold the 6-digit OTP
    const inputRefs = useRef([]); // Ref to store a reference to each input field
    const [timer, setTimer] = useState(300); // ⏳ 5 minutes = 300 seconds
    const [isCounting, setIsCounting] = useState(true);


    // Function to handle changes in the input fields
    const handleChange = (e, index) => {
        const value = e.target.value;
        // Only allow single digit numbers
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus to the next input field if a digit is entered
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Function to handle backspace key for navigation
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Focus the first input field on component mount
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    // Countdown effect
    useEffect(() => {
        let interval;
        if (isCounting && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsCounting(false);
        }
        return () => clearInterval(interval);
    }, [isCounting, timer]);

    // Function to handle the verification
    const handleVerify = () => {
        const enteredOtp = otp.join('');
        console.log(enteredOtp)
        handleSubmit(enteredOtp)
    };

    // Function to resend OTP
    const handleResend = () => {
        setOtp(['', '', '', '', '', '']); // clear inputs
        setTimer(300); // reset timer ⏳ 5 minutes
        setIsCounting(true);
        handleResendProp();
    };

    // Helper: format seconds → mm:ss
    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 font-inter">
            <div className="w-full max-w-lg bg-white rounded-xl border border-secondary p-8 space-y-6">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">OTP Verification</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        A verification code has been sent to your mobile number.
                    </p>
                </div>

                {/* OTP Input Fields */}
                <div className="flex justify-center space-x-3">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-8 h-8 lg:w-12 lg:h-12 text-center text-sm lg:text-xl font-bold text-gray-900 
               border-2 border-secondary rounded-lg 
               focus:border-secondary focus:ring-1 focus:ring-secondary 
               transition-colors duration-200 focus:outline-secondary"
                        />
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                    <Button text={"Verify"} onClick={handleVerify} className="w-full py-3 bg-red-600 text-white font-bold rounded-full text-sm" />
                    <div className="text-center">
                        {isCounting ? (
                            <p className="text-sm text-gray-500">
                                Resend code in <span className="font-semibold">{formatTime(timer)}</span>
                            </p>
                        ) : (
                            <button
                                onClick={handleResend}
                                className="text-sm font-medium text-secondary hover:underline transition-colors duration-200"
                            >
                                Resend code
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
