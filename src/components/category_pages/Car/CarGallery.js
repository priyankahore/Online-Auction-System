import { Link } from "react-router-dom";
import CarCard from"./CarCard"
import cars from "./car_data";
const CarGallery=()=>{

    const carCardList=cars.map(c=><Link key={c.id} to={"car-details/"+c.id}><CarCard  car={c}/></Link>)
    return(
        <div className="container">
            {carCardList}
        </div>
    )



}

export default CarGallery