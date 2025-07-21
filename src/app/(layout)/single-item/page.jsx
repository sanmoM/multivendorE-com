"use client"

import SelectInput from '@/components/shared/inputs/select-input/SelectInput'
import React, { useState } from 'react'

export default function page() {
    const [state, setState] = useState("Dhaka")
    const [area, setArea] = useState("Pathapath")
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("Red")
    const [size, setSize] = useState("1 pound")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state, area, quantity, color, size)
    }
    return (
        <div
            class="grid container max-w-7xl px-3 mt-6 mx-auto grid-cols-1 lg:grid-cols-4 lg:gap-6"
        >
            <div class="col-span-3">
                <div class="lg:flex block gap-4">
                    <div class="lg:w-1/2 w-full">
                        <img
                            src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2bd78b357d.webp"
                            alt="Product Image"
                            class="w-full max-w-md mx-auto"
                        />
                        <div
                            class="mb-8 gap-2 items-center justify-center flex lg:mb-0 mt-2"
                        >
                            <div
                                class="h-8 w-8 flex justify-center items-center hover:bg-black transition duration-200 hover:text-white border rounded-full"
                            >
                                <i class="fa-solid fa-arrow-left"></i>
                            </div>
                            <img
                                src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2bd78b357d.webp"
                                class="max-w-16 border border-black cursor-pointer rounded"
                                alt=""
                            />
                            <img
                                src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2bd78b357d.webp"
                                class="max-w-16 cursor-pointer border rounded"
                                alt=""
                            />
                            <img
                                src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2bd78b357d.webp"
                                class="max-w-16 border cursor-pointer rounded"
                                alt=""
                            />
                            <img
                                src="https://amazcart.ischooll.com/public/uploads/images/02-01-2023/63b2bd78b357d.webp"
                                class="max-w-16 border cursor-pointer rounded"
                                alt=""
                            />
                            <div
                                class="h-8 w-8 flex justify-center items-center hover:bg-black transition duration-200 hover:text-white border rounded-full"
                            >
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 w-full lg:ml-4">
                        <span
                            class="p-1 text-sm font-semibold text-white bg-green-600 inline-block"
                        >In stock</span
                        >
                        <h2 class="text-[16px] lg:text-[22px] my-2 font-bold">
                            Wooden Design Beautiful Furniture 001
                        </h2>

                        <div class="space-y-1">
                            <p class="text-sm text-[#687083]">
                                SKU: <span class="text-black">Wooden-furniture-001</span>
                            </p>
                            <p class="text-sm text-[#687083]">
                                Category:
                                <span class="text-black">Furnitures, Wooden Furniture</span>
                            </p>
                            <p class="text-sm text-[#687083]">
                                AVAILABLITY: <span class="text-black">Unlimited</span>
                            </p>
                        </div>

                        <div class="flex items-center my-3 pb-1 border-b gap-5">
                            <div class="flex items-center gap-3 border-r pr-4">
                                <div class="text-yellow-500">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="text-[12px] text-[#687083]">0.00/5 (0 Review)</p>
                            </div>
                            <div><i class="fa-solid fa-coins mr-2"></i> 067</div>
                        </div>

                        <h2 class="text-[16px] lg:text-[24px] font-semibold mt-4">
                            $ 65.00
                        </h2>

                        <div class="flex my-4 gap-3 items-center">
                            <p class="text-sm text-[#687083]">Quantity:</p>
                            <div class="flex border text-center">
                                <button class="py-1 px-3 bg-slate-200 cursor-pointer" onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1)
                                    }
                                }}>-</button>
                                <p class="py-1 px-3">{quantity}</p>
                                <button class="py-1 px-3 bg-slate-200 cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>

                        <h2
                            class="font-medium text-[16px] border-b pb-4 lg:text-[20px] mt-6"
                        >
                            Total: $ 71.00
                        </h2>

                        <div class="my-4">
                            <h3 class="font-medium text-[16px] lg:text-[20px]">
                                Color Variant
                            </h3>
                            <div id="color-options" class="flex mt-1 gap-3">
                                <button
                                    class="color-btn w-8 h-8 rounded-full border-2 border-black bg-yellow-800"
                                    title="Chocolate"
                                ></button>
                                <button
                                    class="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-pink-500"
                                    title="Strawberry"
                                ></button>
                                <button
                                    class="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-yellow-300"
                                    title="Vanilla"
                                ></button>
                                <button
                                    class="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-green-500"
                                    title="Matcha"
                                ></button>
                            </div>
                        </div>

                        <div class="my-6">
                            <h3 class="font-medium text-[16px] lg:text-[20px]">
                                Size (Pounds)
                            </h3>
                            <div class="flex text-sm gap-3 mt-1">
                                <button
                                    class="size-btn px-4 py-2 rounded border bg-black text-white"
                                    data-size="1 pound"
                                >
                                    1 Pound
                                </button>
                                <button
                                    class="size-btn px-4 py-2 rounded border border-gray-300 bg-white"
                                    data-size="2 pound"
                                >
                                    2 Pound
                                </button>
                                <button
                                    class="size-btn px-4 py-2 rounded border border-gray-300 bg-white"
                                    data-size="3 pound"
                                >
                                    3 Pound
                                </button>
                            </div>
                        </div>

                        <div class="flex gap-4 mt-6">
                            <button
                                onClick={handleSubmit}
                                class="px-2 py-3 md:py-4 w-1/2 rounded-md flex justify-center bg-black text-white font-medium text-sm"
                                href="#"
                            >Add to Cart</button>
                            <a
                                class="px-2 py-2 md:py-4 w-1/2 rounded-md flex justify-center border !border-black text-black font-medium text-sm"
                                href="/checkOutPage.html"
                            >Buy Now</a>
                        </div>

                        <div class="text-sm mt-4 font-semibold">
                            <a href="#" class="mr-4"
                            ><i class="fa-solid fa-heart"></i> ADD TO WISHLIST</a
                            >
                            <a href="#"
                            ><i class="fa-solid fa-code-compare"></i> ADD TO COMPARE</a
                            >
                        </div>

                        <div class="flex flex-wrap items-center py-4 gap-2">
                            <p class="text-sm text-[#687083]">TAG:</p>
                            <span
                                class="p-1 text-sm rounded bg-slate-300 text-black whitespace-nowrap"
                            >furniture</span>
                            <span
                                class="p-1 text-sm rounded bg-slate-300 text-black whitespace-nowrap"
                            >wooden furniture</span>
                            <span
                                class="p-1 text-sm rounded bg-slate-300 text-black whitespace-nowrap"
                            >beautiful furniture</span>
                            <span
                                class="p-1 text-sm rounded bg-slate-300 text-black whitespace-nowrap"
                            >wooden design beautiful furniture 001</span>
                        </div>

                        <div class="mt-4">
                            <p class="text-sm mb-1">SHARE ON:</p>
                            <div class="flex gap-4">
                                <a class="border px-4 py-3 flex items-center" href="#"
                                ><i class="fa-solid fa-tree"></i></a>
                                <a class="border px-4 py-3 flex items-center" href="#"
                                ><i class="fa-solid fa-building-columns"></i></a>
                                <a class="border px-4 py-3 flex items-center" href="#"
                                ><i class="fa-solid fa-seedling"></i></a>
                                <a class="border px-4 py-3 flex items-center" href="#"
                                ><i class="fa-solid fa-globe"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border mt-8 py-4">
                    <h2 class="text-[16px] font-semibold border-b pb-4 pl-4">
                        Description
                    </h2>
                    <div class="p-2 md:p-6">
                        <p class="text-sm">
                            Product details of Titanium Almirah - Butterfly - Black
                        </p>
                        <div
                            class="text-[13px] text-[#687083] flex flex-col lg:flex-row gap-4 my-6 px-2"
                        >
                            <ul class="space-y-1 w-full md:w-1/2">
                                <li>Glass feel premium outlook</li>
                                <li>Compact design for space saving trendy solution</li>
                                <li>Separate compartment for Suits keeping</li>
                                <li>Wooden style built design will give you a premium feel</li>
                                <li>Each shelf load capacity is 15kg</li>
                            </ul>
                            <ul class="space-y-1 w-full md:w-1/2">
                                <li>Fade free & easy cleaning</li>
                                <li>No worry of damage during cleaning with water</li>
                                <li>
                                    Security lock for both upper & bottom chamber makes it a
                                    secure storage solution
                                </li>
                                <li>Measurement: L-34.9 inch, W-18.7 inch, H-68.4 inch</li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <h3 class="text-[16px] font-semibold my-4 text-gray-500">
                                About Titanium Almirah:
                            </h3>
                            <p class="text-sm">
                                Titanium Almirah is the most sophisticated and premium plastic
                                built Almirah in the world. Its unique built quality and space
                                saving design makes it a perfect fit for our bed room
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border mt-8 py-4">
                    <h2 class="text-[16px] font-semibold border-b pb-4 px-4">
                        Customer Feedback
                    </h2>

                    <div class="p-4 flex flex-col lg:flex-row gap-8">
                        <div class="text-center lg:w-1/4">
                            <h2 class="text-[48px] font-bold text-red-500 leading-none">0</h2>
                            <div class="text-yellow-400 text-lg my-2">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="text-sm text-[#687083]">0 Verified ratings</p>
                        </div>

                        <div class="flex-1 space-y-2">
                            <div class="flex items-center gap-3">
                                <div class="w-full h-2 bg-gray-200 rounded-full"></div>
                                <div class="flex text-yellow-400 text-sm gap-1 w-24">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span class="text-sm text-[#687083]">0%</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="w-full h-2 bg-gray-200 rounded-full"></div>
                                <div class="flex text-yellow-400 text-sm gap-1 w-24">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <span class="text-sm text-[#687083]">0%</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="w-full h-2 bg-gray-200 rounded-full"></div>
                                <div class="flex text-yellow-400 text-sm gap-1 w-24">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <span class="text-sm text-[#687083]">0%</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="w-full h-2 bg-gray-200 rounded-full"></div>
                                <div class="flex text-yellow-400 text-sm gap-1 w-24">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <span class="text-sm text-[#687083]">0%</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="w-full h-2 bg-gray-200 rounded-full"></div>
                                <div class="flex text-yellow-400 text-sm gap-1 w-24">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <span class="text-sm text-[#687083]">0%</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-2 flex-wrap mt-6 px-4">
                        <button
                            class="px-4 py-1 border border-red-500 bg-red-100 text-red-600 text-sm font-semibold rounded"
                        >
                            All
                        </button>
                        <button class="px-4 py-1 border text-sm font-semibold rounded">
                            5 <i class="fa-solid fa-star text-yellow-400 ml-1"></i>
                        </button>
                        <button class="px-4 py-1 border text-sm font-semibold rounded">
                            4 <i class="fa-solid fa-star text-yellow-400 ml-1"></i>
                        </button>
                        <button class="px-4 py-1 border text-sm font-semibold rounded">
                            3 <i class="fa-solid fa-star text-yellow-400 ml-1"></i>
                        </button>
                        <button class="px-4 py-1 border text-sm font-semibold rounded">
                            2 <i class="fa-solid fa-star text-yellow-400 ml-1"></i>
                        </button>
                        <button class="px-4 py-1 border text-sm font-semibold rounded">
                            1 <i class="fa-solid fa-star text-yellow-400 ml-1"></i>
                        </button>
                    </div>

                    <p class="px-4 py-6 text-sm text-[#687083]">No review found.</p>
                </div>
            </div>

            <div class="grid-cols-1 mt-8 lg:mt-0 w-full space-y-8">
                <div class="border">
                    <h2 class="border-b text-[16px] font-semibold p-4">Delivery Info</h2>
                    <div class="p-4">
                        <h3 class="text-[14px] font-semibold">Free Shipping</h3>
                        <p class="text-[13px] text-[#687083] mt-2">
                            Free Shipping on Free Shipping starts from order amount $ 0.00
                        </p>
                    </div>
                </div>

                <div class="border">
                    <h2 class="border-b text-[16px] font-semibold p-4">
                        Choose your Location
                    </h2>
                    <div class="p-4">
                        <div class="space-y-4 w-full max-w-xs">
                            <SelectInput inputClass={"shadow-none"} options={[{ value: "Dhaka", label: "Dhaka" }, { value: "Pathapath", label: "Pathapath" }, { value: "Dhanmondi", label: "Dhanmondi" }, { value: "Uttara", label: "Uttara" }, { value: "Mirpur", label: "Mirpur" }]} value={area} setValue={setArea} variant={"small"} />
                            <SelectInput inputClass={"shadow-none"} options={[{ value: "Dhaka", label: "Dhaka" }, { value: "Pathapath", label: "Pathapath" }, { value: "Dhanmondi", label: "Dhanmondi" }, { value: "Uttara", label: "Uttara" }, { value: "Mirpur", label: "Mirpur" }]} value={state} setValue={setState} variant={"small"} />
                        </div>

                        <div class="mt-8 flex gap-2">
                            <i class="fa-solid fa-truck"></i>
                            <div>
                                <h3 class="text-[14px] font-semibold">Door Delivery</h3>
                                <p class="text-[13px] text-[#687083]">
                                    Free shipping available for this product. Delivery time within
                                    5–8 days.
                                </p>
                            </div>
                        </div>

                        <div class="mt-8 flex gap-2">
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <h3 class="text-[14px] font-semibold">Pickup Location</h3>
                                <p class="text-[13px] text-[#687083]">
                                    Delivery from pickup location always free of cost. Pickup
                                    address: Panthapath, Dhaka. Country: Bangladesh. State: Dhaka.
                                    City: Dhaka. Postcode: 1200.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 border">
                    <div class="flex gap-2">
                        <i class="fa-solid fa-file"></i>
                        <div>
                            <h3 class="text-[14px] font-semibold">Return Policy</h3>
                            <p class="text-[13px] text-[#687083]">
                                Easy Return, Quick Refund.
                                <a class="text-blue-500" href="#">see more</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border">
                    <h2 class="border-b text-[16px] font-semibold p-4">
                        Seller Information
                    </h2>
                    <div class="p-4">
                        <a class="text-[14px] font-semibold" href="#">Amaz cart</a>
                        <div class="flex justify-between mt-2">
                            <div>
                                <p class="text-[13px] text-[#687083]">
                                    <span class="text-black mr-2">100%</span> Seller Score
                                </p>
                                <p class="text-[13px] text-[#687083]">
                                    <span class="text-black mr-2">1</span> Followers
                                </p>
                            </div>
                            <button class="p-2 text-[12px] font-bold text-white bg-black">
                                FOLLOWED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
