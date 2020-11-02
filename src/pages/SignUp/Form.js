import React, { Component } from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"
import { RegisterBtn, LogInBtn, OR } from "../../Components/Button"
import { Link } from "react-router-dom"
import * as yup from "yup"
import "./style.css"
class Form extends Component {
    state = {
        email: "",
        password: "",
        rePassword: "",
        checked: "",
        errors: {},
    }
    handleChange = (e) => {
        const { value, name, checked } = e.target
        let _value = value
        if (name === "checked") {
            _value = checked
        }
        this.setState({ [name]: _value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, rePassword, checked } = this.state
        const SignUpSchema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
            rePassword: yup.string().required(),
            checked: yup.boolean().typeError("You must check").required(),
        })
        SignUpSchema.validate(
            { email, password, rePassword, checked },
            { abortEarly: false }
        )
            .then((data) => {
                console.log("valid")
                console.log(data)
            })
            .catch((err) => {
                console.log("Invalid")

                console.log(err)
                const errors = {}
                err.inner.forEach(({ message, params }) => {
                    errors[params.path] = message
                })
                this.setState({ errors })
            })
    }
    render() {
        const { email, password, rePassword, checked, errors } = this.state
        return (
            <form className="contanier-form" onSubmit={this.handleSubmit}>
                <Input
                    handleChange={this.handleChange}
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    label="Email address"
                    id="Email"
                    error={errors.email}
                />
                <Input
                    handleChange={this.handleChange}
                    name="password"
                    type="password"
                    placeholder="Enter Your password"
                    value={password}
                    label="Create password"
                    id="password"
                    error={errors.password}
                />
                <Input
                    handleChange={this.handleChange}
                    name="rePassword"
                    type="password"
                    placeholder="Repeat password"
                    value={rePassword}
                    label="Repeat password"
                    id="rePassword"
                    error={errors.rePassword}
                />
                <Checkbox
                    checked={checked}
                    handleChange={this.handleChange}
                    name="checked"
                    type="checkbox"
                    Text="I agree to terms & conditions"
                    error={errors.checked}
                />
                <RegisterBtn className="register-btn-signup">
                    Register
                </RegisterBtn>
                <OR className="or" />
                <Link to="/" className="link-page">
                    <LogInBtn className="login-btn-signup"> Log In</LogInBtn>
                </Link>
            </form>
        )
    }
}

export default Form
