import React from 'react'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {Link} from 'react-router-dom'

import './index.css'

import phonebookImg from '../../assets/phonebook.png'

export default function Logon() {
    return (
        <div className="logon-container">
            
                <section className="form">
                    <form >
                        <h1> Sign in to your account </h1>

                        <input type="email" placeholder="Your e-mail address"/>

                        <input type="password" placeholder="Your password"/>

                        <button className="button" type="submit">Login</button>

                        <MdKeyboardArrowLeft size={17} color='#00000' />

                        <Link to="/create"> Need an account? Create one </Link>

                    </form>
                </section>

                <img src={phonebookImg} alt="phoneBook" />
            
        </div>
    )
}
