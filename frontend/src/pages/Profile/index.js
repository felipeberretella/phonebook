import React from 'react'
import {MdPersonAdd, MdDelete  } from 'react-icons/md'
import {Link} from 'react-router-dom'
import './index.css'
import Logo from '../../assets/network.svg'

export default function Profile(){

    const userName = localStorage.getItem('userName')
    const userId = localStorage.getItem('userId')

    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Network"/>

                <span>Welcome {userName} ! This is your network </span>

                <div>
                    <Link className="button-network" to="/new">
                        <MdPersonAdd/> add  
                    </Link>

                    <button className="button-network"> 
                        Logout
                    </button>


                </div>
            </header>

            <form action=""> 
                <input placeholder="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"/>
            </form>
           
           <ul>
                <li>
                    <strong> Felipe </strong>
                    <p> +55 (11) 99999-9999 </p>
                    <p> contact@contact.com </p>
                    <p> urlfacebook </p>
                    <p> urllinkedIn </p>
                    <button>
                        <MdDelete size={16} />
                    </button>
                </li>
                <li>
                    <strong> Felipe </strong>
                    <p> +55 (11) 99999-9999 </p>
                    <p> contact@contact.com </p>
                    <p> urlfacebook </p>
                    <p> urllinkedIn </p>
                    <button>
                        <MdDelete size={16} />
                    </button>
                </li>
                <li>
                    <strong> Felipe </strong>
                    <p> +55 (11) 99999-9999 </p>
                    <p> contact@contact.com </p>
                    <p> urlfacebook </p>
                    <p> urllinkedIn </p>
                    <button>
                        <MdDelete size={16} />
                    </button>
                </li>
                <li>
                    <strong> Felipe </strong>
                    <p> +55 (11) 99999-9999 </p>
                    <p> contact@contact.com</p>
                    <p> urlfacebook </p>
                    <p> urllinkedIn </p>
                    <button>
                        <MdDelete size={16} />
                    </button>
                </li>
                <li>
                    <strong> Felipe </strong>
                    <p> +55 (11) 99999-9999 </p>
                    <p> contact@contact.com </p>
                    <p> urlfacebook </p>
                    <p> urllinkedIn </p>
                    <button>
                        <MdDelete size={16} />
                    </button>
                </li>
                
           </ul>
           
        </div>
    )
}