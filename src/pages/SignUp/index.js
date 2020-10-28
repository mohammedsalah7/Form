import React from 'react'
import './style.css'
import Form from './Form'
import Logo from '../../components/Logo/index'
import Back from '../../components/Back/index'
import Quote from '../../components/Quote/index'

function SingUp() {
    return (
        <div className="contanier">
            <aside className="left-side">
                <Logo size="small" />
                <Quote type="fill" />
            </aside>
            <section className="right-side">
                <Back />
                <div className="info-form">
                    <h2>Register Individual Account!</h2>
                    <p className="descraption">
                        For the purpose of gamers regulation, your details are
                        required.
                    </p>

                    <Form />
                </div>
            </section>
        </div>
    )
}

export default SingUp
