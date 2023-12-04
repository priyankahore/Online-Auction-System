import '../ProductList.css'

const HeadphoneCard = ({ headphone }) => {
    return (
        <div>
            <div className="box">
                <img src={headphone.image} className="card-img" />
                <div className="card-body">
                    <div className="pname p-2">
                        <h5 className="card-title">{headphone.brand} {headphone.model}</h5>
                    </div>
                    <div className="row card-text p-2">
                        <div className="col-sm-7">
                            <h6>Rs. {headphone.price}</h6>
                        </div>
                        <div className="col-sm-5">
                            <button className="btn btn-warning">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadphoneCard;