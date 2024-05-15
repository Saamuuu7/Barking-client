import { Link } from "react-router-dom";
import { Col, Row, Card, Image } from "react-bootstrap";
import CarrSlider from "./../CarrSlider/CarrSlider";
const apiUrl = 'http://localhost:5005'



const BarCard = ({ id, title, gallery }) => {

    return (

        <div className="BarCard">

            <Link to={`/bar/${id}`}>
                <CarrSlider gallery={gallery} title={title} />
            </Link>

        </div>

    )

}

export default BarCard