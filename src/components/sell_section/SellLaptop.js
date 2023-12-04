import { useState } from "react"
import PhotoUploadForm from "./PhotoUploadForm"


const Laptop1 = () => {
    // object as state varible
    const [laptop, setLaptop] = useState({
        brand: '',
        year: undefined,
        processor: undefined,
        ram: undefined,
        description: undefined,
        price: undefined,
        storage: {
            SSD: undefined,
            HDD: undefined,
        }
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    //event handler
    const handleBrandNameChange = (e) => {
        setLaptop({ ...laptop, brand: e.target.value })

    }
    const handleYearChange = (e) => {
        setLaptop({ ...laptop, year: e.target.value })

    }
    const handleProcessorChange = (e) => {
        setLaptop({ ...laptop, processor: e.target.value })

    }
    const handleRAMChange = (e) => {
        setLaptop({ ...laptop, ram: e.target.value })

    }
    const handleDescriptionChange = (e) => {
        setLaptop({ ...laptop, description: e.target.value })

    }
    const handlePriceChange = (e) => {
        setLaptop({ ...laptop, price: e.target.value })

    }
    // storage
    const handleSSDChange = (e) => {
        setLaptop({ ...laptop, storage: { ...laptop.storage, SSD: e.target.value } })
    }
    const handleHDDChange = (e) => {
        setLaptop({ ...laptop, storage: { ...laptop.storage, HDD: e.target.value } })
    }

    const handleSubmit = (e) => {
        e.preventDefault()  // for not refreshing page
        alert("Confirm Your Product Details")
        alert("Product Details submitted Successfully")
        setIsSubmitted(false)
    }
    return (
        <div>
            {!isSubmitted &&
                <div className="container rounded border border-dark bg-light" style={{ width: "150vh", marginTop: "25px" }} >
                    <form onSubmit={handleSubmit}>
                        <h1>Post Your Product</h1>
                        <h4>Selected Product :- Laptop</h4>
                        <div className="form-group m-2">
                            <label>Brand-Name</label>
                            <input className="form-control" type="text" placeholder="Enter Your Laptop BrandName"
                                value={laptop.brand} onChange={handleBrandNameChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label>Bought-Year</label>
                            <input className="form-control" type="date" min="2018-01-01" max="2023-01-31"
                                value={laptop.year} onChange={handleYearChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label>Processor</label>
                            <input className="form-control" type="text"
                                placeholder="Enter Your Laptop Processor" value={laptop.processor}
                                onChange={handleProcessorChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label>Laptop-RAM</label>
                            <input className="form-control" type="text" placeholder="Enter Your Laptop RAM"
                                value={laptop.ram} onChange={handleRAMChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label>Description</label>
                            <input className="form-control" type="text" placeholder="Enter Your Laptop Description"
                                value={laptop.description} onChange={handleDescriptionChange} required />
                        </div>
                        <div className="form-group m-2">
                            <label>Sell Price</label>
                            <input className="form-control" type="number" placeholder="Enter Your Expected Sell Price in Rs"
                                value={laptop.price} onChange={handlePriceChange} required />
                        </div>
                        <label>Storage:</label>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group m-2">
                                    <label>SSD:</label>
                                    <input className="form-control" type="text" placeholder="SSD" value={laptop.storage.SSD}
                                        onChange={handleSSDChange} required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group m-2">
                                    <label>HDD:</label>
                                    <input className="form-control" type="text" placeholder="HDD" value={laptop.storage.HDD}
                                        onChange={handleHDDChange} required />
                                </div>
                            </div>
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
                            <button className="btn btn-outline-secondary m-1" type="Reset" onClick={() => setLaptop({
                                brand: undefined, year: undefined, processor: undefined, ram: undefined, description: undefined, price: undefined,
                                storage: {
                                    HDD: undefined,
                                    SSD: undefined,
                                }
                            })}>Reset</button>
                        </div>
                    </form>
                </div>
            }
            {/* {isSubmitted &&
                <div>
                    <button className="btn btn-primary m-1" onClick={() => {
                        setIsSubmitted(false); setMobile({
                            brand: undefined, year: undefined, processor: undefined,
                            ram: undefined, description: undefined, price: undefined,
                            storage: {
                                    HDD: undefined,
                                    SSD: undefined
                                }
                        })
                    }}>Back To Product Form</button>
                </div>
            } */}
        </div>
    )
}
export default Laptop1;