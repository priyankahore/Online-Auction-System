import '../ProductList.css'

const MobileCard = ({ mobile }) => {
    return (
        <div className="box">
            <img src={mobile.image} alt='Productimage' className='card-img' style={{width:'250px'}}></img>
            <div className="card-body">
                <div className='pname p-2'>
                    <h5 className="card-title">{mobile.brand} {mobile.model} </h5> </div>
                <div className='row card-text p-2'>
                    <div className='col-sm-7'>
                        <h6>  RS. {mobile.price} </h6>
                    </div>
                    <div className='col-sm-5'>
                        <button className="btn btn-warning ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileCard;                            