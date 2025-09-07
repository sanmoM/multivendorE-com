"use client";
import AuthTextInput from '@/components/auth/auth-inputs/auth-text-input/AuthTextInput';
import Button from '@/components/shared/button/Button';
import Container from '@/components/shared/container/Container';
import CheckBoxWithLabel from '@/components/shared/inputs/check-box-with-label/CheckBoxWithLabel';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import useAxios from '@/hooks/useAxios';
import { handleMobileNumberChange, isValidBDNumber } from '@/utils/number-validation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function page() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const axios = useAxios();
    const router = useRouter();

    const handleSubmit = async (e) => {
        try {
            if (mobile || password || confirmPassword || firstName || lastName || checked) {
                if (isValidBDNumber(mobile) === false) {
                    toast.error("Please enter a valid mobile number")
                    return
                }
                await axios.post(`/registeruser`, {
                    first_name: firstName,
                    last_name: lastName,
                    mobile: mobile,
                    password: password,
                    password_confirmation: confirmPassword
                });
                toast.success("OTP Sent to your mobile number, please check your SMS")

                router.replace(`/signup-otp-validation?mobile=${mobile}`)

            } else {
                toast.error("Please fill all the fields")
            }
        }
        catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };


    return (

        <Container
            className="lg:min-h-auto min-h-[calc(100svh-73.5px)] md:min-h-[calc(100svh-84px)] grid place-items-center"
        >
            <div className="lg:col-span-2 flex items-center">
                <div className="w-full max-w-md mx-auto">
                    {/* <Logo className={"w-[100] mb-4 lg:mb-6 block mx-auto"} /> */}

                    {/* <h2 className="text-3xl font-bold mb-1">Sign Up</h2> */}
                    <SectionTitle title="Sign Up" className={'mb-4 lg:mb-6 text-center'} />
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
                        >Sign up with Email</span
                        >
                        <div
                            className="absolute left-0 top-1/2 w-full h-px bg-gray-300 -z-0"
                        ></div>
                    </div>

                    <div >
                        <div className='mb-4 grid grid-cols-2 gap-4'>
                            <AuthTextInput label="First Name" placeholder="First Name" value={firstName} setValue={setFirstName} isRequired />
                            <AuthTextInput label="Last Name" placeholder="Last Name" value={lastName} setValue={setLastName} isRequired />
                        </div>
                        <div className='space-y-4 gap-4'>
                            <AuthTextInput label="Mobile" placeholder="Mobile Number" value={mobile} setValue={(value) => setMobile(handleMobileNumberChange(value))} isRequired isNumber />
                            <AuthTextInput label="Password" placeholder="Password" value={password} setValue={setPassword} isRequired type='password' />
                            <AuthTextInput label="Confirm password" placeholder="Confirm password" value={confirmPassword} setValue={setConfirmPassword} isRequired type="password" />
                        </div>

                        <div className="mt-6 text-sm">
                            <CheckBoxWithLabel label="By signing up, you agree to <a className=text-blue-500 href=''>Teams of Service</a> and <a className=text-blue-500 href=''>Privacy Policy</a>" checked={checked} setChecked={setChecked} />
                        </div>
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            className="w-full py-3 bg-red-600 text-white font-bold rounded-full text-sm mb-4"
                            text={"SIGN UP"}
                        />
                        <p className="text-gray-600 mt-1">
                            Already have an Account?
                            <a href="/login" className="text-secondary font-medium"> Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}
