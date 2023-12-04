const CarCard=({car})=>{
    return(

        <div>
        <div className="box">
        <img src={car.image} alt='Productimage' className='card-img'></img>
        <div className="card-body">
            <div className='pname p-2'>
                <h5 className="card-title">{car.brand} {car.model} </h5> </div>
            <div className='row card-text p-2'>
                <div className='col-sm-7'>
                    <h6>  RS. {car.price} </h6>
                </div>
                <div className='col-sm-5'>
                    <button className="btn btn-warning ">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
        </div>
    )

}
export default CarCard