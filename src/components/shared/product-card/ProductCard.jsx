export default function ProductCard({item}) {
    return (
        <div
            className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
        >
            <div className="relative">
                <a href="/singlePage.html" className="block overflow-hidden">
                    <img
                        src={item.image}
                        alt="Sofa"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </a>
                <div
                    className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full"
                >
                    ${item.discount} Off
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
                    <a href="#" className="hover:text-[#ff2631]"
                    ><i className="fa-solid fa-trash"></i
                    ></a>
                </div>
            </div>

            <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
                <h4
                    className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3"
                >
                    {item.name}
                </h4>

                <div
                    className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0"
                >
                    <p className="text-center md:text-left font-bold text-gray-800">
                        ${item.price}
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
    )
}
