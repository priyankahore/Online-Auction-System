import slide1 from './hero3.png'
import slide3 from './hero3.jpg'
import { Link } from 'react-router-dom';


import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function HeroSection() {
  return (
    <div>
      <div>
        <div className='container-fluid w-50 py-2' >
          <div className="row">
            <div className="col-12">
              <Carousel>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                  <Carousel.Caption style={{
                    border: '0px solid black',
                    backgroundColor: 'white',
                    boxShadow: '0 0.188em 1.550em rgb(100, 156, 156)',
                    opacity:'85%'
                  }}>
                    <h3 className='text-dark'>Easy Auction</h3>
                    <p className='text-danger'>Gives us the Goods, We will take care of the rest!!</p>
                    <Link to='/OfferProductList' className='nav-link'> <button className='btn btn-outline-primary'>Get Started</button></Link>
                  </Carousel.Caption>
                </Carousel.Item>

  
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                  />
                
                </Carousel.Item>


              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

