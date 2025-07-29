import { RiExpandUpDownLine } from "react-icons/ri";

const CakeOptionSelect = ({ label, value, onChange, options }) => (
    <div className="">
        <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="block text-lg font-semibold text-primary mb-2">
            {label}
        </label>
        <div className="relative">
            <select
                id={label.toLowerCase().replace(/\s/g, '-')}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-4 border-2 outline-none !border-secondary/50 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-none appearance-none pr-10"
            >
                <option value="" disabled></option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
                <RiExpandUpDownLine className='w-6 h-6 text-secondary' />
            </div>
        </div>
    </div>
);

export default CakeOptionSelect;