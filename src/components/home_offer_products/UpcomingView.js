import { Outlet } from 'react-router-dom'
import image1 from '../images/coming.jpg'


const UpcomingView=()=>{
    return(
        <div>
        <div className='container'>
        <img src={image1} alt='img1'/>
        </div>
        <Outlet/>
        </div>
    )
}
export default UpcomingView