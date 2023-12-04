import { Link, Outlet } from "react-router-dom";
import './Footer.css'
import { BiLogoTwitter } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { RiContactsLine } from 'react-icons/ri'
import { FcAbout } from 'react-icons/fc'
import { HiOutlineHome } from 'react-icons/hi'
import { SiGnuprivacyguard } from 'react-icons/si'

const Footer = () => {

    return (
        <div>
            <footer className="bg-dark text-white p-5">
                <div className="container-fluid"
                    style={{
                        fontSize: '18px'
                    }}>
                    <div className="row">

                        <div className="col-lg px-3">
                            <div className='text-center'>
                                <br />
                                <Link to='/'><img src='../images/ELogo.png' alt='' style={{ width: 'auto', height: '100px' }} /></Link>
                            </div>
                        </div>

                        <div className="col-lg px-3">
                            <h5 className="text-light" >EBay</h5>
                            <h6>Hopeful Bidding!</h6>
                            <p className="pt-2">Get the best deals on eBay Auction Services when you shop the largest online selection at eBay.com.</p>
                        </div>

                        <div className="col-lg px-4" >
                            <h5 className="text-light">IMPORTANT LINKS</h5>
                            <li className="pt-2"> <Link to="/" id="link-list"><HiOutlineHome />  Home</Link></li>
                            <li className="pt-3"> <Link to="/ContactUs" id="link-list"><RiContactsLine />  Contact Us</Link></li>
                            <li className="pt-3"> <Link to="/AboutUs" id="link-list"><FcAbout />  About Us</Link></li>
                        </div>

                        <div className="col-lg px-4">
                            <h5 className="text-light">SECURITY AND PRIVACY</h5>
                            <li className="pt-2"> <Link to='/TermsAndCondition' id="link-list"><SiGnuprivacyguard />  Terms and conditions</Link></li>
                        </div>

                        <div className="col-lg px-4">
                            <h5 className="text-light">CONNECT WITH US</h5>
                            <li className="pt-2"> <Link to="" id="link-list"><BiLogoTwitter /> Twitter</Link></li>
                            <li className="pt-3"> <Link to="" id="link-list"><AiOutlineInstagram /> Instagram </Link></li>
                            <li className="pt-3"> <Link to="" id="link-list"><AiFillFacebook /> Facebook </Link></li>
                        </div>
                    </div>
                    <br />
                </div>
                <p className="cp-text text-center">
                    © Copyright 2015 Company Name. All rights reserved.
                </p>

                        
            </footer>






            <Outlet />
        </div>
    )
}

export default Footer;