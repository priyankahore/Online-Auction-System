import { useState } from "react"
import PhotoUploadForm from "./PhotoUploadForm"

const SellTV = () => {
    const [SellTV, setSellTV] = useState({
        brand: '',
        year: undefined,
        displaySize: undefined,
        description: undefined
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleBrandChange = (e) => {
        setSellTV({ ...SellTV, brand: e.target.value })
        console.log(SellTV.brand)
    }
    const handleModelChange = (e) => {
        setSellTV({ ...SellTV, model: e.target.value })
        console.log(SellTV.model)
    }
    const handleYearChange = (e) => {
        setSellTV({ ...SellTV, year: e.target.value })
        console.log(SellTV.year)
    }
    const handledisplaySizeChange = (e) => {
        setSellTV({ ...SellTV, displaySize: e.target.value })
        console.log(SellTV.displaySize)
    }
    const handlePriceChange = (e) => {
        setSellTV({ ...SellTV, price: e.target.value })
        console.log(SellTV.price)
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
                            <input className="form-control" placeholder="Enter Brand Name" value={SellTV.brand} onChange={handleBrandChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Model</label>
                            <input className="form-control" placeholder="Enter Your TV Model" value={SellTV.model} onChange={handleModelChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Bought Date</label>
                            <input className="form-control" type="Date" placeholder="Enter  Bought Year " value={SellTV.year} onChange={handleYearChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>displaySize</label>
                            <input className="form-control" type="Number" placeholder="Enter display size" value={SellTV.displaySize} onChange={handledisplaySizeChange} required />
                        </div>
                        
                       
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Product Detalis</label>
                            <textarea class="form-control" placeholder="Description" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div className="form-group m-2">
                            <label style={{ fontWeight: "bold" }}>Sell Price</label>
                            <input className="form-control" placeholder="Enter Your Expected price" value={SellTV.price} onChange={handlePriceChange} required />
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
                            <button className="btn btn-outline-secondary m-1" type="reset" onClick={() => setSellTV({
                                brand: undefined, year: undefined, displaySize: undefined, description: undefined
                            })}>Reset</button>
                        </div>
                        
                    </form>
                </div>
            }
           
        </>
    )
}


export default SellTV