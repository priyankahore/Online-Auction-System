import './HomeProduct.css'
import { Link, } from 'react-router-dom'

const OfferProductView = ({ src, oName, price, oPrice }) => {
    return (
        <div>
            <div className="container1 p-5">
                <div className='box'>
                    <img src={src} alt="offerImage" className='card-img' />
                    <div className="card-body">
                        <div className='pname p-1'>
                            <h5 className="card-title">{oName}</h5>
                        </div>
                        <div className='row card-text'>
                            <h6><strike style={{ color: 'red' }} >{price}</strike> Rs.{oPrice}</h6>
                        </div>
                        <Link to="./OfferProductList" className='btn btn-warning ' style={{fontSize:'13px'}}>Buy now</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default OfferProductView;