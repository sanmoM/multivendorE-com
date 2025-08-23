import TextInput from '@/components/shared/inputs/text-input/TextInput'
import React from 'react'

export default function AuthTextInput({ value, setValue, label, placeholder, isRequired = false, type = "text", isNumber = false }) {
    const handleNumberChange = (value) => {
        const onlyNumbers = value.replace(/[^0-9]/g, "");
        if (onlyNumbers.length <= 11) {
            setValue(onlyNumbers);
        }
    };

    return (
        <TextInput labelClass={"text-sm"} inputClass={"text-sm shadow-none"} label={`${label} ${isRequired && "<span style=color:red>*</span>"}`} placeholder={placeholder} value={value} setValue={isNumber ? handleNumberChange : setValue} isRequired={isRequired} type={type} />
    )
}
