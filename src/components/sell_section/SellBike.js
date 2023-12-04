import { useState } from "react"
import PhotoUploadForm from "./PhotoUploadForm"

const SellBike = () => {
    const [SellBike, setSellBike] = useState({
        brand: '',
        year: undefined,
        kmDriven: undefined,
        description: undefined
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleBrandChange = (e) => {
        setSellBike({ ...SellBike, brand: e.target.value })
        console.log(SellBike.brand)
    }
    const handleModelChange = (e) => {
        setSellBike({ ...SellBike, model: e.target.value })
        console.log(SellBike.model)
    }
    const handleYearChange = (e) => {
        setSellBike({ ...SellBike, year: e.target.value })
        console.log(SellBike.year)
    }
    const handleKmDrivenChange = (e) => {
        setSellBike({ ...SellBike, kmDriven: e.target.value })
        console.log(SellBike.kmDriven)
    }
    const handlePriceChange = (e) => {
        setSellBike({ ...SellBike, price: e.target.value })
        console.log(SellBike.price)
    }
    const handleSubmit = (e) => {
        e.preventDefault() 
        alert(" Form Submit Successfully")
        setIsSubmitted(true)
    }



    return (
        <>
            {!isSubmitted &&
                <div className="container" style={{ border: "solid", width: "60vw" }}>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Brand Name</label>
                            <input className="form-control" placeholder="Enter Brand Name" value={SellBike.brand} onChange={handleBrandChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Model</label>
                            <input className="form-control" placeholder="Enter Your Bike Model" value={SellBike.model} onChange={handleModelChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Bought Date</label>
                            <input className="form-control" type="Date" placeholder="Enter Bike Bought Year " value={SellBike.year} onChange={handleYearChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>KMDriven</label>
                            <input className="form-control" type="Number" placeholder="Enter km driven" value={SellBike.kmDriven} onChange={handleKmDrivenChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Fuel</label>
                        </div>
                        <div class="form-check form-check-inline">
                           
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required />
                            <label class="form-check-label" for="inlineRadio1">Petrol</label>
                        </div>
                        <div class="form-check form-check-inline">
                            
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"required />
                            <label class="form-check-label" for="inlineRadio1">Electric</label>
                        </div>
                       
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Product Detalis</label>
                            <textarea class="form-control" placeholder="Description" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Sell Price</label>
                            <input className="form-control" placeholder="Enter Your Expected price" value={SellBike.price} onChange={handlePriceChange} required />
                        </div>
                        <label style={{ fontWeight: "bold" }}>Product Photos</label>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group m-2">
                                    <PhotoUploadForm />
                                </div>
                            </div>
                            
                        </div>
                        <div className="form-group m-2">
                            <button className="btn btn-outline-primary m-1" type="submit">Submit</button>
                            <button className="btn btn-outline-secondary m-1" type="reset" onClick={() => setSellBike({
                                brand: undefined, year: undefined, kmDriven: undefined, description: undefined
                            })}>Reset</button>
                        </div>
                        
                    </form>
                </div>
            }
           
        </>
    )
}


export default SellBike