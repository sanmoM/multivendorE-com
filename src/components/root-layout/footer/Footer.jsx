
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 pb-12 md:pb-0 mt-12">
            <div className="grid container mx-auto px-6 max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-14 md:pt-28 pb-8">
                {/* Footer Links */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                    <ul className="text-[12px] md:text-[16px] space-y-1 font-normal text-white">
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                Order Status
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                Referral
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                Coupons
                            </Link>
                        </li>
                    </ul>
                    <ul className="text-[12px] md:text-[16px] space-y-1 font-normal text-white">
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                Help & Support
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#ff2631] transition duration-200">
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Store Buttons */}
                <div className="flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start md:space-y-2 space-x-2 md:space-x-0">
                    <Link
                        href="#"
                        className="bg-[#ff2631] px-4 md:max-w-44 py-3 w-1/2 md:w-[80%] rounded-lg text-white"
                    >
                        <div className="flex items-center gap-2">
                            <span>
                                <i className="fa-solid text-3xl fa-gamepad"></i>
                            </span>
                            <span>
                                <p className="text-[9px] md:text-[12px]">GET IT ON</p>
                                <span className="font-bold text-[11px] md:text-[14px]">
                                    Google Play
                                </span>
                            </span>
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="bg-[#ff2631] px-4 md:max-w-44 py-3 w-1/2 md:w-[80%] rounded-lg text-white"
                    >
                        <div className="flex items-center gap-2">
                            <span>
                                <i className="fa-solid text-3xl fa-apple-whole"></i>
                            </span>
                            <span>
                                <p className="text-[9px] md:text-[12px]">GET IT ON</p>
                                <span className="font-bold text-[11px] md:text-[14px]">
                                    Apple Store
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Estimate Subscription */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl md:text-[16px] mb-2 font-bold text-white">
                        GET TO KNOW PROJECT ESTIMATE?
                    </h3>
                    <input
                        placeholder="Enter email address"
                        className="bg-white px-4 text-[10px] md:text-[14px] mb-2 py-3 md:max-w-72 w-full rounded-lg border-none outline-none"
                        type="email"
                    />
                    <button className="bg-[#ff2631] text-[9px] md:text-[14px] font-bold px-4 py-3 rounded-lg text-white md:max-w-72 w-full">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            <p className="text-white text-center text-[10px] md:text-[14px] border-gray-400 border-y font-normal py-6 lg:pb-6 pb-16">
                Copyright © Amazcart 2025. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
