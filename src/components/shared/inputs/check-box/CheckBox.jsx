import React from 'react'

export default function CheckBox({ checked, setChecked }) {
    return (
        <input type="checkbox" className="accent-secondary h-4 w-4" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    )
}
