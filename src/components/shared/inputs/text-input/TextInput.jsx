import { cn } from '@/utils/cn';
import { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function TextInput({ label, placeholder, value, setValue, type = "text", variant, labelClass, inputClass, className, isRequired = false, autoComplete = "off" }) {
    const [showPassword, setShowPassword] = useState(false);
    const [localType, setLocalType] = useState(type);
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {
                label && (
                    <label htmlFor="fname" className={cn("text-[16px] max-sm:text-[14px]", variant === "small" && "text-sm", labelClass)}
                        dangerouslySetInnerHTML={{ __html: label }}
                    ></label>
                )
            }
            <div className='relative'>
                <input
                    type={localType}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    name="fname"
                    // id="fname"
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    required={isRequired}
                    className={cn(`w-full px-5 py-3 border rounded-lg shadow-sm max-sm:text-sm bg-tertiary placeholder:text-secondary focus:outline-1 outline-secondary`, variant === "small" && "text-sm py-2", variant === "medium" && "py-2.5", inputClass)}
                />
                {
                    type === "password" && (
                        <div className='absolute top-1/2 -translate-y-1/2 right-4'>
                            {
                                showPassword ? (<IoIosEye className="text-secondary cursor-pointer text-lg lg:text-xl" onClick={() => {
                                    setShowPassword(false)
                                    setLocalType("password")
                                }} />) : (<IoIosEyeOff className="text-secondary cursor-pointer text-lg lg:text-xl" onClick={() => {
                                    setShowPassword(true)
                                    setLocalType("text")
                                }} />)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
