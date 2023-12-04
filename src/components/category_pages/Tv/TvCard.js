import '../ProductList.css'
const TvCard = ({ tv }) => {
    
    return (
        // <div className="card m-3" style={{ width: "16rem", display: "inline-grid" }}>
        //     <img style={{ width: "240px", height: "180px" }} src={tv.image} className="card-img-top m-1" alt={tv.model} />
        //     <div className="card-body">
        //         <h2 style={{ textDecoration: "none" }} className="card-title">{tv.brand}<br></br>{tv.model}</h2>
        //         <h4 style={{ textDecoration: "none" }} className="card-subtitle">Rs.{tv.price}</h4>
        //         <div className='col-md-6'>
        //             <a href="./ProductList" className="btn btn-warning ">Buy Now</a>
        //         </div>
        //     </div>
        // </div>

        <div className="box">
            <img src={tv.image} alt='Productimage' className='card-img'></img>
            <div className="card-body">
                <div className='pname p-2'>
                    <h5 className="card-title">{tv.brand} {tv.model} </h5> </div>
                <div className='row card-text p-2'>
                    <div className='col-sm-7'>
                        <h6>  RS. {tv.price} </h6>
                    </div>
                    <div className='col-sm-5'>
                        <button className="btn btn-warning ">Buy Now </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TvCard

