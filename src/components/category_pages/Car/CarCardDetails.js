import { useNavigate, useParams } from "react-router-dom"
import cars from "./car_data";

const CarCardDetails = () => {

    const navigate = useNavigate();

    const { car_id } = useParams();

    const car = cars.find(c => c.id == car_id);


    const handleClickBack = () => {
        navigate("/Car");
    }
    const handleClickBuyNow = () => {
        navigate("/BuyNow");
    }

    
    return (
        <div className="container" >
            <div className="row" >
                <div className="col-md-8">
                    <img src={car.image} alt={car.model} style={{ height: "25rem" }} />
                </div>
                <div className="col-md-4 mt-5 pt-4">
                    <h2>{car.brand} {car.model} </h2>
                    <h4> Price Rs.{car.price} </h4>
                    <button className="btn btn-warning m-2 p-2" onClick={handleClickBuyNow} style={{ fontWeight:'bold'}}>Buy Now</button>
                    <div>
                        <button className="btn btn-secondary m-2 " onClick={handleClickBack} style={{ fontWeight:'bold'}}>Back to Gallary</button>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <table className="table table-primary table-borderless table-responsive-sm">
                        <thead>
                            <tr>
                                <td colSpan={3} style={{ textAlign: 'center', fontSize:'2rem', borderBottom: '1px solid black'}}>About this Items</td>

                            </tr>
                        </thead>
                        <tbody>            <tr>
                        <th>Milage</th>
                        <td>{car.specification.milage}</td>
                    </tr>
                    <tr>
                        <th>Engine</th>
                        <td>{car.specification.engine}</td>
                    </tr>
                    <tr>
                        <th>Fuel</th>
                        <td>{car.specification.fuel}</td>
                    </tr>
                    <tr>
                        <th>Emission</th>
                        <td>{car.specification.emission}</td>
                    </tr>
                    <tr>
                        <th>Front Suspension</th>
                        <td>{car.specification.suspension.front}</td>
                    </tr>
                    <tr>
                        <th>Rear Suspension</th>
                        <td>{car.specification.suspension.rear}</td>
                    </tr>
                </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
        
}
export default CarCardDetails