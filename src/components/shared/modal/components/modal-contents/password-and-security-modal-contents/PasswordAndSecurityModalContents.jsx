import Button from '@/components/shared/button/Button';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import { useState } from 'react';

export default function PasswordAndSecurityModalContents({ handleCloseModal }) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleSaveChanges = () => {
        console.log(currentPassword, newPassword, confirmNewPassword);
        handleCloseModal();
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
