import { Link } from "react-router-dom"
import MobileCard from "./MobileCard"
import mobiles from "./mobile_data"

const MobileGallary =()=>{

    const mobileCardList = mobiles.map(m=><Link key={m.id} to={"mobile-detail/"+m.id}><MobileCard  mobile={m}/></Link>)
    return(
        <div className="container">
            {mobileCardList}
        </div>
    )

    
}
export default MobileGallary;