import { Outlet } from "react-router-dom"


const Bike=()=>{
    return(
        <div className="continer">
            
            <Outlet/>
        </div>
    )
}

export default Bike