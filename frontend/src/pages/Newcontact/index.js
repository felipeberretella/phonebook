import React , {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md'

import api from '../../services/api'

import './index.css'

export default function New() {

    const [name, setName] = useState('')
    const [phoneNumber, setPhonenumber] = useState('')
    const [email, setEmail] = useState('')
    const [linkedIn, setLinkedIn] = useState('')
    const [facebook, setFacebook] = useState('')

    const history = useHistory()

    const userId = localStorage.getItem('userId')

    async function handleNewContact (e){
        e.preventDefault()

        const data = {name, phoneNumber, email, linkedIn, facebook }
        
        try {
            await api.post('network', data, {headers: {Authorization:userId}} )

            history.push('profile')

        }catch(err) {
            alert("erro, try again")
        }
    }
    return (
        <div className="register-contact">
            <div className="content">
                <section>
                    <h1> New contact ! </h1>
                    <p> start creating connections ! </p>
                    
                </section>

                <form onSubmit={handleNewContact}>
                    <input 
                        placeholder="Name"
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    /> 
                    <input 
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={e=> setPhonenumber(e.target.value)}
                    />
                    <input 
                        placeholder="e-mail"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="url Facebook"
                        value={facebook}
                        onChange={e=> setFacebook(e.target.value)}
                    />
                    <input 
                        placeholder="url LinkedIn"
                        value={linkedIn}
                        onChange={e=> setLinkedIn(e.target.value)}
                    />

                    <button className="button" type="submit"> + add </button>

                    <Link to="/profile"> 
                        <MdKeyboardArrowLeft/> Back
                    </Link>
                </form>
            </div>
        </div>
    )
}