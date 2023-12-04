import { useNavigate, useParams } from "react-router-dom"
import mobiles from "./mobile_data"

const MobileCardDetail = () => {

    const navigate = useNavigate();

    const { mobile_id } = useParams();

    const mobile = mobiles.find(m => m.id == mobile_id)

    const handleClickBack = () => {
        navigate("/Mobile")
    }
    const handleClickBuyNow = () => {
        navigate("/BuyNow");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <img src={mobile.image} alt={mobile.model} style={{ width: "25rem", height: "25rem" }} />
                </div>
                <div className="col-md-4 mt-5 pt-4">
                    <h2>{mobile.brand}</h2>
                    <h2>{mobile.model}</h2>
                    <h4>Price Rs.{mobile.price}</h4>
                    <div>
                        <button className="btn btn-warning m-2 p-2" onClick={handleClickBuyNow} style={{ fontWeight: "bold" }}>Buy Now</button>
                    </div>
                    <div>
                        <button className="btn btn-secondary m-2" onClick={handleClickBack} style={{ fontWeight: "bold" }}>Back To Gallary</button>
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
                                    <th scope="row">Storage</th>
                                    <td>:</td>
                                    <td>{mobile.specification.storage} </td>
                                </tr>

                                <tr>
                                    <th scope="row">RAM</th>
                                    <td>: </td>
                                    <td>{mobile.specification.ram} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Main Camera-Rear</th>
                                    <td>:</td>
                                    <td>{mobile.specification.camera.rear} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Main Camera-Front</th>
                                    <td>:</td>
                                    <td>{mobile.specification.camera.front} </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileCardDetail;