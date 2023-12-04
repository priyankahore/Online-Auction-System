import {Link,Outlet} from "react-router-dom"

export default function Category(){
    return (
        <div>
            <nav className='navbar navbar-expand-sm '>
                <ul className='navbar-nav'>
                    <li className=' nav-item'>
                        <Link className='nav-link' to="mobile"></Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
};