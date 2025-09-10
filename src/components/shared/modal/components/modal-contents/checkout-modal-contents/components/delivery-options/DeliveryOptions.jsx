"use client";

import RadioInput from '@/components/shared/inputs/radio-input/RadioInput';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';

export default function DeliveryOptions({ options, selectedOption, setSelectedOption }) {
    return (
        <div className="lg:w-[70%]" id='delivery'>
            <PrimaryTitle title={"Delivery Options"} className={"mb-6"} />
            <div className="space-y-4">
                {options.map((option, index) => (
                    <label
                        key={index}
                        className={`flex gap-2 items-center rounded-lg cursor-pointer transition-colors duration-200 `}
                    >
                        <RadioInput
                            onChange={() => setSelectedOption(option)}
                            checked={selectedOption?.value === option?.value}
                        />
                        <p className="text-primary font-medium text-lg flex items-center gap-2">
                            {option?.Icon}
                            <span>{option?.label}</span>
                        </p>
                    </label>
                ))}
            </div>
        </div>
    )
}



