import Button from '@/components/shared/button/Button';
import CheckBox from '@/components/shared/inputs/check-box/CheckBox';
import TextAreaInput from '@/components/shared/inputs/text-area-input/TextAreaInput';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import useAuthAxios from '@/hooks/useAuthAxios';
import { handleMobileNumberChange } from '@/utils/number-validation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function SellerInfoModalContents({ handleCloseModal }) {
    const user = useSelector((state) => state.user?.user);
    const [businessName, setBusinessName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [description, setDescription] = useState("");

    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (payload) => {
            const res = await axios.post('/reseller/create', payload);
            return res.data;
        },
        onSuccess: (data) => {
            toast.success('Registered successfully!');
            handleCloseModal();
            queryClient.invalidateQueries({ queryKey: ['personal-info'] });
        },
        onError: (error) => {
            toast.error('Something went wrong while registering.');
            console.error('Mutation error:', error);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            businessName === '' ||
            contactNumber === '' ||
            emailAddress === '' ||
            businessAddress === '' ||
            description === '' ||
            !termsAndConditions
        ) {
            toast.error('Please fill in all fields');
            return;
        }

        mutation.mutate({
            customer_id: user?.id,
            business_name: businessName,
            mobile_number: contactNumber,
            email: emailAddress,
            bussiness_address: businessAddress,
            product_description: description,
        });
    };


    useEffect(() => {
        setBusinessName(user?.reseller?.business_name || "");
        setContactNumber(user?.reseller?.mobile_number || "");
        setEmailAddress(user?.reseller?.email || "");
        setBusinessAddress(user?.reseller?.bussiness_address || "");
        setTermsAndConditions(user?.reseller?.terms_and_conditions || false);
        setDescription(user?.reseller?.product_description || "");
        setTermsAndConditions(user?.reseller ? true : false);
    }, [user]);

    return (
        <form className="flex flex-col h-full pt-2" onSubmit={handleSubmit}>
            <div className="grow space-y-4">
                <TextInput placeholder="Business Name" value={businessName} setValue={setBusinessName} />
                <TextInput
                    placeholder="Contact Number"
                    value={contactNumber}
                    setValue={(value) => setContactNumber(handleMobileNumberChange(value))}
                    isNumber
                />
                <TextInput placeholder="Email Address" value={emailAddress} setValue={setEmailAddress} type="email" />
                <TextInput placeholder="Business Address" value={businessAddress} setValue={setBusinessAddress} />
                <TextAreaInput
                    placeholder="Product Description"
                    value={description}
                    setValue={setDescription}
                    inputClassName="resize-none h-40"
                />
                <div className="flex items-center gap-2">
                    <CheckBox
                        checked={user?.reseller ? true : false}
                        label="I agree to the terms and conditions"
                        setChecked={user?.reseller ? () => { } : setTermsAndConditions}
                    />
                    <p className="text-primary text-sm lg:text-base">I agree to the terms and conditions</p>
                </div>
            </div>
            <Button
                type="submit"
                text={user?.is_reseller === "0" ? "Register" : "Update"}
                className="bg-red-600 text-white w-full"
                disabled={mutation.isPending}
            />
        </form>
    );
}
