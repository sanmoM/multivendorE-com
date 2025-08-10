import './radio-input.css'

export default function RadioInput({ disabled, onChange, checked }) {
    return (
        <input type="radio" disabled={disabled} onChange={onChange} checked={checked} />
    )
}
