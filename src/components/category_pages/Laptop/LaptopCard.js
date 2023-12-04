import '../ProductList.css'

const LaptopCard = ({ laptop }) => {
    return (
        <div className="box">
            <img src={laptop.image} alt='Productimage' className='card-img'></img>
            <div className="card-body">
                <div className='pname p-2'>
                    <h5 className="card-title">{laptop.brand} {laptop.model} </h5> </div>
                <div className='row card-text p-2'>
                    <div className='col-sm-7'>
                        <h6>  RS. {laptop.price} </h6>
                    </div>
                    <div className='col-sm-5'>
                        <button className="btn btn-warning ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LaptopCard