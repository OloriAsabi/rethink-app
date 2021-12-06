import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container">
            <div className="title">
                <h1>SIGN IN</h1> 
                <form className="form">
                    <input className="input" placeholder="username"/> 
                    <input className="input" placeholder="password"/> 
                    <button className="btn">LOGIN</button>
                    <Link to="/" className="link">Do Not You Remember The Password</Link>
                    <Link to="/" className="link">Create A New Account</Link>
                </form>      
        </div> 

        </div>
    )
    
}
