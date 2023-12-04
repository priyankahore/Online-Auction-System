import './HomeProduct.css'
import { Link} from 'react-router-dom'

const UpcomingPProductView = ({ src, upName, upPrice, upComingOffer }) => {
    return (
        <div>
            <div className="container1 p-5">
                <div className='box'>
                    <img src={src} alt="upcomingImage" className='card-img' />
                    <div className="card-body">
                        <div className='pname p-1'>
                            <h5 className="card-title">{upName}</h5>
                        </div>
                        <div className='row card-text'>
                            <h6>{upPrice}</h6>
                        </div>
                        {/* <h5>{upComingOffer}</h5> */}
                        <Link to="/ComingSoon" className='btn btn-success' style={{fontSize:'13px'}}>{upComingOffer} </Link>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default UpcomingPProductView;