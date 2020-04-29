import React from 'react'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md' 
import './index.css'

export default function Register() {
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1> SUBSCRIBE </h1>
                    <p> Welcome to your Phonebook ! </p>
                    
                </section>

                <form>
                    <input placeholder="Your name"/> 
                    <input placeholder="Your e-mail address"/>
                    <input placeholder="Your password"/>
                    <input placeholder="Confirm password"/>

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