import TextInput from '@/components/shared/inputs/text-input/TextInput'
import React from 'react'

export default function AuthTextInput({ value, setValue, label, placeholder, isRequired = false, type = "text" }) {
    return (
        <TextInput labelClass={"text-sm"} inputClass={"text-sm shadow-none"} label={`${label} ${isRequired && "<span style=color:red>*</span>"}`} placeholder={placeholder} value={value} setValue={setValue} isRequired={isRequired} type={type} />
    )
}
