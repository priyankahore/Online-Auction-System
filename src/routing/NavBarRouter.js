import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'
import AboutUs from '../components/pages/AboutUs'
import ContactUs from '../components/pages/ContactUs'
import Login from '../components/pages/Login'
import ForgetPassword from '../components/pages/ForgetPassword'
import SignUp from '../components/pages/SignUp'
// import SellCategory from '../components/sell_section/SellCategory'

import SellCategory from '../components/sell_section/SellCategory'
import SellLaptop from '../components/sell_section/SellLaptop'
import SellMobile from '../components/sell_section/SellMobile'
import SelllHeadPhone from '../components/sell_section/SellHeadPhone'
import SellCar from '../components/sell_section/SellCar'
import SellBike from '../components/sell_section/SellBike'
import SellTV from '../components/sell_section/SellTV'

import CategoryNavBar from '../components/categoryNavbar/CategoryNavBar'
import HeroSection from '../components/slider/HeroSection'
import UpcomingProductList from '../components/home_offer_products/UpcomingProductList'
import ClosedProductList from '../components/home_offer_products/ClosedProductList'
import OfferProductList from '../components/home_offer_products/OfferProductList'

import Headphone from '../components/category_pages/Headphone/Headphone'
import HeadphoneGallery from '../components/category_pages/Headphone/HeadphoneGallery'
import HeadphoneCardDetails from '../components/category_pages/Headphone/HeadphoneCardDetails'

import Laptop from '../components/category_pages/Laptop/Laptop'
import LaptopGallary from '../components/category_pages/Laptop/LaptopGallary'
import LaptopCardDetails from '../components/category_pages/Laptop/LaptopCardDetails'

import Tv from '../components/category_pages/Tv/Tv'
import TvGallary from '../components/category_pages/Tv/TvGallary'
import TvCardDetail from '../components/category_pages/Tv/TvCardDetail'

import Bike from '../components/category_pages/Bike/Bike'
import BikeGallary from '../components/category_pages/Bike/BikeGallary'
import BikeCardDetails from '../components/category_pages/Bike/BikeCardDetails'

import Cars from '../components/category_pages/Car/Cars'
import CarGallery from '../components/category_pages/Car/CarGallery'
import CarCardDetails from '../components/category_pages/Car/CarCardDetails'

import Mobile from '../components/category_pages/Mobile/Mobile'
import MobileGallary from '../components/category_pages/Mobile/MobileGallary'
import MobileCardDetail from '../components/category_pages/Mobile/MobileCardDetail'

import PageNotFound from '../components/PageNotFound'

import Footer from '../components/footer/Footer'
import TermsAndCondition from '../components/footer/TermsAndCondition'
import ComingSoon from '../components/home_offer_products/ComingSoon'


export default function NavBarRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='/' element={<CategoryNavBar />}>
              <Route path='/' element={<HeroSection />} />
              {/*<Route path='/OfferProductList' element={<OfferProductList/>}/>
        
                        <Route path='/' element={<UpcomingProductList />} />
              <Route path='/' element={< />} />*/}

              <Route path='/OfferProductList' element={
                <React.Fragment>
                  <OfferProductList />
                  <ClosedProductList />
                  <UpcomingProductList />
                </React.Fragment>
              } />

              <Route path='/ComingSoon' element={<ComingSoon/>}/>

              <Route path='/AboutUs' element={<AboutUs />} />
              <Route path='/ContactUs' element={<ContactUs />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/ForgetPassword' element={<ForgetPassword />} />
              <Route path='/SignUp' element={<SignUp />} />

              <Route path='/SellCategory' element={<SellCategory />} />
              <Route path='/SellLaptop' element={<SellLaptop />} />
              <Route path='/SellMobile' element={<SellMobile />} />
              <Route path='/SellHeadPhone' element={<SelllHeadPhone />} />
              <Route path='/SellCar' element={<SellCar />} />
              <Route path='/SellBike' element={<SellBike />} />
              <Route path='/SellTV' element={<SellTV />} />

              <Route path='/Headphone' element={<Headphone />}>
                <Route path='' element={<HeadphoneGallery />} />
                <Route path='headphone-details/:headphone_id' element={<HeadphoneCardDetails />} />
              </Route>

              <Route path='/Bike' element={<Bike />}>
                <Route path='' element={<BikeGallary />} />
                <Route path='bike-detail/:bike_id' element={<BikeCardDetails />} />
              </Route>

              <Route path='/Tv' element={<Tv />}>
                <Route path='' element={<TvGallary />} />
                <Route path='tv-detail/:tv_id' element={<TvCardDetail />} />
              </Route>

              <Route path='/Laptop' element={<Laptop />}>
                <Route path='' element={<LaptopGallary />} />
                <Route path='laptop-detail/:laptop_id' element={<LaptopCardDetails />} />
              </Route>

              <Route path='/Car' element={<Cars />}>
                <Route path='' element={<CarGallery />} />
                <Route path='car-details/:car_id' element={<CarCardDetails />} />
              </Route>

              <Route path='/Mobile' element={<Mobile />}>
                <Route path='' element={<MobileGallary />} />
                <Route path='mobile-detail/:mobile_id' element={<MobileCardDetail />} />
              </Route>

              <Route path='TermsAndCondition' element={<TermsAndCondition />} />

              <Route path='*' element={<PageNotFound />} />
            </Route>

          </Route>


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
