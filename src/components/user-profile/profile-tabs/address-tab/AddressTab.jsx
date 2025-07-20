import SelectInput from '@/components/shared/inputs/select-input/SelectInput'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import React from 'react'

export default function AddressTab() {
    return (
        <div class="">
            <div class="w-full">
                <h2 class="text-xl font-bold mb-5">Address Information</h2>
                <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    <SelectInput label="Country" options={[
                        {
                            label: 'Bangladesh',
                            value: 'BD',
                            selected: true,
                        },
                        {
                            label: 'India',
                            value: 'IN',
                            selected: false,
                        },
                        {
                            label: 'Pakistan',
                            value: 'PK',
                            selected: false,
                        },
                        {
                            label: 'Nepal',
                            value: 'NP',
                            selected: false,
                        },
                        {
                            label: 'USA',
                            value: 'US',
                            selected: false,
                        },
                        {
                            label: 'UK',
                            value: 'UK',
                            selected: false,
                        },
                    ]} />
                    <TextInput label="Village" placeholder="Village" />
                    <TextInput label="Thana / Upazila" placeholder="Thana / Upazila" />
                    <TextInput label="District" placeholder="District" />
                    <TextInput label="Division" placeholder="Division" />
                    <TextInput label="Postcode" placeholder="Postcode" />
                </div>

                <div class="mt-4 lg:mt-6 text-center">
                    <button
                        class="bg-black text-white px-8 py-3 duration-300 transition rounded-sm text-[16px] max-sm:text-[14px] font-bold hover:bg-white hover:text-black border hover:border-black"
                    >
                        Update Address
                    </button>
                </div>
            </div>
        </div>
    )
}
