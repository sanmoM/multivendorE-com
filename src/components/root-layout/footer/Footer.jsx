import SecondaryContainer from '@/components/shared/container/SecondaryContainer';
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight, PiTwitterLogoThin } from 'react-icons/pi';

const App = () => {
    return (
        <footer className="w-full font-sans pt-28 pb-8 text-secondary hidden lg:block">
            <SecondaryContainer>
                {/* Navigation Links */}
                <div className="flex flex-wrap justify-between gap-x-8 gap-y-4 mb-6  text-lg max-w-4xl mx-auto">
                    <a href="#" className="hover: transition-colors duration-200">About</a>
                    <a href="#" className="hover: transition-colors duration-200">Contact</a>
                    <a href="#" className="hover: transition-colors duration-200">FAQ</a>
                    <a href="#" className="hover: transition-colors duration-200">Privacy Policy</a>
                    <a href="#" className="hover: transition-colors duration-200">Terms of Service</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-6">
                    {/* Instagram Icon */}
                    <a href="#" className=" hover: transition-colors duration-200">
                        <PiInstagramLogoLight className="h-6 w-6 text-secondary" />
                    </a>
                    {/* Dribbble Icon (or similar, based on visual) */}
                    <a href="#" className=" hover: transition-colors duration-200">
                        <CiFacebook className="h-6 w-6 text-secondary" />
                    </a>
                    {/* Twitter Icon */}
                    <a href="#" className=" hover: transition-colors duration-200">
                        <PiTwitterLogoThin className="h-6 w-6 text-secondary" />
                    </a>
                </div>

                {/* Copyright */}
                <p className=" text-sm text-center">
                    ©2024 Fresh Foods. All rights reserved.
                </p>
            </SecondaryContainer>
        </footer>
    );
};

export default App;
