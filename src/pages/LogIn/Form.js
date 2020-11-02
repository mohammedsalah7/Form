import React, { Component } from "react"
import Input from "../../Components/Input"
import { RegisterBtn } from "../../Components/Button"
import * as T from "../../Components/Typography"
import image from "../../images/eye.png"
import "./style.css"

class Form extends Component {
    state = {
        email: "",
        password: "",
    }
    handleChange = (e) => {
        const { value, name } = e.target
        let _value = value
        this.setState({ [name]: _value })
    }
    handleClick = (e) => {
        e.preventDefault()
    }
    render() {
        const { email, password } = this.state
        return (
            <form className="contanier-form">
                <Input
                    handleChange={this.handleChange}
                    name="email"
                    type="email"
                    placeholder="write Your Email"
                    value={email}
                    label="Your Email"
                    id="Email"
                />
                <button className="img-eye">
                    <img src={image} alt="eye" />
                </button>

                <Input
                    handleChange={this.handleChange}
                    name="password"
                    type="password"
                    placeholder="Enter Your password"
                    value={password}
                    label=" Enter Your Password"
                    id="password"
                />

                <RegisterBtn
                    className="google-btn"
                    handleClick={this.handleClick}
                >
                    Login
                </RegisterBtn>
                <T.H1 className="new-accout">
                    {[
                        "Don’t have an account? ",
                        <a
                            className="link"
                            href="#52"
                            name="SignUp"
                            onClick={this.props.handleClick}
                        >
                            Register
                        </a>,
                    ]}
                </T.H1>
            </form>
        )
    }
}

export default Form
