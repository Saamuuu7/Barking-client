import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {


    return (
        <div className="Navigation">

            <Navbar expand="" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>Barking</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">

                            <Link to='/bars' style={{ textDecoration: 'none' }}>
                                <Nav.Link as='span'>Bares</Nav.Link>
                            </Link>

                            <Link to='/sobre-nosotros' style={{ textDecoration: 'none' }}>
                                <Nav.Link as='span'>Sobre Nostros</Nav.Link>
                            </Link>

                            <Link to='/todos-los-comentarios' style={{ textDecoration: 'none' }}>
                                <Nav.Link as='span'>Comentarios</Nav.Link>
                            </Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )

}

export default Navigation
