import { Container, Image } from "react-bootstrap"
import image from '../../assets/image.jpg'
import './HomePage.css'

const HomePage = () => {

    return (
        <Container fluid className="full-page-container mt-0 w-100" >


            <Image src={image} style={{ width: '100%' }} alt="Imagen Home Page" fluid />



        </Container>
    )


}

export default HomePage