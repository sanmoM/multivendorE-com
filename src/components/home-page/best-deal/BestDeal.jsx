import React from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Minimalistic Living Room Sofa 3pcs',
    image: 'https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aec14313bc.webp',
    price: '$30.00',
    offer: '$2.00 Off',
  },
  {
    id: 2,
    name: 'Minimalistic Living Room Sofa 3pcs',
    image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399d2188d1a6.webp',
    price: '$30.00',
    offer: '$2.00 Off',
  },
  {
    id: 3,
    name: 'Minimalistic Living Room Sofa 3pcs',
    image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399bc9d00979.webp',
    price: '$30.00',
    offer: '$2.00 Off',
  },
  {
    id: 4,
    name: 'Minimalistic Living Room Sofa 3pcs',
    image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b882ce24f.webp',
    price: '$30.00',
    offer: '$2.00 Off',
  },
];

const BestDeals = () => {
  return (
    <section className="px-3 my-12">
      <div className="flex items-center mb-6 justify-between">
        <h2 className="lg:text-[30px] md:text-[22px] text-[16px] font-bold">Best Deal</h2>
        <div className="text-[14px] font-bold">
          <Link href="#">
            <span className="text-sm md:text-[14px]">VIEW ALL</span>
            <i className="fa-solid fa-angle-right px-2 text-[8px] md:text-[12px] py-1.5 bg-black ml-2 text-white rounded-full"></i>
          </Link>
        </div>
      </div>

      <div className="grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-lg border border-gray-300 shadow-lg bg-[#ffffff38] overflow-hidden transition-all duration-300"
          >
            <div className="relative">
              <Link href="/singlePage.html" className="block overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-3 left-0 bg-black text-white text-[6px] sm:text-xs px-2 py-1 rounded-r-full">
                {product.offer}
              </div>
              <div className="absolute top-5 right-[-60px] group-hover:right-3 transition-all duration-300 rounded-md shadow-lg p-2 flex flex-col gap-2 z-10">
                <Link href="#" className="hover:text-[#ff2631] text-xs sm:text-sm">
                  <i className="fa-solid fa-code-compare"></i>
                </Link>
                <Link href="#" className="hover:text-[#ff2631] text-xs sm:text-sm">
                  <i className="fa-regular fa-eye"></i>
                </Link>
                <Link href="#" className="hover:text-[#ff2631] text-xs sm:text-sm">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </div>
            </div>

            <div className="bg-[#f4f1f7] sm:px-3 px-1 py-3 md:px-5 md:py-5">
              <h4 className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-700 hover:text-[#ff2631] transition duration-200 mb-3">
                {product.name}
              </h4>

              <div className="md:flex md:items-center md:justify-between text-xs sm:text-sm md:text-base space-y-3 md:space-y-0">
                <p className="text-center md:text-left font-bold text-gray-800">{product.price}</p>

                <Link
                  href="#"
                  className="block lg:hidden md:ml-4 w-20 mx-auto md:w-full text-center px-3 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded hover:bg-[#ff2631] transition duration-200"
                >
                  Buy
                </Link>

                <Link
                  href="#"
                  className="hidden lg:flex items-center justify-center px-4 py-2 bg-black text-white rounded hover:bg-[#ff2631] transition duration-200"
                >
                  <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
