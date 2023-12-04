import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './NavBar.css'

import { FaAngleDoubleRight } from 'react-icons/fa'

import { RiAuctionFill } from 'react-icons/ri'

function NavBar(props) {
    return (
        <div>

            <div className='navigation-section'>
                <div className="nav">
                    <div className='left-side'>
                        <Link to='/'><img src='../images/ELogo.png' alt='img' className='px-5' /></Link>
                    </div>
                    <div className='right-side'>
                        <ul id="navbar">
                            <li><Link to='/' className='active-link'><RiAuctionFill size='1.5rem' /> Auction Home </Link></li>
                            <li><Link to='/AboutUs' className='active-link'>About Us</Link></li>
                            <li><Link to='/contactUs' className='active-link'>Contact Us</Link></li>
                            <li><Link to='/Login' className='active-link'>Login</Link></li>
                            <li><Link to='/SignUp' className='active-link'>Sign up</Link></li>
                            <Link to='/SellCategory'> <button type="button" className="btn btn-warning">Sell<FaAngleDoubleRight /></button></Link>
                        </ul>
                    </div>
                </div>

                <div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default NavBar;


