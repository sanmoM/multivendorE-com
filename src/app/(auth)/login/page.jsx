"use client";
import AuthTextInput from '@/components/auth/auth-inputs/auth-text-input/AuthTextInput';
import Button from '@/components/shared/button/Button';
import Container from '@/components/shared/container/Container';
import CheckBoxWithLabel from '@/components/shared/inputs/check-box-with-label/CheckBoxWithLabel';
import useAxios from '@/hooks/useAxios';
import { setUser } from '@/lib/redux/features/userSlice';
import { handleMobileNumberChange, isValidBDNumber } from '@/utils/number-validation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function page() {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter()
    const axios = useAxios();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mobile || password) {
                if (isValidBDNumber(mobile) === false) {
                    toast.error("Please enter a valid mobile number")
                    return
                }
                const res = await axios.post("/login", {
                    mobile: mobile,
                    password: password,
                });
                if (res.status === 200) {
                    toast.success("Login successful")
                    localStorage.setItem("token", res?.data?.token)
                    router.replace("/")
                }

            } else {
                toast.error("Please fill all the fields")
            }
        }
        catch (error) {
            toast.error("Login failed")
        }
    };



    return (
        <Container
            className="lg:min-h-auto min-h-[calc(100svh-73.5px)] md:min-h-[calc(100svh-84px)] grid place-items-center"
        >
            <div className="w-full max-w-md mx-auto">

                <h2 className="text-3xl font-bold mb-1 text-center">Sign In</h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    See your growth and get consulting support!
                </p>

                <button
                    className="w-full flex items-center justify-center gap-2 border bg-white rounded-md py-3 text-sm font-medium mb-6"
                >
                    <img
                        src="https://img.icons8.com/color/16/000000/google-logo.png"
                        alt="Google"
                    />
                    Sign In with Google
                </button>

                <div className="text-center text-gray-500 text-sm mb-6 relative">
                    <span className="bg-[#f4f7f9] px-2 z-10 relative"
                    >Sign in with Phone</span
                    >
                    <div
                        className="absolute left-0 top-1/2 w-full h-px bg-gray-300 -z-0"
                    ></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 space-y-4">
                        <AuthTextInput label="Mobile" placeholder="Mobile" value={mobile} setValue={(value) => setMobile(handleMobileNumberChange(value))} isRequired isNumber />
                        <AuthTextInput label="Password" placeholder="Password" value={password} setValue={setPassword} isRequired type='password' />
                    </div>
                    <CheckBoxWithLabel label="Remember me" checked={remember} setChecked={setRemember} />

                    <Button
                        // onClick={handleSubmit}
                        type="submit"
                        className="w-full py-3 bg-red-600 text-white font-bold rounded-full text-sm"
                        text={"SIGN IN"}
                    />
                </form>

                <div className="mt-6 text-sm">
                    <p className="text-gray-600">
                        Forgot Password?
                        <a href="/reset-password" className="text-secondary font-medium"> Click Here</a>
                    </p>
                    <p className="text-gray-600 mt-1">
                        Don’t have an Account?
                        <a href="/signup" className="text-secondary font-medium"> Sign Up</a>
                    </p>
                </div>
            </div>
        </Container>
    )
}
