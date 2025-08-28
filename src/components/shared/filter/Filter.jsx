"use client";

import SelectInput from "../select-input/SelectInput";

export default function Filter({ category, setCategory, location, setLocation, categoryOptions, locationOptions }) {
    return (
        <div>
            {/* mobile filter */}
            <div className=" font-sans mt-8">
                <div className="grid grid-cols-2 gap-4 w-full lg:w-fit">
                    <SelectInput
                        options={categoryOptions}
                        value={category}
                        setValue={(value) => setCategory(value)}
                    />
                    <SelectInput
                        options={locationOptions}
                        value={location}
                        setValue={(value) => setLocation(value)}
                    />
                </div>
            </div>
        </div>
    )
}
