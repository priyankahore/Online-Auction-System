import { useNavigate, useParams } from "react-router-dom"
import headphones from './Headphone_data'

const HeadphoneCardDetails = () => {

    const navigate = useNavigate()

    const { headphone_id } = useParams()

    const headphone = headphones.find(hp => hp.id == headphone_id)

    const handleClickBack = () => {
        navigate("/Headphone");
    }

    const handleClickBuyNow = () => {
        navigate("/BuyNow")
    }
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <img src={headphone.image} alt={headphone.model} style={{ height: "25rem" }} />
                </div>
                <div className="col-md-4 mt-5 pt-4">
                    <h2>{headphone.brand} {headphone.model} </h2>
                    <h4> Price Rs.{headphone.price} </h4>

                    <button className="btn btn-warning m-2 p-2"
                        onClick={handleClickBuyNow}
                        style={{ fontWeight: 'bold' }}>
                        Buy Now</button>
                    <div>
                        <button className="btn btn-secondary m-2 "
                            onClick={handleClickBack}
                            style={{ fontWeight: 'bold' }}>
                            Back to Gallary</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 ">
                        <table className="table table-primary table-borderless table-responsive-lg">
                            <thead>
                                <tr>
                                    <td colSpan={3}
                                        style={{
                                            textAlign: 'center',
                                            fontSize: '2rem',
                                            borderBottom: '1px solid black'
                                        }}>About this Items</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Brand</th>
                                    <td>:</td>
                                    <td>{headphone.brand} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Model</th>
                                    <td>:</td>
                                    <td>{headphone.model} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Color</th>
                                    <td>:</td>
                                    <td>{headphone.specification.color} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Form Factor</th>
                                    <td>: </td>
                                    <td>{headphone.specification.Form_Factor} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Connectivity Technology</th>
                                    <td>:</td>
                                    <td>{headphone.specification.connectivity} </td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>


    )
}
export default HeadphoneCardDetails