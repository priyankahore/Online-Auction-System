import React from 'react';
import ClosedProductData from './data/ClosedProductData';
import ClosedProductView from './ClosedProductView';

function ClosedProductList() {
    const closedList = ClosedProductData.map(({ id, src, cName, cPrice, closedOffer }) => <ClosedProductView key={id} src={src} cName={cName} cPrice={cPrice} closedOffer={closedOffer} />)
    return (
        <div>
        <h2 className='text-center pt-5'>Closed Products</h2>
      <div className='border m-5' style={{
        boxShadow: '0 0.188em 1.550em rgb(100, 156, 156)'
      }}>
            <div className='container1'>
                {closedList}  
            </div>
        </div>
        </div>
    );
}

export default ClosedProductList;