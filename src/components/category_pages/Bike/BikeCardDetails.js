import { useNavigate, useParams } from "react-router-dom";
import bikes from "./bike_data";

const BikeCardDetails = () => {

    const navigate = useNavigate();

    const { bike_id } = useParams();

    const bike = bikes.find(b => b.id === bike_id);


    const handleClickBack = () => {
        navigate("/Bike");
    }
    const handleClickBuyNow = () => {
        navigate("/BuyNow");
    }

    return (
        <div className="container-fluid" >
            <div className="row" >
                <div className="col-md-8">
                    <img src={bike.image} alt={bike.model} style={{ height: "25rem" }} />
                </div>
                <div className="col-md-4 mt-5 pt-4">
                    <h2>{bike.brand} {bike.model} </h2>
                    <h4> Price Rs.{bike.price} </h4>
                    <button className="btn btn-warning m-2 p-2" onClick={handleClickBuyNow} style={{ fontWeight: 'bold' }}>Buy Now</button>
                    <div>
                        <button className="btn btn-secondary m-2 " onClick={handleClickBack} style={{ fontWeight: 'bold' }}>Back to Gallary</button>
                    </div>
                </div>

            </div>
            <div className="row ">
                <div className="col-md-12 ">
                    <table className="table table-primary table-borderless table-responsive-sm">
                        <thead>
                            <tr>
                                <td colSpan={3} style={{ textAlign: 'center', fontSize: '2rem', borderBottom: '1px solid black' }}>About this Items</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Year</th>
                                <td>:</td>
                                <td>{bike.year} </td>
                            </tr>

                            <tr>
                                <th scope="row">Colour</th>
                                <td>: </td>
                                <td>{bike.color} </td>
                            </tr>
                            <tr>
                                <th scope="row">KM Driven</th>
                                <td>: </td>
                                <td>{bike.km_driven} </td>
                            </tr>

                            <tr>
                                <th scope="row">Owner</th>
                                <td>: </td>
                                <td>{bike.owner} </td>
                            </tr>
                            <tr>
                                <th scope="row">Insurance</th>
                                <td>: </td>
                                <td>{bike.insurance} </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}
export default BikeCardDetails