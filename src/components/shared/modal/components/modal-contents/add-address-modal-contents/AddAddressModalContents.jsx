import Button from '@/components/shared/button/Button';
import TextInput from '@/components/shared/inputs/text-input/TextInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';

const AddAddressModalContents = ({ handleAddAddress }) => {

    return (
        <div className=" w-full flex flex-col h-full justify-between">
            <div>
                <PrimaryTitle title={"Address Details"} />
                <div className='space-y-6'>
                    <TextInput placeholder={"Street"} className={"w-full"} />
                    <TextInput placeholder={"City"} className={"w-full"} />
                    <TextInput placeholder={"State"} className={"w-full"} />
                    <TextInput placeholder={"Zip Code"} className={"w-full"} />
                    <TextInput placeholder={"Country"} className={"w-full"} />
                </div>
            </div>

            <Button text={"Add Address"} className={"bg-red-600 text-white w-full"} onClick={handleAddAddress} />
        </div>
    );
};

export default AddAddressModalContents;
