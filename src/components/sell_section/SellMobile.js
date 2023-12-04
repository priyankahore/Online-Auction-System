import { useState } from "react"
import PhotoUploadForm from "./PhotoUploadForm"


const Mobile1 = () => {
    // object as state varible
    const [mobile, setMobile] = useState({
        brand: '',
        year: undefined,
        ram: undefined,
        rom: undefined,
        description: undefined,
        price: undefined
        
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    //event handler
    const handleBrandNameChange = (e) => {
        setMobile({ ...mobile, brand: e.target.value })

    }
    const handleYearChange = (e) => {
        setMobile({ ...mobile, year: e.target.value })

    }
    const handleRAMChange = (e) => {
        setMobile({ ...mobile, ram: e.target.value })

    }
    const handleROMChange = (e) => {
        setMobile({ ...mobile, rom: e.target.value })

    }
    const handleDescriptionChange = (e) => {
        setMobile({ ...mobile, description: e.target.value })

    }
    const handlePriceChange = (e) => {
        setMobile({ ...mobile, price: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()  // for not refreshing page
        alert("Confirm the Product Details")
        alert("Product Details submitted Successfully")
        setIsSubmitted(false)
    }
    
    return (
        <div>
            {!isSubmitted &&
                    <div className="container rounded border border-dark bg-light" style={{ width: "150vh", marginTop: "25px" }} >
                        <form onSubmit={handleSubmit}>
                            <h1>Post Your Product</h1>
                            <h4>Selected Product :- Mobile</h4>
                            <div className="form-group m-2">
                                <label>Brand-Name</label>
                                <input className="form-control" type="text" placeholder="Enter Your BrandName"
                                    value={mobile.brand} onChange={handleBrandNameChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Bought-Year</label>
                                <input className="form-control"  type="date" min="2018-06-01" max="2023-01-31" 
                                    value={mobile.year} onChange={handleYearChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Mobile-RAM</label>
                                <input className="form-control" type="text"
                                    placeholder="Enter Your Mobile RAM" value={mobile.ram} onChange={handleRAMChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Mobile-ROM</label>
                                <input className="form-control" type="text" placeholder="Enter Your Mobile ROM"
                                    value={mobile.rom} onChange={handleROMChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Description</label>
                                <input className="form-control" type="text" placeholder="Enter Your Mobile Description"
                                    value={mobile.description} onChange={handleDescriptionChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Sell Price</label>
                                <input className="form-control" type="number" placeholder="Enter Your Expected Sell Price in Rs"
                                    value={mobile.price} onChange={handlePriceChange} required />
                            </div>

                            <label>Product Photos</label>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group m-2">
                                        <PhotoUploadForm />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div class="form-check" style={{ marginLeft: "15px" }}>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                                    <label class="form-check-label" for="exampleCheck1">Read all T&C</label>
                                </div>

                            </div>


                            <div className="form-group m-2">
                                <button className="btn btn-primary m-1" type="submit">Post Now</button>
                                <button className="btn btn-outline-secondary m-1" type="Reset" onClick={() => setMobile({
                                    brand: undefined, year: undefined, ram: undefined, rom: undefined, description: undefined, price: undefined,
                                })}>Reset</button>
                            </div>
                        </form>
                    </div>
            }
                    {/* {isSubmitted &&
                <div>
                    <button className="btn btn-primary m-1" onClick={() => {
                        setIsSubmitted(false); setMobile({
                            brand: undefined, year: undefined, ram: undefined,
                            rom: undefined, description: undefined, price: undefined,
                        })
                    }}>Back To Product Form</button>
                </div>
            } */} 
        </div>
    )
}
export default Mobile1;