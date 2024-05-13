import { Link } from "react-router-dom";
import { Col, Row, Card, Image } from "react-bootstrap";
import CarrSlider from "./../CarrSlider/CarrSlider";
const apiUrl = 'http://localhost:5005'



const BarCard = ({ id, title, description, average_price, address, rating, opening_hours, gallery }) => {

    return (
        <Card className=' d-block  ' style={{ marginBottom: '30px', marginTop: '20px', marginRight: '40px', marginLeft: '40px', boxShadow: '0 8px 6px rgba(0, 0, 0, 1)' }} >
            <Card.Body style={{ backgroundColor: '#F5F5DC', width: '100%' }}>
                <Link to={`/bar/${id}`}>
                    <CarrSlider gallery={gallery} title={title} />
                </Link>
                <Card.Title className="text-center">{title}</Card.Title>
                <hr className="mx-auto d-block w-50" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 10)' }} />
                <Card.Subtitle>{description}</Card.Subtitle>
                <br></br>
                <Card.Text>📍 {address.text}</Card.Text>
                <Card.Text>{average_price}</Card.Text>
                <Card.Text>{rating} ⭐</Card.Text>
                <Card.Text>Horario: {opening_hours}</Card.Text>
                <Row>
                    {/* {
                                    gallery.map((image, index) => (
                                        <Col key={index} xs={6} md={4} lg={3}>
                                            <Image src={image} alt={`Imagen de ${title}`} fluid />
                                        </Col>
                                    ))
                                } */}

                    {/* <Col xs={6} md={4} lg={3}>
                                        <Image src={gallery[0]} alt={`Imagen de ${title}`} fluid />
                                    </Col> */}
                </Row>
            </Card.Body>
        </Card >
    );

}

export default BarCard