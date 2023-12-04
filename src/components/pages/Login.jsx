import React from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import './Login.css'

function Login(props) {
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleEmailIdChange = (e) => {
        setLogin({
            ...login,
            email: e.target.value
        })
    }
    const handlePasswordChange = (e) => {
        setLogin({
            ...login,
            password: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Successful")
        navigate('/')
    }

    return (
        <div className="container">
            <div className="form_container">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label><strong>Email</strong></label>
                        <input type="email"
                            value={login.email}
                            onChange={handleEmailIdChange} required />
                    </div>
                    <div className="form-group">
                        <label><strong>Password</strong></label>
                        <input type="password"
                            value={login.password}
                            onChange={handlePasswordChange} required />
                    </div>
                    <button className="btn btn-success w-40" type="submit">Login</button>
                </form>
                <Link to='/ForgetPassword' className='nav-link'>Forget Password</Link>
                <Link to='/SignUp' className='nav-link'>Don't have an account?</Link>
            </div>

        </div>
    )
}
export default Login;