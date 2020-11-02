import React, { Component } from "react"
import Input from "../../Components/Input"
import { RegisterBtn } from "../../Components/Button"
import * as T from "../../Components/Typography"
import image from "../../images/eye.png"
import * as yup from "yup"
import { Link } from "react-router-dom"
import "./style.css"

class Form extends Component {
    state = {
        email: "",
        password: "",
        errors: {},
    }
    handleChange = (e) => {
        const { value, name } = e.target
        let _value = value
        this.setState({ [name]: _value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        const LogInSchema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
        })
        LogInSchema.validate({ email, password }, { abortEarly: false })
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
        const { email, password, errors } = this.state
        return (
            <form className="contanier-form" onSubmit={this.handleSubmit}>
                <Input
                    handleChange={this.handleChange}
                    name="email"
                    type="email"
                    placeholder="write Your Email"
                    value={email}
                    label="Your Email"
                    id="Email"
                    error={errors.email}
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
                    error={errors.password}
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
                        <Link
                            to="/SignUp"
                            className="link"
                            name="SignUp"
                            onClick={this.props.handleClick}
                        >
                            Register
                        </Link>,
                    ]}
                </T.H1>
            </form>
        )
    }
}

export default Form
