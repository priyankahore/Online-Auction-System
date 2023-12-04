import { useState } from "react"
import PhotoUploadForm from "./PhotoUploadForm"


const HeadPhone1 = () => {
    // object as state varible
    const [headphone, setHeadPhone] = useState({
        brand: '',
        year: undefined,
        type: undefined,
        description: undefined,
        price: undefined,
        photo:undefined
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    //event handler
    const handleBrandNameChange = (e) => {
        setHeadPhone({ ...headphone, brand: e.target.value })

    }
    const handleYearChange = (e) => {
        setHeadPhone({ ...headphone, year: e.target.value })

    }
    const handleTypeChange = (e) => {
        setHeadPhone({ ...headphone, type: e.target.value })

    }
    const handleDescriptionChange = (e) => {
        setHeadPhone({ ...headphone, description: e.target.value })

    }
    const handlePriceChange = (e) => {
        setHeadPhone({ ...headphone, price: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()  // for not refreshing page
        alert("Confirm the Product Details")
        alert("Product Details submitted Successfully")
        setIsSubmitted(false)
    }
    
    return (
        <>
            {!isSubmitted &&
                    <div className="container rounded border border-dark bg-light" style={{ width: "150vh", marginTop: "25px" }} >
                        <form onSubmit={handleSubmit}>
                            <h1>Post Your Product</h1>
                            <h4>Selected Product :- Headphone</h4>
                            <div className="form-group m-2">
                                <label>Brand-Name</label>
                                <input className="form-control" type="text" placeholder="Enter Your BrandName"
                                    value={headphone.brand} onChange={handleBrandNameChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Bought-Year</label>
                                <input className="form-control"  type="date" min="2023-01-01" max="2023-10-31"
                                    value={headphone.year} onChange={handleYearChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Headphone-Type</label>
                                <input className="form-control" type="text"
                                    placeholder="Enter Your Headphone-Type(i.e.,Ear-pod,Headset,Neckband)" value={headphone.type} 
                                    onChange={handleTypeChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Description</label>
                                <input className="form-control" type="text" placeholder="Enter Your Headphone Description"
                                    value={headphone.description} onChange={handleDescriptionChange} required />
                            </div>
                            <div className="form-group m-2">
                                <label>Sell Price</label>
                                <input className="form-control" type="number" placeholder="Enter Your Expected Sell Price in Rs"
                                    value={headphone.price} onChange={handlePriceChange} required />
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
                                <button className="btn btn-outline-secondary m-1" type="Reset" onClick={() => setHeadPhone({
                                    brand: undefined, year: undefined, type: undefined, description: undefined, price: undefined,
                                })}>Reset</button>
                            </div>
                        </form>
                    </div>
            }
                    {/* {isSubmitted &&
                <div>
                    <button className="btn btn-primary m-1" onClick={() => {
                        setIsSubmitted(false); setHeadPhone({
                            brand: undefined, year: undefined, type: undefined,
                            description: undefined, price: undefined,
                        })
                    }}>Back To Product Form</button>
                </div>
            } */} 
        </>
    )
}
export default HeadPhone1;