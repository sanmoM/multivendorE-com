import Container from '@/components/shared/container/Container'
import React from 'react'

export default function page() {
    return (
        <Container>
            <div class="container max-w-7xl rounded mx-auto px-3 my-12">
                <div>
                    <div class="w-72 shadow-2xl">
                        <div>
                            <img
                                src="https://amazcart.ischooll.com/public/uploads/images/23-11-2021/619cc885b6802.png"
                                alt=""
                            />
                        </div>
                        <div class="p-4">
                            <p class="font-normal text-[14px] text-[#687083]">24th Nov,2021</p>
                            <h2
                                class="text-[16px] transition duration-200 hover:text-[#ff2631] my-4 lg:text-[20px] font-bold"
                            >
                                Nature Connection Exercise - Perceive and Receive
                            </h2>
                            <p class="text-[16px] mb-4 font-normal text-[#687083]">
                                For this exercise find a place, any place, with some nature
                                present which, let's face it, is anyw....
                            </p>
                            <a
                                class="border-b-4 transition duration-200 hover:text-[#ff2631] text-[14px] font-bold"
                                href=""
                            >+ READ MORE</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
