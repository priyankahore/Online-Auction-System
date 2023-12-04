import React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './SignUp.css'

function SignUp(props) {
    const navigate = useNavigate()

    const [signup, setSignUp] = useState({
        name: '',
        email: '',
        mobileno: '',
        password: '',
        confirmPassword: '',


    })


    const handleNameChange = (e) => {
        setSignUp({
            ...signup,
            name: e.target.value
        })

    }
    const handleEmailChange = (e) => {
        setSignUp({
            ...signup,
            email: e.target.value
        })

    }
    const handleMobileNoChange = (e) => {
        setSignUp({
            ...signup,
            mobileno: e.target.value
        })

    }

    const handlePasswordChange = (e) => {
        setSignUp({
            ...signup,
            password: e.target.value
        })

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("SignUp Successfully Done! ");
        navigate("/Login")

    }

    return (
        <div className='registration_container w-100  d-flex justify-content-center p-5'>
            <div className='registration_form mt-5 w-50'>
                <h3>SIGNUP</h3>
                <div className='form mt-3'>
                    <form className='form-group p-3' onSubmit={handleSubmit}>
                        <label><strong>Name:</strong></label>
                        <input className='form-control'
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={handleNameChange} required
                        />
                        <div className="row">
                            <div className="col-md-6">
                                <label><strong>Mobile No:</strong></label>
                                <input className='form-control'
                                    type="tel"
                                    id="mobileNumber"
                                    placeholder="Mobile No."
                                    pattern="\d{10}"
                                    onChange={handleMobileNoChange} required
                                />

                            </div>
                            <div className="col-md-6">
                                <label><strong>Email:</strong></label>
                                <input className='form-control'
                                    type="email"
                                    placeholder="Enter Your Email"
                                    onChange={handleEmailChange} required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label className="mt-4"><strong>Password:</strong></label>
                                <input className='form-control'
                                    type="password"
                                    placeholder="Enter Password"
                                    onChange={handlePasswordChange} required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="mt-4"><strong>Confirm Password:</strong></label>
                                <input className='form-control'
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handlePasswordChange} required
                                />

                            </div>
                        </div>



                        <div className="mt-1">
                            <button className="btn btn-success w-20 m-2" type="submit"> SignUp</button>
                            <button className="btn btn-primary w-20 m-2" type="reset"
                                onClick={() => setSignUp({
                                    name: '',
                                    email: '',
                                    mobileNo: '',
                                    password: '',
                                    confirmPassword: '',
                                })}> Reset</button>




                        </div>

                    </form>
                    <Link to='/Login' className='nav-link'>Already have an account?</Link>
                </div>

            </div >
        </div >
    )
}

export default SignUp;