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

                        <h2 class="text-3xl font-bold mb-1">Welcome Back!</h2>
                        <p class="text-sm text-gray-500 mb-8">Please send password link.</p>

                        <form>
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    class="w-full px-4 py-3 border rounded-md text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <button
                                type="submit"
                                class="w-full py-3 bg-black text-white font-bold rounded-md text-sm"
                            >
                                SEND LINK
                            </button>
                        </form>
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
                            Consistent quality and experience across all platforms and devices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
