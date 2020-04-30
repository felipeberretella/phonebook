import React from 'react'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import './index.css'

export default function New() {
    
    return (
        <div className="register-contact">
            <div className="content">
                <section>
                    <h1> New contact ! </h1>
                    <p> start creating connections ! </p>
                    
                </section>

                <form>
                    <input placeholder="Name"/> 
                    <input placeholder="Phone number"/>
                    <input placeholder="e-mail"/>
                    <input placeholder="url Facebook"/>
                    <input placeholder="url LinkedIn"/>

                    <button className="button" type="submit"> + add </button>
                    <Link to="/profile"> 
                        <MdKeyboardArrowLeft/> Back
                    </Link>
                </form>
            </div>
        </div>
    )
}