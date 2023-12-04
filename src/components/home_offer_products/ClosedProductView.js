import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './HomeProduct.css'
const ClosedProductView = ({ src, cName, cPrice, closedOffer }) => {
    return (
      
            <div>
                <div className='container1 p-5'>
                    <div className='box'>
                        <img src={src} alt='closedImage' className='card-img' />
                        <div className='card-body'>
                            <div className='pname p-2'>
                                <h5 className="card-title">{cName}</h5>
                            </div>
                            <div className='row card-text'>
                                <h6>{cPrice}</h6>
                            </div>
                            <Link to="./closedProductList" className='btn btn-danger' style={{fontSize:'13px'}}>{closedOffer}</Link>
                        </div>
                    </div>
                </div>
       
            <Outlet />
        </div>
    );
}

export default ClosedProductView;