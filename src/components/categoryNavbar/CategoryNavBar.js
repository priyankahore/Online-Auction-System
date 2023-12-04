import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './CategoryNavBar.css'
import { FaSearch } from 'react-icons/fa'

const CategoryNavBar = () => {
    return (
        <div>
            <nav className='cnavbar navbar-expand-lg  navbar-light'>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0"
                    style={{ padding: '13px' }}>

                    <li className="nav-item ms-5"
                        style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        <li className='nav-link'>All Categories</li>
                    </li>

                    <li className="nav-item ms-5">
                        <Link to='/Car' className="nav-link active">Cars</Link>
                    </li>

                    <li className="nav-item ms-5">
                        <Link to='/Bike' className="nav-link">Bikes</Link>
                    </li>

                    <li className="nav-item ms-5">
                        <Link to='/Mobile' className="nav-link">Mobiles</Link>
                    </li>

                    <li className="nav-item ms-5">
                        <Link to='/Tv' className="nav-link">TV's</Link>
                    </li>

                    <li className="nav-item ms-5">
                        <Link to='/Laptop' className="nav-link">Laptops</Link>
                    </li>

                    <li className="nav-item ms-5">
                        <Link to='/Headphone' className="nav-link">Headphones</Link>
                    </li>

                    <div className='nav-item p-2 '>
                        <input type='text' placeholder='Type to search....'
                         style={{ width: '350px'}}></input>
                    <FaSearch size='1.2rem' color='#1b2430'/>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default CategoryNavBar;