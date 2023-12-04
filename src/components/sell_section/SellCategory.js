import React from 'react';
import { Link } from 'react-router-dom';
const SellCategory = () => {
    return (
        <div className='container-fluid rounded border border-dark bg-light m-5 p-5' style={{ width: '60vw' }}>
            <h3 class="h3">Select Your Category</h3>
            <ul class="list-group" >
                <li class="list-group-item">
                    <Link className='link text-decoration-none text-dark fw-bold' to="/SellCar">Car</Link>
                </li>
                <li class="list-group-item">
                    <Link className="link text-decoration-none text-dark fw-bold" to="/SellLaptop">Laptop</Link>
                </li>
                <li class="list-group-item">
                    <Link className='link text-decoration-none text-dark fw-bold' to="/SellMobile">Mobile</Link>
                </li>
                <li class="list-group-item">
                    <Link className='link text-decoration-none text-dark fw-bold' to="/SellBike">Bike</Link>
                </li>
                <li class="list-group-item">
                    <Link className='link text-decoration-none text-dark fw-bold' to="/SellTv">TV</Link>
                </li>
                <li class="list-group-item">
                    <Link className='link text-decoration-none text-dark fw-bold' to="/SellHeadPhone">HeadPhone</Link>
                </li>
            </ul>
        </div>
    )


}
export default SellCategory