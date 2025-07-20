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

            
        </div>
    </Container>

}
