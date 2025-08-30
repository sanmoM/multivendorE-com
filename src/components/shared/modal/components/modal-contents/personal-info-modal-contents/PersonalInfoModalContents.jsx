import Button from '@/components/shared/button/Button'
import DateInput from '@/components/shared/inputs/date-input/DateInput'
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import SingleImageInput from '@/components/shared/single-image-input/SingleImageInput'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import useAuthAxios from '@/hooks/useAuthAxios'
import useAxios from '@/hooks/useAxios'
import { setPrimaryInformation } from '@/lib/redux/features/userSlice'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

export default function PersonalInfoModalContents({ handleCloseModal }) {
    // const personalInformation = useSelector(state => state?.user?.user);
    const [personalInformation, setPersonalInformation] = useState({});
    const axios = useAxios();
    const authAxios = useAuthAxios();

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(personalInformation?.email);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get("/my-personal-info").then((res) => {
            console.log(res.data?.info)
            setFirstName(res.data?.info?.first_name || "");
            setLastName(res.data?.info?.last_name || "");
            setEmail(res.data?.info?.email || "");
            setPhoneNumber(res.data?.info?.mobile || "");
            setDateOfBirth(res.data?.info?.dateOfBirth || "");
            setBio(res.data?.info?.bio || "");
            setImage(res.data?.info?.image || "");
        });
    }, []);

    const handleSubmit = () => {
        const updatedInfo = {
            first_name: firstName,
            last_name: lastName,
            email,
            mobile: phoneNumber,
            dateOfBirth,
            bio,
            image
        };
        authAxios.post("/new-info/store", updatedInfo).then((res) => {
            console.log(res.data);
            toast.success("Personal information updated successfully!");
            handleCloseModal();
        }).catch((error) => {
            console.error(error);
            toast.error("Failed to update personal information.");
        });


    };

    return (
        <div className=" w-full flex flex-col h-full justify-between">
            <div>
                <PrimaryTitle title={"Personal Details"} />
                <div className='space-y-6 my-6'>
                    <TextInput placeholder={"First Name"} className={"w-full"} value={firstName} setValue={setFirstName} />
                    <TextInput placeholder={"Last Name"} className={"w-full"} value={lastName} setValue={setLastName} />
                    <TextInput placeholder={"Email"} className={"w-full"} value={email} setValue={setEmail} />
                    <TextInput placeholder={"Phone Number"} className={"w-full"} value={phoneNumber} setValue={setPhoneNumber} />
                    <DateInput className={"w-full"} value={dateOfBirth} setValue={setDateOfBirth} />
                    <TextAreaInput placeholder='Bio' className={"w-full"} value={bio} setValue={setBio} />
                    <SingleImageInput image={image} setImage={setImage} />
                </div>
            </div>
            <Button text={"Save Changes"} className={"bg-red-600 text-white w-full"} onClick={handleSubmit} />
        </div>
    )
}
