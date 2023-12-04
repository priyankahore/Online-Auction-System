import TvCard from "./TvCard"
import tvs from "./tv_data"
import { Link } from "react-router-dom"
const TvGallary = () => {

    const tvCardList = tvs.map(t => <Link key={t.id} to={"tv-detail/" + t.id}><TvCard tv={t} /></Link>)

    return (
        <div className="container" >
            {tvCardList}
        </div>
    )
}

export default TvGallary