
import { useState } from "react"
const ContactUs = () => {
    const [contactUs, setContactUs] = useState({
        name: undefined,
        mobileNo: undefined,
        emailId: undefined,
        subject: undefined,
        message: undefined

    })

    const myStyles = {
        color: '#FE691E',
        paddingTop: '220px',
        textAlign: 'center',
        fontSize:'50px'
        
    };

    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleNameChange = (e) => {
        setContactUs({ ...contactUs, name: e.target.value })
    }

    const handlemobileNoChange = (e) => {
        setContactUs({ ...contactUs, mobileNo: e.target.value })
    }

    const handleEmailIdChange = (e) => {
        setContactUs({ ...contactUs, emailId: e.target.value })
    }

    const handleSubjectChange = (e) => {
        setContactUs({ ...contactUs, subject: e.target.value })
    }

    const handleMessageChange = (e) => {
        setContactUs({ ...contactUs, message: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form submitted successfully !");
        setIsSubmitted(true);

    }


    return (
    
            <div className=" ">
                <div className="container">
                    <div className="row mb-3 ">
                        <h1 className="heading p-4 text-center">Connect With Us </h1>
                        <div className="col-sm-7 mt-4">
                            <img src="../images/caurosal5.jpeg" alt="" classsName="" />
                        </div>
                        <div className="col-sm-5 " >
                            {!isSubmitted &&
                                <div className="contact-form bg-success-subtle border border-3 border-primary-subtle rounded p-3" >
                                    <h4 className="p-2">Let's Have Conversation !</h4>
                                    <form onSubmit={handleSubmit}>

                                        <div class="mb-3">
                                            <label for="name" className="form-label">Name:</label>
                                            <input type="text" className="form-control" id="name" name="name" value={contactUs.name} onChange={handleNameChange} required />
                                        </div>
                                        <div class="mb-3">
                                            <label for="mobile" className="form-label">Mobile Number:</label>
                                            <input type="number" className="form-control" value={contactUs.mobileNo} onChange={handlemobileNoChange} pattern="[789][0-9]{9}" required />
                                        </div>

                                        <div class="mb-3">
                                            <label for="email" className="form-label">Email Address:</label>
                                            <input type="email" className="form-control" id="email" name="email" value={contactUs.emailId} onChange={handleEmailIdChange} required />
                                        </div>

                                        <div class="mb-3">
                                            <label for="subject" className="form-label">Subject:</label>
                                            <input type="text" className="form-control" id="subject" name="subject" value={contactUs.subject} onChange={handleSubjectChange} required />
                                        </div>


                                        <div class="mb-3">
                                            <label for="message" className="form-label">Message:</label>
                                            <input className="form-control" id="message" name="message"  value={contactUs.message} onChange={handleMessageChange} required/>
                                        </div>

                                        <div class="mb-1">
                                            <button type="submit" className="btn btn-primary m-2">Submit</button>
                                            <button type="reset" className="btn btn-secondary m-2" onClick={() => setContactUs({ name: undefined, mobileNo: undefined, emailId: undefined, subject: undefined, message: undefined })}>Cancel</button>
                                        </div>


                                    </form>
                                </div>
                            }
                             
                            {isSubmitted &&

                                <h2 style={myStyles} >Thank you for your message!...</h2>

                            }
                        </div>

                    </div>
                </div>
                <br/><br/><br/>
            </div>
     
    )
}

export default ContactUs