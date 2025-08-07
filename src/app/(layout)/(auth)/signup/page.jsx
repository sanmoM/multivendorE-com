"use client";
import AuthTextInput from '@/components/auth/auth-inputs/auth-text-input/AuthTextInput';
import Button from '@/components/shared/button/Button';
import Container from '@/components/shared/container/Container';
import CheckBoxWithLabel from '@/components/shared/inputs/check-box-with-label/CheckBoxWithLabel';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import { setUser } from '@/lib/redux/features/userSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function page() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            dispatch(setUser({ email }))
            router.push("/")
        }
    };

    return (
        <Container
            className="lg:min-h-auto min-h-[calc(100svh-73.5px)] md:min-h-[calc(100svh-84px)] grid place-items-center"
        >
            <div class="lg:col-span-2 flex items-center">
                <div class="w-full max-w-md mx-auto">
                    {/* <Logo className={"w-[100] mb-4 lg:mb-6 block mx-auto"} /> */}

                    {/* <h2 class="text-3xl font-bold mb-1">Sign Up</h2> */}
                    <SectionTitle title="Sign Up" className={'mb-4 lg:mb-6 text-center'} />
                    <p class="text-sm text-gray-500 mb-6 text-center">
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
                        >Sign up with Email</span
                        >
                        <div
                            class="absolute left-0 top-1/2 w-full h-px bg-gray-300 -z-0"
                        ></div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='mb-4 grid grid-cols-2 gap-4'>
                            <AuthTextInput label="First Name" placeholder="First Name" value={firstName} setValue={setFirstName} isRequired />
                            <AuthTextInput label="Last Name" placeholder="Last Name" value={lastName} setValue={setLastName} isRequired />
                        </div>
                        <div className='space-y-4 gap-4'>
                            <AuthTextInput label="Email" placeholder="Email" value={email} setValue={setEmail} isRequired type='email' />
                            <AuthTextInput label="Password" placeholder="Password" value={password} setValue={setPassword} isRequired type='password' />
                            <AuthTextInput label="Confirm password" placeholder="Confirm password" value={confirmPassword} setValue={setConfirmPassword} isRequired type="password" />
                        </div>

                        <Button
                            // onClick={handleSubmit}
                            type="submit"
                            className="w-full py-3 bg-red-500 text-white font-bold rounded-md text-sm mt-4"
                            text={"SIGN UP"}
                        />
                    </form>
                    <div class="mt-6 text-sm">
                        <CheckBoxWithLabel label="By signing up, you agree to <a class=text-blue-500 href=''>Teams of Service</a> and <a class=text-blue-500 href=''>Privacy Policy</a>" checked={checked} setChecked={setChecked} />
                        <p class="text-gray-600 mt-1">
                            Already have an Account?
                            <a href="/login.html" class="text-black font-medium">Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
