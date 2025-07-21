"use client"
import SelectInput from '@/components/shared/inputs/select-input/SelectInput'
import ProductCard from '@/components/shared/product-card/ProductCard'
import { products } from '@/data'
import { useState } from 'react'

export default function page() {
    const [filter, setFilter] = useState("all")
    return (
        <div>
            <div className="container max-w-7xl mx-auto px-4">
                <section className="container lg:mt-12 mt-4 max-w-7xl mx-auto ">
                    <div className="flex gap-2 md:gap-4">
                        <div className=" relative w-1/2 h-[80px]  md:h-[180px]">
                            <img
                                className="w-full h-full object-cover"
                                src="/images/promotion1.jpg"
                                alt="Promotion"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 text-center p-4"
                            >
                                <p className="text-[8px] sm:text-sm md:text-lg text-white">
                                    🎉 Big Sale! Get 10% Off Sunglasses – Use Code:
                                    <span className="font-bold text-yellow-300">SALE30</span>
                                </p>
                                <a
                                    className="mt-3 text-sm bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
                                    href="#"
                                >
                                    Get Now
                                </a>
                            </div>
                        </div>

                        <div className=" relative w-1/2 h-[80px] md:h-[180px]">
                            <img
                                className="w-full h-full object-cover"
                                src="/images/promotion2.jpg"
                                alt="Promotion"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 text-center p-4"
                            >
                                <p className="text-[8px] sm:text-sm md:text-lg text-white">
                                    🎉 Big Sale! Get 30% Off Home appliances – Use Code:
                                    <span className="font-bold text-yellow-300">SALE30</span>
                                </p>
                                <a
                                    className="mt-3 text-sm bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
                                    href="#"
                                >
                                    Get Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="grid my-4 grid-cols-1 gap-0 lg:gap-8 lg:grid-cols-4">
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="flex gap-2">
                            <i className="fa-solid text-xl fa-filter"></i>
                            <h4 className="text-base font-bold text-gray-900 mb-4">
                                Order Summary
                            </h4>
                        </div>
                        <div className="border p-4 mt-2">
                            <div className="flex justify-between items-center px-4 border-b">
                                <h2 className="text-base font-bold text-[#1a1a1a]">
                                    Filter Products
                                </h2>
                                <div className="p-4 space-y-6 text-sm text-gray-700"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold border-b mt-4 pb-1 mb-2">
                                    Filter by Price
                                </h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="5000"
                                    value="1500"
                                    className="w-full accent-black"
                                />
                                <p className="text-xs mt-2 text-gray-600">
                                    Price: <span className="font-semibold">1545 - 2440</span>
                                </p>
                            </div>
                            <div className="p-4 space-y-6 text-sm text-gray-700"></div>
                            <h4 className="font-semibold border-b pb-1">Monitor</h4>
                            <h4 className="font-semibold border-b mt-4 pb-1 mb-2">Brand</h4>
                            <div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2"
                                    ><input type="checkbox" /> Ryzen Pc</label
                                    >
                                    <label className="flex items-center gap-2"
                                    ><input type="checkbox" /> Intel Pc</label
                                    >
                                    <label className="flex items-center gap-2"
                                    ><input type="checkbox" /> Lg</label
                                    >
                                    <label className="flex items-center gap-2"
                                    ><input type="checkbox" /> Apple</label
                                    >
                                    <label className="flex items-center gap-2"
                                    ><input type="checkbox" /> Lenovo</label
                                    >
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold border-b mt-4 pb-1 mb-2">
                                    Filter by Rating
                                </h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <span className="text-yellow-500">★★★★★</span>
                                        <span>And Up</span>
                                        <input type="checkbox" className="ml-auto" />
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <span className="text-yellow-500">★★★★☆</span>
                                        <span>And Up</span>
                                        <input type="checkbox" className="ml-auto" />
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <span className="text-yellow-500">★★★☆☆</span>
                                        <span>And Up</span>
                                        <input type="checkbox" className="ml-auto" />
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <span className="text-yellow-500">★★☆☆☆</span>
                                        <span>And Up</span>
                                        <input type="checkbox" className="ml-auto" />
                                    </label>
                                </div>
                            </div>



                            <button
                                className="w-full bg-black text-white py-2 rounded transition text-sm"
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="flex border-b pb-4 justify-between items-center">
                            <div>
                                <h3 className="text-xs sm:text-base font-light text-gray-600">
                                    Showing 1-9 out total 10 Products
                                </h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <SelectInput inputClass={"shadow-none"} options={[{ value: "all", label: "All Items" }, { value: "furniture", label: "Furniture" }, { value: "decor", label: "Decor" }, { value: "electronics", label: "Electronics" }]} value={filter} setValue={setFilter} variant={'x-small'} />
                                <button
                                    id="openFilter"
                                    className="text-sm lg:hidden flex items-center gap-2 text-gray-700 hover:text-black"
                                >
                                    <i className="fa-solid fa-filter text-lg"></i>
                                    <span className="hidden sm:inline">Filter</span>
                                </button>
                                <div
                                    id="filterPanel"
                                    className="fixed top-0 right-0 w-full sm:w-[320px] h-full lg:hidden bg-white shadow-xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto"
                                >
                                    <div
                                        className="flex justify-between items-center px-4 py-4 border-b"
                                    >
                                        <h2 className="text-base font-bold text-[#1a1a1a]">
                                            Filter Products
                                        </h2>
                                        <button
                                            id="closeFilter"
                                            className="text-sm font-bold bg-black px-3 py-1 rounded text-white"
                                        >
                                            close
                                        </button>
                                    </div>

                                    <div className="p-4 space-y-6 text-sm text-gray-700">
                                        <div>
                                            <h4 className="font-semibold border-b pb-1 mb-2">
                                                Filter by Price
                                            </h4>
                                            <input
                                                type="range"
                                                min="0"
                                                max="5000"
                                                value="1500"
                                                className="w-full accent-black"
                                            />
                                            <p className="text-xs mt-2 text-gray-600">
                                                Price: <span className="font-semibold">1545 - 2440</span>
                                            </p>
                                        </div>
                                        <h4 className="font-semibold border-b pb-1">Monitor</h4>

                                        <div>
                                            <h4 className="font-semibold border-b pb-1 mb-2">Brand</h4>
                                            <div className="space-y-2">
                                                <label className="flex items-center gap-2"
                                                ><input type="checkbox" /> Ryzen Pc</label
                                                >
                                                <label className="flex items-center gap-2"
                                                ><input type="checkbox" /> Intel Pc</label
                                                >
                                                <label className="flex items-center gap-2"
                                                ><input type="checkbox" /> Lg</label
                                                >
                                                <label className="flex items-center gap-2"
                                                ><input type="checkbox" /> Apple</label
                                                >
                                                <label className="flex items-center gap-2"
                                                ><input type="checkbox" /> Lenovo</label
                                                >
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold border-b pb-1 mb-2">
                                                Filter by Rating
                                            </h4>
                                            <div className="space-y-2">
                                                <label className="flex items-center gap-2">
                                                    <span className="text-yellow-500">★★★★★</span>
                                                    <span>And Up</span>
                                                    <input type="checkbox" className="ml-auto" />
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <span className="text-yellow-500">★★★★☆</span>
                                                    <span>And Up</span>
                                                    <input type="checkbox" className="ml-auto" />
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <span className="text-yellow-500">★★★☆☆</span>
                                                    <span>And Up</span>
                                                    <input type="checkbox" className="ml-auto" />
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <span className="text-yellow-500">★★☆☆☆</span>
                                                    <span>And Up</span>
                                                    <input type="checkbox" className="ml-auto" />
                                                </label>
                                            </div>
                                        </div>



                                        <button
                                            className="w-full bg-black text-white py-2 rounded transition text-sm"
                                        >
                                            Filter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-6  gap-4 grid-cols-3">
                            {
                                products.map((item, index) => (
                                    <ProductCard item={item} key={index} />
                                ))
                            }
                        </div>
                        <div className="mt-6 bg-black">
                            <div className=" relative w-full h-[90px] md:h-[180px]">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/images/promotion2.jpg"
                                    alt="Promotion"
                                />
                                <div
                                    className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 text-center p-4"
                                >
                                    <p className="text-[8px] sm:text-sm md:text-lg text-white">
                                        🎉 Big Sale! Get 30% Off Home appliances – Use Code:
                                        <span className="font-bold text-yellow-300">SALE30</span>
                                    </p>
                                    <a
                                        className="mt-3 text-sm bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
                                        href="#"
                                    >
                                        Get Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-6  gap-4 grid-cols-3">
                            {
                                products.map((item, index) => (
                                    <ProductCard item={item} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div></div>
    )
}
