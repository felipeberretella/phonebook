import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md' 

import api from '../../services/api'
import './index.css'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()
    async function handleRegister (e) {
        e.preventDefault()

        const data = {name, email, password}

        try{ 
            const response = await api.post('create', data)
            alert(` Enrollment successful, your Id: ${response.data.id}`)
            history.push("/")
        }catch {
            alert('Erro, try again')
        }
    }
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1> SUBSCRIBE </h1>

                    <p> Welcome to your Phonebook ! </p>
                    
                </section>

                <form onSubmit={handleRegister} >
                    <input 
                        placeholder="Your name"
                        value={name}
                        onChange={e =>setName(e.target.value)}
                    /> 

                    <input 
                        type="email"
                        placeholder="Your e-mail address"
                        value={email}
                        onChange={e =>setEmail(e.target.value)}
                    />

                    <input 
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={e =>setPassword(e.target.value)}
                    />

                   

                    <button className="button" type="submit"> SUBMIT </button>

                    <Link to="/"> 
                        <MdKeyboardArrowLeft size={17} color='#00000' />
                        Already have an account? Sing in
                    </Link>

                </form>
            </div>
        </div>
    )
}