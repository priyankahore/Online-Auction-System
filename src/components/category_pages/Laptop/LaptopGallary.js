import { Link } from "react-router-dom"
import LaptopCard from "./LaptopCard"
import laptops from "./laptop_data"

const LaptopGallary = () => {
    const laptopCardList = laptops.map(lp => <Link key={lp.id} to={"laptop-detail/"+ lp.id}><LaptopCard laptop={lp} /></Link>)

    
    return (
        <div className="container">
            {laptopCardList}
        </div>
    )
}

export default LaptopGallary