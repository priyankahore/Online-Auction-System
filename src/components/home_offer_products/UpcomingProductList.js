import React from 'react'
import UpcomingProductData from './data/UpcomingProductData'
import UpcomingPProductView from './UpcomingProductView'

export default function UpcomingProductList() {
  
  const upcomingList = UpcomingProductData.map(({ id, src, upName, upPrice, upComingOffer }) => <UpcomingPProductView key={id} src={src} upName={upName} upPrice={upPrice} upComingOffer={upComingOffer} />)
  return (
    <div>
    <h2 className='text-center pt-5'>Upcoming Products</h2>
    <div className='border m-5' style={{
      boxShadow: '0 0.188em 1.550em rgb(100, 156, 156)'
    }}>
      <div className='container1'>
        {upcomingList}
      </div>
    </div>
    </div>
  )
}