import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {


    return (
        <div className="Navigation">

            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>Barking</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">

                            <Nav.Link href="/bars">Bares</Nav.Link>
                            <Nav.Link href="/sobre-nosotros">Sobre Nostros</Nav.Link>
                            <Nav.Link href="/todos-los-comentarios">Comentarios</Nav.Link>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )

}

export default Navigation
