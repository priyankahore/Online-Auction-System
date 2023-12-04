import { Link } from "react-router-dom";
import headphones from "./Headphone_data";
import HeadphoneCard from "./HeadphoneCard";

const HeadphoneGallery = () => {
    const headphoneList = headphones.map(hp => <Link key='{hp.id}' to={'headphone-details/' + hp.id}><HeadphoneCard headphone={hp} /></Link>)
    return (
        <div>
            <div className="container">
                {headphoneList}
            </div>
        </div>
    )
}

export default HeadphoneGallery;