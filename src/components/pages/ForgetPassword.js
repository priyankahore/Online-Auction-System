import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgetPassword.css'

const ForgetPassword = () => {


    const navigate = useNavigate()
    //define state variables for form input and errors
    const [formInput, setFormInput] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        successMsg: ''
    })

    const [formError, setFormError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })


    // Handle user input changes for foem fields
    const handleUserInput = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        })
    }




    const validateFormInput = (e) => {
        e.preventDefault()


        //Initialize an object to track input errors
        let inputError = {
            email: '',
            password: '',
            confirmPassword: '',
        }

        //check if email and password are empty
        if (!formInput.email && !formInput.password) {
            setFormError({
                ...inputError,
                email: "Enter a valid email address",
                password: "Password should not be empty",
            })

            return;
        }

        //check if email is empty
        if (!formInput.email) {
            setFormError({
                ...inputError,
                email: "Email can't be empty",
            });

            return;
        }

        //check if password and confirm password match
        if (formInput.confirmPassword !== formInput.password) {
            setFormError({
                ...inputError,
                confirmPassword: "Password and confirm password should be same",
            });

            return;
        }

        //check if password is empty
        if (!formInput.password) {
            setFormError({
                ...inputError,
                password: "Password can't be empty",
            });

            return;
        }



        //clear any previous errors and show success message
        setFormError(inputError);
        setFormInput((prevState) => ({
            ...prevState,
            successMsg: "Password Reset Successfully ! Now click on Login",


        }))
    }

    const handleClick = () => {
        navigate("/Login")
    }


    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h4 className="title">Reset Password</h4>
                </div>
                <div className="">
                    <form onSubmit={validateFormInput}>
                        <p className="label"><strong>Email</strong></p>

                        <input
                            value={formInput.email}
                            onChange={({ target }) => {
                                handleUserInput(target.name, target.value)
                            }}
                            name="email"
                            type="text"
                            className="input"
                            placeholder="Enter Email"
                        />
                        <p className="error-message">{formError.email}</p>

                        <p className="label"><strong>New Password</strong></p>

                        <input
                            value={formInput.password}
                            onChange={({ target }) => {
                                handleUserInput(target.name, target.value)
                            }}
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Enter Password"
                        />
                        <p className="error-message">{formError.password}</p>

                        <p className="label"><strong>Confirm Password</strong></p>

                        <input
                            value={formInput.confirmPassword}
                            onChange={({ target }) => {
                                handleUserInput(target.name, target.value)
                            }}
                            name="confirmPassword"
                            type="password"
                            className="input"
                            placeholder="Confirm Password"
                        />
                        <p className="error-message">{formError.confirmPassword}</p>
                        <p className="success-message">{formInput.successMsg} </p>

                        <button className="btn btn-success" value="Submit"> Submit</button>
                        <button className="btn btn-warning m-1" onClick={handleClick}>
                            Login</button>
                        <button className="btn btn-danger m-3" type="reset"
                            onClick={() => setFormInput({

                                email: '',
                                password: '',
                                confirmPassword: '',
                                successMsg: ''

                            })}> Clear</button>
                    </form>
                </div>
            </div>
        </div>

    )

    // return (
    //     <div className="container">
    //         <div className="form_container">
    //             <h2>RESET PASSWORD</h2>
    //             <form onSubmit={validateFormInput}>

    //                 {/* email input */}
    //                 <div className="form-group">
    //                     <label><strong>Email</strong></label>
    //                     <input type="email"
    //                         name="email"
    //                         value={formInput.email}
    //                         onChange={({ target }) => {
    //                             handleUserInput( target.name, target.value )

    //                         }}
    //                       /*  onChange={handleEmailIdChange}*/ required
    //                     />
    //                     <p className="error-message">{formError.email}</p>
    //                 </div>

    //                 {/* password input */}
    //                 <div className="form-group">
    //                     <label><strong>Password</strong></label>
    //                     <input type="password"
    //                         name="password"
    //                         value={formInput.password}
    //                         onChange={({target})=>{
    //                             handleUserInput(target.name,target.value)
    //                         }}
    //                         /*onChange={handlePasswordChange}*/ required
    //                     />
    //                     <p className="error-message">{formError.password}</p>
    //                 </div>

    //                 {/* confirm password input */}
    //                 <div className="form-group">
    //                     <label><strong>Confirm Password</strong></label>
    //                     <input type="confirmPassword"
    //                         name="confirmPassword"
    //                         value={formInput.confirmPassword}
    //                         onChange={({ target }) => {
    //                             handleUserInput( target.name, target.value )
    //                         }}
    //                         /*onChange={handleConfirmPasswordChange}*/ required
    //                     />
    //                     <p className="error-message">{formError.confirmPassword}</p>
    //                     <p className="success-message">{formInput.successMsg}</p>
    //                 </div>

    //                 <button className="btn btn-primary" type="submit">Reset</button>
    //                 <button className="btn btn-primary m-2" type="submit">Login</button>
    //             </form>

    //         </div>

    //     </div>
    // )

}
export default ForgetPassword