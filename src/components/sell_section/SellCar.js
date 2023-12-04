import { useState } from "react"
import PhotoUploadForm from "./PhotoUploadForm"

const SellCar = () => {
    const [Sellcar, setSellCar] = useState({
        brand: '',
        year: undefined,
        kmDriven: undefined,
        description: undefined
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleBrandChange = (e) => {
        setSellCar({ ...Sellcar, brand: e.target.value })
        console.log(SellCar.brand)
    }
    const handleModelChange = (e) => {
        setSellCar({ ...Sellcar, model: e.target.value })
        console.log(SellCar.model)
    }
    const handleYearChange = (e) => {
        setSellCar({ ...Sellcar, year: e.target.value })
        console.log(SellCar.year)
    }
    const handleKmDrivenChange = (e) => {
        setSellCar({ ...Sellcar, kmDriven: e.target.value })
        console.log(SellCar.kmDriven)
    }
    const handlePriceChange = (e) => {
        setSellCar({ ...Sellcar, price: e.target.value })
        console.log(SellCar.price)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(" Form Submit Successfully")
        setIsSubmitted(true)
    }



    return (
        <div>
            {!isSubmitted &&
                <div className="container rounded border border-dark bg-light" style={{ width: "150vh" ,marginTop:"25px" }}>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Brand Name</label>
                            <input className="form-control" placeholder="Enter Brand Name" value={Sellcar.brand} onChange={handleBrandChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Model</label>
                            <input className="form-control" placeholder="Enter Your Car Model" value={Sellcar.model} onChange={handleModelChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Bought Date</label>
                            <input className="form-control" type="Date" placeholder="Enter Car Bought Year " value={Sellcar.year} onChange={handleYearChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>KMDriven</label>
                            <input className="form-control" type="Number" placeholder="Enter km driven" value={Sellcar.kmDriven} onChange={handleKmDrivenChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Fuel</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required />
                            <label class="form-check-label" for="inlineRadio1">CNG</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required />
                            <label class="form-check-label" for="inlineRadio1">Petrol</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required />
                            <label class="form-check-label" for="inlineRadio1">Diesel</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required />
                            <label class="form-check-label" for="inlineRadio1">Electric</label>
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Transmission</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input" required />
                            <label class="custom-control-label" for="customRadioInline1">Automatic</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input" required />
                            <label class="custom-control-label" for="customRadioInline2">Manual</label>
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Product Detalis</label>
                            <textarea class="form-control" placeholder="Description" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Sell Price</label>
                            <input className="form-control" placeholder="Enter Your Expected price" value={Sellcar.price} onChange={handlePriceChange} required />
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
                            <button className="btn btn-outline-secondary m-1" type="reset" onClick={() => setSellCar({
                                brand: undefined, year: undefined, kmDriven: undefined, description: undefined
                            })}>Reset</button>
                        </div>

                    </form>
                </div>
            }

        </div>
    )
}


export default SellCar
