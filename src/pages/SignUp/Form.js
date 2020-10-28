import React, { Component } from 'react'
import Input from '../../components/Input'
import Checkbox from '../../components/checkbox'
import Button from '../../components/button'
import './style.css'
class Form extends Component {
    state = {
        email: '',
        password: '',
        rePassword: '',
        checked: '',
    }
    handleChange = (e) => {
        const { value, name, checked } = e.target
        let _value = value
        if (name === 'checked') {
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
            <form className="contanier-form form-include">
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
                    labelTxt="I agree to terms & conditions"
                />

                <Button handleClick={this.handleClick} />
            </form>
        )
    }
}

export default Form
