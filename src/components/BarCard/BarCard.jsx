import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";

const apiUrl = 'http://localhost:5005'



const BarCard = ({ id, title, description, average_price, address, rating, opening_hours, gallery }) => {


    return (
        <>
            <Row>
                <Col >
                    <Card className=' d-block  ' style={{ marginBottom: '30px', marginTop: '20px', marginRight: '40px', marginLeft: '40px', boxShadow: '0 8px 6px rgba(0, 0, 0, 1)' }} >
                        <Link to={`/bar/${id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: '300' }}>
                            <Card.Body style={{ backgroundColor: '#F5F5DC', width: '100%' }}>

                                <Card.Title className="text-center">{title}</Card.Title>
                                <hr className="mx-auto d-block w-50" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 10)' }} />
                                <Card.Subtitle>{description}</Card.Subtitle>
                                <br></br>
                                <Card.Text>📍 {address.text}</Card.Text>
                                <Card.Text>{average_price}</Card.Text>
                                <Card.Text>{rating} ⭐</Card.Text>
                                <Card.Text>Horario: {opening_hours}</Card.Text>
                                <Row>
                                    {gallery.map((image, index) => (
                                        <Col key={index} xs={6} md={4} lg={3}>
                                            <Image src={`${apiUrl}/${image}`} alt={`Imagen ${index}`} fluid />
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Link>
                    </Card >
                </Col>
            </Row>
        </>
    );

}


export default BarCard;