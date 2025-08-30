import Button from '@/components/shared/button/Button';
import CheckBox from '@/components/shared/inputs/check-box/CheckBox';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import useAuthAxios from '@/hooks/useAuthAxios';
import { handleMobileNumberChange } from '@/utils/number-validation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function BecomeASellerModalContents({ handleCloseModal }) {
    // const dispatch = useDispatch();
    const [businessName, setBusinessName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState(false);

    const axios = useAuthAxios()
    const handleSubmit = (e) => {
        e.preventDefault();

        if (businessName === "" || contactNumber === "" || emailAddress === "" || businessAddress === "" || !termsAndConditions) {
            toast.error("Please fill in all fields");
            return;
        }
        // dispatch(setAccountType({ accountType: "seller" }));
        axios.post("/reseller/create", {
            businessName,
            contactNumber,
            emailAddress,
            businessAddress
        }).then((res) => {
            handleCloseModal();
        });
    };
    return (
        <form className='flex flex-col h-full' onSubmit={handleSubmit}>
            <div className='grow space-y-4'>
                <TextInput placeholder={"Business Name"} value={businessName} setValue={setBusinessName} />
                <TextInput placeholder={"Contact Number"} value={contactNumber} setValue={(value) => setContactNumber(handleMobileNumberChange(value))} isNumber />
                <TextInput placeholder={"Email Address"} value={emailAddress} setValue={setEmailAddress} />
                <TextInput placeholder={"Business Address"} value={businessAddress} setValue={setBusinessAddress} />
                <div className='flex items-center gap-2'>
                    <CheckBox checked={termsAndConditions} label={"I agree to the terms and conditions"} setChecked={setTermsAndConditions} />
                    <p className='text-primary text-sm lg:text-base'>I agree to the terms and conditions</p>
                </div>
            </div>
            <Button type='submit' text={"Register"} className={"bg-red-600 text-white w-full"} />
        </form>
    )
}
