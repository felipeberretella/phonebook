import React, {useState} from 'react'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'
import './index.css'

import phonebookImg from '../../assets/phonebook.png'


export default function Logon() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleLogon(e){

        e.preventDefault()

        const data = {email, password}
        
        try {
            const response = await api.post('session', data)
            
            localStorage.setItem('userName', response.data.name)
            localStorage.setItem('userId', response.data.id)

            history.push('profile')

        } catch {
            alert("incorrect email or password")
        }
    }

    return (
        <div className="logon-container">
            
                <section className="form">
                    <form onSubmit={handleLogon} >
                        <h1> Sign in to your account </h1>

                        <input 
                            value={email}
                            type="email" 
                            placeholder="Your e-mail address"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input 
                            value={password}
                            type="password" 
                            placeholder="Your password"
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="button" type="submit">Login</button>

                        <MdKeyboardArrowLeft size={17} color='#00000' />

                        <Link to="/create"> Need an account? Create one </Link>

                    </form>
                </section>

                <img src={phonebookImg} alt="phoneBook" />
            
        </div>
    )
}
