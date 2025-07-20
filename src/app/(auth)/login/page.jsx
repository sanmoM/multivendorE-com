"use client";
import AuthTextInput from '@/components/auth/auth-inputs/auth-text-input/AuthTextInput';
import CheckBoxWithLabel from '@/components/shared/inputs/check-box-with-label/CheckBoxWithLabel';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import { useState } from 'react';

export default function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, remember);
    };
    return (
        <div className='bg-[#f4f7f9]'>
            <div
                class="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-5 min-h-screen p-6 lg:p-10"
            >
                <div class="lg:col-span-2 flex items-center">
                    <div class="w-full max-w-md mx-auto">
                        <img
                            src="https://amazcart.ischooll.com/public/uploads/settings/65e061ef3822b.png"
                            alt="Logo"
                            class="mb-8"
                        />

                        <h2 class="text-3xl font-bold mb-1">Sign In</h2>
                        <p class="text-sm text-gray-500 mb-6">
                            See your growth and get consulting support!
                        </p>

                        <button
                            class="w-full flex items-center justify-center gap-2 border bg-white rounded-md py-3 text-sm font-medium mb-6"
                        >
                            <img
                                src="https://img.icons8.com/color/16/000000/google-logo.png"
                                alt="Google"
                            />
                            Sign In with Google
                        </button>

                        <div class="text-center text-gray-500 text-sm mb-6 relative">
                            <span class="bg-[#f4f7f9] px-2 z-10 relative"
                            >Sign in with Phone</span
                            >
                            <div
                                class="absolute left-0 top-1/2 w-full h-px bg-gray-300 -z-0"
                            ></div>
                        </div>

                        <form>
                            <div class="mb-4 space-y-4">
                                <AuthTextInput label="Email" placeholder="Email" value={email} setValue={setEmail} isRequired />
                                <AuthTextInput label="Password" placeholder="Password" value={password} setValue={setPassword} isRequired />
                            </div>
                            <CheckBoxWithLabel label="Remember me" checked={remember} setChecked={setRemember} />

                            <button
                                onClick={handleSubmit}
                                type="submit"
                                class="w-full py-3 bg-black text-white font-bold rounded-md text-sm"
                            >
                                SIGN IN
                            </button>
                        </form>

                        <div class="mt-6 text-sm">
                            <p class="text-gray-600">
                                Forgot Password?
                                <a href="/resetPass.html" class="text-black font-medium"
                                >Click Here</a
                                >
                            </p>
                            <p class="text-gray-600 mt-1">
                                Don’t have an Account?
                                <a href="/signUp.html" class="text-black font-medium">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="hidden lg:col-span-3 lg:flex flex-col justify-center items-center text-center p-4"
                >
                    <img
                        src="https://amazcart.ischooll.com/public/frontend/amazy/img/banner/login_img.png"
                        alt="Login Banner"
                        class="mb-8"
                    />
                    <div class="max-w-md">
                        <h2 class="font-bold text-3xl lg:text-4xl mb-4">
                            Turn your ideas into reality..
                        </h2>
                        <p class="text-sm font-medium text-gray-600">
                            Consistent quality and experience across all platforms and devices..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
