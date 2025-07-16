import React from 'react'

export default function page() {
    return (
        <div className='bg-[#f4f7f9]'>
            <div
                class="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-5 min-h-screen justify-start p-6 lg:p-10"
            >
                <div class="lg:col-span-2 flex items-center">
                    <div class="w-full max-w-md mx-auto">
                        <img
                            src="https://amazcart.ischooll.com/public/uploads/settings/65e061ef3822b.png"
                            alt="Logo"
                            class="mb-8"
                        />

                        <h2 class="text-3xl font-bold mb-1">Sign Up</h2>
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
                            >Sign up with Phone</span
                            >
                            <div
                                class="absolute left-0 top-1/2 w-full h-px bg-gray-300 -z-0"
                            ></div>
                        </div>

                        <form>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    First Name <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Frist Name"
                                    class="w-full px-4 py-3 border rounded-md text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    class="w-full px-4 py-3 border rounded-md text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Phone number <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    class="w-full px-4 py-3 border rounded-md text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Password <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Min. 8 Character"
                                    class="w-full px-4 py-3 border rounded-md text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm password <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Min. 8 Character"
                                    class="w-full px-4 py-3 border rounded-md text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <button
                                type="submit"
                                class="w-full py-3 bg-black text-white font-bold rounded-md text-sm"
                            >
                                SIGN UP
                            </button>
                        </form>

                        <div class="mt-6 text-sm">
                            <div class="flex items-center gap-1 mb-6 mt-8">
                                <input type="checkbox" id="remember" class="mr-2" />
                                <label for="remember" class="text-sm text-gray-600"
                                >By signing up, you agree to
                                    <a class="text-blue-500" href="">Teams of Service</a> and
                                    <a class="text-blue-500" href="">Privacy Policy</a></label
                                >
                            </div>
                            <p class="text-gray-600 mt-1">
                                Already have an Account?
                                <a href="/login.html" class="text-black font-medium">Sign In</a>
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
