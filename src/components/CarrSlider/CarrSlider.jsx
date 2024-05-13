import { Col, Row, Carousel, Card, Image } from "react-bootstrap";

const apiUrl = 'http://localhost:5005'


const CarrSlider = ({ gallery, title }) => {


    return (
        <>
            <Row>
                <Col >
                    <Card className=' d-block  ' style={{ marginBottom: '30px', marginTop: '20px', marginRight: '40px', marginLeft: '40px', boxShadow: '0 8px 6px rgba(0, 0, 0, 1)' }} >
                        <Card.Body style={{ backgroundColor: '#F5F5DC', width: '100%' }}>


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
        </>
    );
}

export default CarrSlider
