import Container from "@/components/shared/container/Container";


export default function AddressInfo() {
    return <Container>
        <div
            class="flex mx-auto max-sm:flex-col max-md:flex-col justify-center gap-5 py-10 max-w-7xl max-sm:w-full"
        >
            <div class="p-3">
                <div class="flex flex-wrap gap-3">
                    <a href="/user_profile.html">
                        <button
                            class="bg-black text-white px-5 my-1 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold hover:bg-white hover:text-black"
                        >
                            Basic Info
                        </button>
                    </a>
                    <a href="/change-password">
                        <button
                            class="hover:bg-black my-1 hover:text-white px-5 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold bg-white text-black"
                        >
                            Change Password
                        </button>
                    </a>
                    <a href="/address.html">
                        <button
                            class="hover:bg-black my-1 hover:text-white px-5 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold bg-white text-black"
                        >
                            Address
                        </button>
                    </a>
                </div>
            </div>

            <div class="py-5">
                <div class="w-full border p-5 rounded-sm bg-white">
                    <h2 class="text-xl font-bold mb-5">Address Information</h2>

                    <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="flex flex-col gap-2">
                            <label for="country" class="text-[16px] max-sm:text-[14px]"
                            >Country</label
                            >
                            <select
                                id="country"
                                disabled
                                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-gray-100 text-gray-600"
                            >
                                <option selected>Bangladesh</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>Nepal</option>
                                <option>USA</option>
                                <option>UK</option>
                            </select>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="village" class="text-[16px] max-sm:text-[14px]"
                            >Village</label
                            >
                            <input
                                type="text"
                                id="village"
                                value="Mirpur"
                                disabled
                                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-gray-100 text-gray-600"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="thana" class="text-[16px] max-sm:text-[14px]"
                            >Thana / Upazila</label
                            >
                            <input
                                type="text"
                                id="thana"
                                value="Mirpur"
                                disabled
                                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-gray-100 text-gray-600"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="district" class="text-[16px] max-sm:text-[14px]"
                            >District</label
                            >
                            <input
                                type="text"
                                id="district"
                                value="Dhaka"
                                disabled
                                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-gray-100 text-gray-600"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="division" class="text-[16px] max-sm:text-[14px]"
                            >Division</label
                            >
                            <input
                                type="text"
                                id="division"
                                value="Dhaka"
                                disabled
                                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-gray-100 text-gray-600"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="postcode" class="text-[16px] max-sm:text-[14px]"
                            >Postcode</label
                            >
                            <input
                                type="text"
                                id="postcode"
                                value="1216"
                                disabled
                                class="w-full px-5 py-3 border rounded-sm shadow-sm bg-gray-100 text-gray-600"
                            />
                        </div>
                    </div>

                    <div class="pt-5 text-center">
                        <button
                            class="bg-black text-white px-8 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold hover:bg-white hover:text-black border hover:border-black"
                        >
                            Update Address
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Container>

}
