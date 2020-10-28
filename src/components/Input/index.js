import React from 'react'
import './style.css'
function Input(props) {
    const { handleChange, name, type, value, label, placeholder } = props

    return (
        <div className="contanier-input">
            <label className="title-label" htmlFor={name}>
                {label}
            </label>
            <input
                className="input"
                name={name}
                type={type}
                id={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
