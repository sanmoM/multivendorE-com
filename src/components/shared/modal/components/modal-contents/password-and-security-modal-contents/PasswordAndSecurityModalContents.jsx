import Button from '@/components/shared/button/Button';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import useAuthAxios from '@/hooks/useAuthAxios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PasswordAndSecurityModalContents({ handleCloseModal }) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const axios = useAuthAxios();
    const handleSaveChanges = () => {
        if (newPassword !== confirmNewPassword) {
            toast.error("Passwords do not match");
            return;
        };
        axios.patch("/password-update-customer", {
            current_password: currentPassword,
            new_password: newPassword
        }).then(() => {
            handleCloseModal();
            toast.success("Password changed successfully");
        }).catch((error) => {
            toast.error("Failed to change password");
        });
    }
    return (
        <div className=" w-full flex flex-col h-full justify-between">
            <div>
                <PrimaryTitle title={"Change Password"} />
                <div className='space-y-6 my-6'>
                    <TextInput placeholder={"Current Password"} className={"w-full"} value={currentPassword} setValue={setCurrentPassword} type={"password"} />
                    <TextInput placeholder={"New Password"} className={"w-full"} value={newPassword} setValue={setNewPassword} type={"password"} />
                    <TextInput placeholder={"Confirm New Password"} className={"w-full"} value={confirmNewPassword} setValue={setConfirmNewPassword} type={"password"} />
                </div>
            </div>
            <Button text={"Save Changes"} className={"bg-red-600 text-white w-full"} onClick={handleSaveChanges} />
        </div>
    )
}
