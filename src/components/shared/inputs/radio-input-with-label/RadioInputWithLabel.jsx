import RadioInput from '../radio-input/RadioInput'

export default function RadioInputWithLabel({ option, handleChange=()=>{}, checked=false }) {
    return (
        <div className='flex items-center space-x-2'>
            <RadioInput onChange={handleChange} checked={checked} />
            <p className="text-sm text-gray-700">{option}</p>
        </div>
    )
}
