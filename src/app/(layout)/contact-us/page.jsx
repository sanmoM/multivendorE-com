"use client";

import Button from '@/components/shared/button/Button';
import RadioInputWithLabel from '@/components/shared/inputs/radio-input-with-label/RadioInputWithLabel';
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiPlus } from 'react-icons/fi';

const App = () => {
    const [subject, setSubject] = useState('General Inquiry');

    return (
        <div className="flex items-center justify-center p-4 font-sans my-6 lg:my-12">
            <div className="flex flex-col lg:flex-row max-w-4xl w-full bg-white rounded-xl custom-shadow overflow-hidden">

                {/* Left Section: Contact Information */}
                <div className="lg:w-1/3 w-full bg-tertiary text-white p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10 space-y-6">
                        <PrimaryTitle title={"Contact Information"} />
                        <p className="text-sm text-secondary">
                            Have some big idea or brand to develop and need help?
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center space-x-3">
                                <FiMail className="w-5 h-5 text-secondary" />
                                <a href="mailto:info@example.com" className="text-sm font-medium text-primary">info@example.com</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiPhone className="w-5 h-5 text-secondary" />
                                <a href="tel:+158996888" className="text-sm font-medium text-primary">+158 996 888</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiMapPin className="w-5 h-5 text-secondary" />
                                <p className="text-sm font-medium text-primary">123 Street 256 House</p>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 pt-6">
                            {[...Array(4)].map((_, i) => (
                                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full transition-colors duration-200 hover:bg-opacity-40">
                                    <FiPlus className="w-4 h-4 text-secondary" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Shapes */}
                    <div className="absolute -bottom-48 -right-48 w-80 h-80 bg-secondary rounded-full opacity-30 z-0"></div>
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-secondary rounded-full opacity-30 z-0"></div>
                </div>

                {/* Right Section: Form */}
                <div className="lg:w-2/3 w-full p-8 sm:p-12">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <TextInput placeholder="First Name" />
                            <TextInput placeholder="First Name" />
                            <TextInput placeholder="Phone No." />
                            <TextInput placeholder="email" type='email' />
                        </div>
                        <TextAreaInput placeholder='Write Message' inputClassName={"resize-none"} />

                        {/* Subject Radios */}
                        <div>
                            <h3 className="font-semibold mb-3 text-primary">Select Subject</h3>
                            <div className="flex flex-wrap gap-4">
                                {['General Inquiry', 'Technical Support', 'Website Feedback'].map((option) => (
                                    <RadioInputWithLabel option={option} checked={subject === option} handleChange={() => setSubject(option)} />
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 ">
                            <Button text={"Send Message"} className={"bg-tertiary text-secondary mx-auto block"} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default App;
