import React from 'react'
import OfferProductView from './OfferProductView'
import OfferProductData from './data/OfferProductData'

export default function OfferProductList() {

    const offerList=OfferProductData.map(({id , src, oName, price, oPrice}) => <OfferProductView key={id} src={src} oName={oName} price={price} oPrice={oPrice}/>)
    return (
      <div>
      <h2 className='text-center pt-5'>Offer Products</h2>
      <div className='border m-5' style={{
        boxShadow: '0 0.188em 1.550em rgb(100, 156, 156)'
      }}>
    
        <div className='container1'>
        {offerList}    
        </div>
    </div>
    </div>
  )
}
