import React, { Component } from "react"
import "./style.css"
class Checkbox extends Component {
    render() {
        const { checked, handleChange, name, type, Text } = this.props
        return (
            <form className="checkbox">
                <input
                    type={type}
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                    id={name}
                />
                <label htmlFor={name}>{Text}</label>
            </form>
        )
    }
}
export default Checkbox
