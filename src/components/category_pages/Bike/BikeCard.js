import './CardView.css'
const BikeCard=({bike})=>{
    return(
        <div className="box  " >
            <img src={bike.image} alt='Productimage' className='card-img'></img>
            <div className="card-body">
                <div className='pname p-2 '>
                    <h5 className="card-title ">{bike.brand} {bike.model} </h5> </div>
                <div className='row card-text p-2'>
                    <div className='col-sm-7'>
                        <h6>  RS. {bike.price} </h6>
                    </div>
                    <div className='col-sm-5'>
                        <a href="./ProductList" className="btn btn-warning ">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeCard