import { Link } from "react-router-dom"
import BikeCard from "./BikeCard"
import bikes from "./bike_data"

const BikeGallary=()=>{
    const bikeCardList = bikes.map(b=><Link key={b.id} to={"bike-detail/"+b.id}><BikeCard  bike={b} /></Link>) //added link

    return(
        <div className="container"> 
            {bikeCardList}
        </div>
    )
    
}
export default BikeGallary