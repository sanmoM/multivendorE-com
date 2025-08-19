"use client";
import AuthTextInput from '@/components/auth/auth-inputs/auth-text-input/AuthTextInput';
import Button from '@/components/shared/button/Button';
import Container from '@/components/shared/container/Container';
import CheckBoxWithLabel from '@/components/shared/inputs/check-box-with-label/CheckBoxWithLabel';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function page() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter()
    // const axios = useAxios();
    // const { data: csrfToken } = useGetCSRF();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const api = axios.create({
            baseURL: "https://multivendor.testorbis.com/api",
            withCredentials: true, // Cookie পাঠানোর জন্য
        });


        try {
            if (mobile || password || confirmPassword || firstName || lastName || checked) {
                // axios.post("/register",
                //     {
                //         name: firstName + " " + lastName,
                //         password: password,
                //         mobile: mobile,
                //         password_confirmation: confirmPassword
                //     }
                // {
                //     name: "Tajul",
                //     mobile: "01853991555",
                //     password: "password123",
                //     password_confirmation: "password123"
                // }
                //     // ,
                //     // {
                //     //     headers: {
                //     //         "Content-Type": "application/json",
                //     //         //  'csrf-token': csrfToken,
                //     //     },
                //     // }
                // )
                // dispatch(setUser({ mobile: mobile}))
                // router.push("/")
                // প্রথমে CSRF cookie নিতে হবে
                // let data = await api.get("/sanctum/csrf-cookie", { withCredentials: true, withXSRFToken: true });
                // async function getCookie(name) {
                //     const value = `; ${document.cookie}`;
                //     const parts = value.split(`; ${name}=`);
                //     if (parts.length === 2) return parts.pop().split(';').shift();
                // }

                // const csrfToken = await getCookie("XSRF-TOKEN");
                // console.log(csrfToken, "csrfToken");

                // // // // তারপর Register API কল
                // const res = await api.post("/api/register", {
                //     name: "Tajul",
                //     mobile: "01853991555",
                //     password: "password123",
                //     password_confirmation: "password123"
                // }, {
                //     withCredentials: true,               // send cookies automatically
                //     xsrfCookieName: "XSRF-TOKEN",        // name of the CSRF cookie
                //     xsrfHeaderName: "X-XSRF-TOKEN",
                // });
                await api.get("/home", { withCredentials: true, withXSRFToken: true });
                // setMessage("Registration successful!");
            } else {
                toast.error("Please fill all the fields")
            }
        }
        catch (error) {
            toast.error(error.message)
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

                    <form onSubmit={handleSubmit}>
                        <div className='mb-4 grid grid-cols-2 gap-4'>
                            <AuthTextInput label="First Name" placeholder="First Name" value={firstName} setValue={setFirstName} isRequired />
                            <AuthTextInput label="Last Name" placeholder="Last Name" value={lastName} setValue={setLastName} isRequired />
                        </div>
                        <div className='space-y-4 gap-4'>
                            <AuthTextInput label="Mobile" placeholder="Mobile Number" value={mobile} setValue={setMobile} isRequired />
                            <AuthTextInput label="Password" placeholder="Password" value={password} setValue={setPassword} isRequired type='password' />
                            <AuthTextInput label="Confirm password" placeholder="Confirm password" value={confirmPassword} setValue={setConfirmPassword} isRequired type="password" />
                        </div>

                        <div className="mt-6 text-sm">
                            <CheckBoxWithLabel label="By signing up, you agree to <a className=text-blue-500 href=''>Teams of Service</a> and <a className=text-blue-500 href=''>Privacy Policy</a>" checked={checked} setChecked={setChecked} />
                        </div>
                        <Button
                            // onClick={handleSubmit}
                            type="submit"
                            className="w-full py-3 bg-red-600 text-white font-bold rounded-full text-sm mb-4"
                            text={"SIGN UP"}
                        />
                        <p className="text-gray-600 mt-1">
                            Already have an Account?
                            <a href="/login.html" className="text-black font-medium">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
        </Container>
    )
}
