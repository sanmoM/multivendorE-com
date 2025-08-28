import Button from '@/components/shared/button/Button'
import DateInput from '@/components/shared/inputs/date-input/DateInput'
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import { setPrimaryInformation } from '@/lib/redux/features/userSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PersonalInfoModalContents({handleCloseModal}) {
    const personalInformation = useSelector(state => state?.user?.personalInformation);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(personalInformation?.firstName);
    const [lastName, setLastName] = useState(personalInformation?.lastName);
    const [email, setEmail] = useState(personalInformation?.email);
    const [phoneNumber, setPhoneNumber] = useState(personalInformation?.phoneNumber);
    const [dateOfBirth, setDateOfBirth] = useState(personalInformation?.dateOfBirth);
    const [bio, setBio] = useState(personalInformation?.bio);

    const handleSaveChanges = () => {
        dispatch(setPrimaryInformation({ firstName, lastName, email, phoneNumber, dateOfBirth, bio }));
        handleCloseModal();
    }
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
                </div>
            </div>
            <Button text={"Save Changes"} className={"bg-red-600 text-white w-full"} onClick={handleSaveChanges} />
        </div>
    )
}
