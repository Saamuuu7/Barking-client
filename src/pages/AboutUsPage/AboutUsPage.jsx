import { Container, Row, Col, Card } from "react-bootstrap"
import Sujeto2 from "../../assets/Sujeto2.png"
import Sujeto3 from "../../assets/Sujeto3.png"



const AboutUsPage = () => {
    return (
        <>
            <Container>
                <Row className="mt-5" justify-content-center>
                    <Col md={{ offset: 1, span: 5 }}>

                        <Card className="text-center mx-5 mb-4" >
                            <Card.Img src={Sujeto3} className='mx-5 px-3' style={{ height: '40rem', width: '20rem' }} />
                            <Card.Body>
                                <Card.Title>Samuel Pérez</Card.Title>
                                <hr></hr>
                                <Card.Title><a href="https://www.linkedin.com/in/samuel-pérez-076553292/">LinkedIn</a></Card.Title>
                                <Card.Title><a href="https://github.com/Saamuuu7">GitHub</a></Card.Title>



                            </Card.Body>
                        </Card>


                    </Col>

                    <Col md={{ span: 5 }}>

                        <Card className="text-center mx-5 mb-4" >
                            <Card.Img src={Sujeto2} style={{ height: '40rem', width: '20rem' }} />
                            <Card.Body>
                                <Card.Title>Cristina Ferreiro</Card.Title>
                                <hr></hr>
                                <Card.Title><a href="https://www.linkedin.com/in/cristina-ferreiro-2b59182aa/">LinkedIn</a></Card.Title>
                                <Card.Title><a href="https://github.com/cristinaferreiro">GitHub</a></Card.Title>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

export default AboutUsPage