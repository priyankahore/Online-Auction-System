

import { useNavigate, useParams } from "react-router-dom"
import tvs from "./tv_data";

const TvCardDetail = () => {

    const navigate = useNavigate();

    const { tv_id } = useParams();

    const tv = tvs.find(t => t.id == tv_id);

    const handleClickBack = () => {
        navigate("/tv");
    }
    const handleClickBuyNow = () => {
        navigate("/BuyNow");
    }

    return (
        <div className="container my-5" >
            <div className="row" >
                <div className="col-md-8">
                    <img src={tv.image} alt={tv.model} style={{ height: "25rem" }} />
                </div>
                <div className="col-md-4 mt-5 pt-4">
                    <h2>{tv.brand} {tv.model} </h2>
                    <h4> Price Rs.{tv.price} </h4>
                    <button className="btn btn-warning m-2 p-2" onClick={handleClickBuyNow} style={{ fontWeight: 'bold' }}>Buy Now</button>
                    <div>
                        <button className="btn btn-secondary m-2 " onClick={handleClickBack} style={{ fontWeight: 'bold' }}>Back to Gallary</button>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <table className="table table-primary table-borderless table-responsive-sm">
                        <thead>
                            <tr>
                                <td colSpan={3} style={{ textAlign: 'center', fontSize: '2rem', borderBottom: '1px solid black' }}>About this Items</td>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th scope="row">Model</th>
                                <td>: </td>
                                <td>{tv.model} </td>
                            </tr>
                            <tr>
                                <th scope="row">Brand</th>
                                <td>:</td>
                                <td>{tv.brand} </td>
                            </tr>
                            <tr>
                                <th scope="row">Display size</th>
                                <td>:</td>
                                <td>{tv.display} </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">Brought Date</th>
                                <td>:</td>
                                <td>{tv.brought_date} </td>
                            </tr>
                            <tr>
                                <th scope="row">Product Details</th>
                                <td>:</td>
                                <td>{tv.product_details} </td>
                            </tr>
                          
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}
export default TvCardDetail
