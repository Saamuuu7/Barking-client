import { Col, Row, Carousel, Card, Image } from "react-bootstrap";
import './CarrSlider.css'

const API_URL = import.meta.env.VITE_API_URL


const CarrSlider = ({ gallery, title }) => {

    return (
        <div className="CardSlider">
            <Row>
                <Col >
                    <Card className=' d-block CardSlider mb-5 mt-0 mr-4 ml-4 ' style={{ border: 'none' }} >
                        <Card.Body style={{ width: '100%' }}>
                            <Carousel>
                                {gallery.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <Image src={image} alt={`Imagen ${index + 1} de ${title}`} fluid />
                                        <Carousel.Caption>
                                            <h3>{`${title}`}</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CarrSlider
