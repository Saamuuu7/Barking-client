import { Button, Col, Container, Image, Row } from "react-bootstrap"
import image from '../../assets/Bodega.jpeg'
import './HomePage.css'


const HomePage = () => {
    return (
        <>
            <video autoPlay loop playsInline muted className="mb-5 w-100 h-100">
                <source src="http://togarestaurante.com/wp-content/uploads/2021/08/toga_hero_web_video_1920_1080_.mp4" type="video/mp4" />
            </video>
            <Row>
                <Col>
                    <p className="mx-5 mt-5">
                        Bienvenido a Barking. En nuestra página podrás interactuar comentando los bares que se encuentran dentro de la propia página y además podrás añadir tus bares favoritos y obtener reseñas de otros usuarios sobre el bar.
                    </p>
                </Col>
                <Col>
                    <Image src={image} style={{ width: '80%', height: '90%' }} alt="Imagen Home Page" />
                </Col>
            </Row>

            <footer className="align-center mx-2 border-solid-1px">
                <hr />
                <Row>
                    <Col md={11}>
                        Creado Por Samuel Pérez y Cristina Ferreiro
                    </Col>

                    <Col md={1}>
                        <Button variant="secondary"
                            size="sm"
                            className="mt-2 mb-5 w-10"
                            href="https://github.com/Saamuuu7/Barking-client"
                            target="_blank"
                            rel="noopener noreferrer">

                            <Image src="https://res.cloudinary.com/dmwybmzwx/image/upload/v1715879151/GitHub-logo_kdmdlv.png" width={20} height={20} className="mr-2" />

                        </Button>

                    </Col>
                </Row>
            </footer>

        </>
    )
}

export default HomePage
