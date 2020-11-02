import React, { Component } from "react"

import "./style.css"

import "./style.css"
class Button extends Component {
    render() {
        const { handleClick, children } = this.props
        return (
            <div className="container-btn">
                <button className="register-btn" onClick={handleClick}>
                    {children}
                </button>
                <span className="or">Or</span>
                <button className="google-btn">
                    <span className="span-Login">{children}</span>
                </button>
            </div>
        )
    }
}
export default Button

export const RegisterBtn = (props) => {
    const { children, className, handleClick } = props
    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}
export const LogInBtn = (props) => {
    const { children, className, handleClick } = props
    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}
export const OR = (props) => {
    const { className } = props
    return <span className={className}>Or</span>
}
