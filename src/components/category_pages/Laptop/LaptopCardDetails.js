import { useNavigate, useParams } from "react-router-dom"
import laptops from "./laptop_data"

const LaptopCardDetails = () => {

    const navigate = useNavigate();
    const { laptop_id } = useParams();
    const laptop = laptops.find(lp => lp.id == laptop_id);
    
    const handleClickBack = () => {
        navigate("/Laptop");
    }
    const handleClickBuyNow = () => {
        navigate("/BuyNow");
    }

    return (
        <div className="container" >
            <div className="row" >
                <div className="col-md-8">
                    <img src={laptop.image} alt={laptop.model} style={{ height: "25rem" }} />
                </div>
                <div className="col-md-4 mt-5 pt-4">
                    <h2>{laptop.brand} {laptop.model} </h2>
                    <h4> Price Rs.{laptop.price} </h4>
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
                        <tbody>
                            <tr>
                                <th scope="row">Processor</th>
                                <td>:</td>
                                <td>{laptop.specification.processor} </td>
                            </tr>

                            <tr>
                                <th scope="row">Operating System</th>
                                <td>: </td>
                                <td>{laptop.specification.operating_System} </td>
                            </tr>
                            <tr>
                                <th scope="row">Display Type</th>
                                <td>:</td>
                                <td>{laptop.specification.display_Type} </td>
                            </tr>
                            <tr>
                                <th scope="row">Memory</th>
                                <td>:</td>
                                <td>{laptop.specification.memory} </td>
                            </tr>
                            <tr>
                                <th scope="row">Warranty</th>
                                <td>:</td>
                                <td>{laptop.specification.warranty} </td>
                            </tr>
                            <tr>
                                <th scope="row">Speaker</th>
                                <td>:</td>
                                <td>{laptop.specification.speaker} </td>
                            </tr>
                            <tr>
                                <th scope="row">Services</th>
                                <td>:</td>
                                <td>{laptop.specification.services} </td>
                            </tr>
                            <tr>
                                <th scope="row">Weight</th>
                                <td>:</td>
                                <td>{laptop.specification.weight} </td>
                            </tr> <tr>
                                <th scope="row">Battery</th>
                                <td>:</td>
                                <td>{laptop.specification.battery} </td>
                            </tr>
                            <tr>
                                <th scope="row">Camera</th>
                                <td>:</td>
                                <td>{laptop.specification.camera} </td>
                            </tr>
                            <tr>
                                <th scope="row">Ports</th>
                                <td>:</td>
                                <td>{laptop.specification.ports} </td>
                            </tr>
                            <tr>
                                <th scope="row">Graphics</th>
                                <td>:</td>
                                <td>{laptop.specification.graphics} </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}
export default LaptopCardDetails
