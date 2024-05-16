import { useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Navbar.css'
const Navigation = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="Navigation mb-5 pb-2">

            <Navbar expand='' expanded={expanded} className="bg-body-tertiary fixed-top "  >
                <Container>
                    <Link to='/' style={{ textDecoration: 'none' }}>

                        <Navbar.Brand onClick={() => setExpanded(false)}>
                            <img
                                alt=''
                                src='https://res.cloudinary.com/dmwybmzwx/image/upload/v1715876899/noun-bold-4613613_mwjj6l.png'
                                height={30}
                                className="d-inline-block align-top"


                            ></img>

                        </Navbar.Brand>
                    </Link>

                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Navbar.Brand onClick={() => setExpanded(false)}>Barking</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" style={{ border: 'none ' }} />

                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto" >

                            <Link to='/bars' className='mt-5' style={{ textDecoration: 'none' }} >
                                <Nav.Link as='span' onClick={() => setExpanded(false)} >Bares</Nav.Link>
                            </Link>

                            <Link to='/bar/nuevo-bar' style={{ textDecoration: 'none' }} >
                                <Nav.Link as='span' onClick={() => setExpanded(false)}>Añade un nuevo Bar</Nav.Link>
                            </Link>

                            <Link to='/todos-los-comentarios' style={{ textDecoration: 'none' }} >
                                <Nav.Link as='span' onClick={() => setExpanded(false)}>Comentarios</Nav.Link>
                            </Link>

                            <Link to='/sobre-nosotros' style={{ textDecoration: 'none' }} >
                                <Nav.Link as='span' onClick={() => setExpanded(false)}>Sobre Nostros</Nav.Link>
                            </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >

    )

}

export default Navigation
