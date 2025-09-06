"use client";

import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
import Button from '@/components/shared/button/Button';
import Container from '@/components/shared/container/Container';
import RadioInputWithLabel from '@/components/shared/inputs/radio-input-with-label/RadioInputWithLabel';
import SecondarySelectInput from '@/components/shared/inputs/secondary-select-input/SecondarySelectInput';
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAuthAxios from '@/hooks/useAuthAxios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiMail, FiMapPin, FiPhone, FiPlus } from 'react-icons/fi';

const App = () => {
    const [contactInfo, setContactInfo] = useState({});
    const [subject, setSubject] = useState('General Inquiry');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const axios = useAuthAxios()


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (firstName && lastName && phoneNo && email && message && subject) {
            const res = await axios.post('/customer-message/store', {
                firstName,
                lastName,
                phoneNo,
                email,
                message,
                type: subject
            })
            toast.success("Message Sent Successfully")
            setFirstName("");
            setLastName("");
            setPhoneNo("");
            setEmail("");
            setMessage("");
            setSubject("General Inquiry");
        } else {
            toast.error("Please fill all the fields")
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get("/show/contact-information").then((res) => {
                    console.log(res)
                    setContactInfo(res?.data?.info);
                });
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    console.log(contactInfo)
    return (
        <Container>
            <MobileHeader title={"Contact Us"} containerClassName={"mb-6"} />
            <div className=" p-4 font-sans my-6  max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row  w-full bg-white rounded-xl custom-shadow overflow-hidden mt-4 lg:mt-6">

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
                                    <a href="mailto:info@example.com" className="text-sm font-medium text-primary">{contactInfo?.email}</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FiPhone className="w-5 h-5 text-secondary" />
                                    <a href="tel:+158996888" className="text-sm font-medium text-primary">{contactInfo?.mobile}</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FiMapPin className="w-5 h-5 text-secondary" />
                                    <p className="text-sm font-medium text-primary">{contactInfo?.address}</p>
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
                    <div className="lg:w-2/3 w-full p-8 sm:p-12 border-y-2 border-secondary border-r-2 rounded-r-xl">
                        {/* <SecondarySelectInput placeholder={"Select Type"} selectedOption={{ label: "Select Type", value: "US" }} options={[{ label: "Customer", value: "US" }, { label: "Seller", value: "CA" },]} containerClassName={"ml-auto mb-6"} hasLabel={false} /> */}
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                <TextInput placeholder="First Name" value={firstName} setValue={setFirstName} />
                                <TextInput placeholder="First Name" value={lastName} setValue={setLastName} />
                                <TextInput placeholder="Phone No." value={phoneNo} setValue={setPhoneNo} />
                                <TextInput placeholder="email" type='email' value={email} setValue={setEmail} />
                            </div>
                            <TextAreaInput placeholder='Write Message' inputClassName={"resize-none"} value={message} setValue={setMessage} />

                            {/* Subject Radios */}
                            <div>
                                <h3 className="font-semibold mb-3 text-primary">Select Subject</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {['General Inquiry', 'Technical Support', 'Website Feedback'].map((option) => (
                                        <RadioInputWithLabel option={option} checked={subject === option} handleChange={() => setSubject(option)} />
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 ">
                                <Button text={"Send Message"} className={"bg-tertiary text-secondary mx-auto block"} onClick={handleSubmit} />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default App;
