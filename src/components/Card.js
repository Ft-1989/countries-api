import "../styles/Card.css"
import { Link } from "react-router-dom";

function Card(props){
    return(
        <div className="Card col-12 col-sm-6 col-md-4 col-lg-3">
            <Link key={props.name} to={`/country/${props.name.toLowerCase()}`}>
            <div>
                <div>
                    <img src={props.flag} alt="" />
                </div>
                <div className="p-3">
                    <p>{props.name}</p>
                    <p>Population: <span>{props.population}</span></p>
                    <p>Region: <span>{props.region}</span></p>
                    <p>Capital: <span>{props.capital}</span></p>
                </div>
            </div>   
            </Link>       
        </div>
    )
}
export default Card;