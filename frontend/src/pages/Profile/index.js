import React, {useState, useEffect} from 'react'
import {MdPersonAdd, MdDelete  } from 'react-icons/md'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'
import './index.css'
import Logo from '../../assets/network.svg'


export default function Profile(){

    const [network, setNetwork] = useState([])
    const userName = localStorage.getItem('userName')
    const userId = localStorage.getItem('userId')
    const history = useHistory()

    useEffect(()=>{
        api.get('network', { headers:{ Authorization: userId } })
        .then( response => {
            setNetwork(response.data)
        })

    }, [userId])

    async function handleDeleteContact(id){
        try{
            await api.delete(`network/${id}`, { headers:{ Authorization: userId } })
            setNetwork(network.filter(network => network.id !== id))

        }catch (err){
            alert("erro, try again")
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Network"/>

                <span>Welcome {userName} ! This is your network </span>

                <div>
                    <Link className="button-network" to="/new">
                        <MdPersonAdd/> add  
                    </Link>

                    <button 
                        className="button-network"
                        onClick={handleLogout}
                    > 
                            Logout
                    </button>
                </div>
            </header>

            <form action=""> 
                <input placeholder="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"/>
            </form>
           
           <ul>
               {network.map(contact => (
                    <li key={contact.id} >

                        <strong> {contact.name} </strong>
                        <p> {contact.phoneNumber} </p>
                        <p> {contact.email} </p>
                        <p> {contact.linkedIn} </p>
                        <p> {contact.facebook} </p>
                        <button onClick={()=>{handleDeleteContact(contact.id)}}>
                            <MdDelete size={16} />
                        </button>

                    </li>     
               ))}           
           </ul>       
        </div>
    )
}