import React from 'react'
import {MdPersonAdd  } from 'react-icons/md'
import {Link} from 'react-router-dom'
import './index.css'
import Logo from '../../assets/network.svg'

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Network"/>

                <span>Welcome 'Name' ! This is your network </span>

                <div>
                    <button className="button-network"> 
                        <MdPersonAdd/>
                    </button>

                    <Link className="button-network" to="/"> Logout </Link>

                </div>
                
            </header>
        </div>
    )
}