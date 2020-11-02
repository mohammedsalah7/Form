import React, { Component } from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"
import { RegisterBtn, LogInBtn, OR } from "../../Components/Button"
import "./style.css"
import { Link } from "react-router-dom"
class Form extends Component {
    state = {
        email: "",
        password: "",
        rePassword: "",
        checked: "",
    }
    handleChange = (e) => {
        const { value, name, checked } = e.target
        let _value = value
        if (name === "checked") {
            _value = checked
        }
        this.setState({ [name]: _value })
    }
    handleClick = (e) => {
        e.preventDefault()
    }
    render() {
        const { email, password, rePassword, checked } = this.state
        return (
            <form className="contanier-form">
                <Input
                    handleChange={this.handleChange}
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    label="Email address"
                    id="Email"
                />
                <Input
                    handleChange={this.handleChange}
                    name="password"
                    type="password"
                    placeholder="Enter Your password"
                    value={password}
                    label="Create password"
                    id="password"
                />
                <Input
                    handleChange={this.handleChange}
                    name="rePassword"
                    type="password"
                    placeholder="Repeat password"
                    value={rePassword}
                    label="Repeat password"
                    id="rePassword"
                />
                <Checkbox
                    checked={checked}
                    handleChange={this.handleChange}
                    name="checked"
                    type="checkbox"
                    Text="I agree to terms & conditions"
                />
                <RegisterBtn
                    className="register-btn-signup"
                    handleClick={this.handleClick}
                >
                    {" "}
                    Register
                </RegisterBtn>
                <OR className="or" />
                <LogInBtn
                    className="login-btn-signup"
                    handleClick={this.handleClick}
                >
                    <Link to="/LogIn" className="link-page">
                        {" "}
                        Log In
                    </Link>
                </LogInBtn>
            </form>
        )
    }
}

export default Form
