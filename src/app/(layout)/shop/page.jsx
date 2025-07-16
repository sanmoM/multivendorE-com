import React from 'react'

export default function page() {
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
                                <select
                                    id="filter"
                                    name="filter"
                                    className="border border-gray-300 text-sm rounded px-2 py-1 focus:outline-none focus:ring-1 bg-white text-gray-600 focus:ring-black"
                                >
                                    <option value="all">All Items</option>
                                    <option value="furniture">Furniture</option>
                                    <option value="decor">Decor</option>
                                    <option value="electronics">Electronics</option>
                                </select>
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
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
                            >
                                <div className="relative">
                                    <a href="/singlePage.html" className="block overflow-hidden">
                                        <img
                                            src="https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp"
                                            alt="Sofa"
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </a>
                                    <div
                                        className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                                    >
                                        $2.00 Off
                                    </div>
                                    <div
                                        className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 border rounded-md shadow-lg p-2 flex flex-col gap-2 z-10"
                                    >
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-solid fa-code-compare"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-eye"></i
                                        ></a>
                                        <a href="#" className="hover:text-[#ff2631] text-xs sm:text-sm"
                                        ><i className="fa-regular fa-heart"></i
                                        ></a>
                                    </div>
                                </div>

                                <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                                    <h4
                                        className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                                    >
                                        Minimalistic Living Room Sofa 3pcs
                                    </h4>

                                    <div
                                        className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                                    >
                                        <p className="text-center md:text-left font-bold text-gray-800">
                                            $30.00
                                        </p>

                                        <a
                                            href="#"
                                            className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            Buy
                                        </a>

                                        <a
                                            href="#"
                                            className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                                        >
                                            <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}
