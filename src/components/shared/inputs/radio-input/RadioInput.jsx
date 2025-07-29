import './radio-input.css'

export default function RadioInput({ disabled, onChange }) {
    return (
        <input type="radio" name="e" disabled={disabled} onChange={onChange} />
    )
}
