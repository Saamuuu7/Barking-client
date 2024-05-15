import { Container, Button, Col, Row, Offcanvas, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CarrSlider from "../../components/CarrSlider/CarrSlider"
import AddCommentForm from "../../components/AddCommentForm/AddCommentForm"
import CommentCard from "../../components/CommentCard/CommentCard"
const API_URL = import.meta.env.VITE_API_URL

const BarDetailsPage = ({ name, ...props }) => {
    const [bar, setBar] = useState({})

    const [gallery, setGallery] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const { barId } = useParams()

    useEffect(() => {
        getBarDetail()
    }, [])

    const getBarDetail = () => {
        axios
            .get(`${API_URL}/bars/${barId}?_embed=comments`)
            .then(({ data }) => {
                setBar(data)
                setGallery(data.gallery)
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }

    const handleDeleteElement = () => {
        axios
            .delete(`${API_URL}/bars/${barId}`)
            .then(({ data }) => {
                setBar(data)
                setGallery(data.gallery)
            })
            .catch((err) => console.log(err))
        navigate(`/bars`)
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                isLoading ? <Spinner animation="grow" /> :
                    <Container className="mb-5">
                        <div className="BarDetailsPage ">
                            <h1 className="mx-auto d-block w-100 pt-5 text-center">{bar.title}</h1>
                            <hr className="mx-auto d-block w-50 mb-5" style={{
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 10)'
                            }} />
                            <Row>

                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <CarrSlider className='Slider mt-2' gallery={gallery} title={bar.title} />
                                </Col>

                                <Col xs={12} sm={12} md={6} lg={6} className="pt-5">
                                    <div>
                                        <h4 className="mt-5 mb-4 px-3" style={{
                                            borderBottom: "2px solid black",
                                            paddingBottom: "5px"
                                        }}>
                                            Descripción
                                        </h4>
                                        <p className="text-muted">{bar.description} <br />
                                            Capacidad para {bar.capacity} personas
                                        </p>
                                    </div>
                                </Col>

                                <Row>
                                    <Col>

                                        <div className="text-center mb-4">
                                            <h4 className="mb-3 mt-5" style={{
                                                borderBottom: "2px solid black",
                                                display: "inline-block",
                                                paddingBottom: "5px"
                                            }}>
                                                Nuestro Precio Medio
                                            </h4>
                                        </div>

                                        <p className="text-muted text-center">Oscila entre los : {bar.average_price}</p>

                                    </Col>

                                    <Col>

                                        <div className="text-center mb-4">
                                            <h4 className="mb-3 mt-5" style={{
                                                borderBottom: "2px solid black",
                                                display: "inline-block",
                                                paddingBottom: "5px"
                                            }}>
                                                Horarios de Apertura
                                            </h4>
                                        </div>

                                        <p className="text-muted text-center">{bar.opening_hours} h</p>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col>
                                        <div className="text-center mt-4 pt-5 pb-5">
                                            <h4 className='mb-4' style={{
                                                borderBottom: "2px solid black",
                                                display: "inline-block",
                                                paddingBottom: "5px"
                                            }}>
                                                Accesibilidad
                                            </h4>
                                            {bar.handicapped ?
                                                <p className="text-muted ">Lugar Habilitado para minusválidos ♿️</p>
                                                :
                                                <p lassName="text-muted ">No habilitado para minusválidos 🚫</p>}
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="text-center mt-4 pt-5 pb-5 mb-4">
                                            <h4 className='mb-4' style={{
                                                borderBottom: "2px solid black",
                                                display: "inline-block",
                                                paddingBottom: "5px"
                                            }}>
                                                Datos De contacto
                                            </h4>
                                            <p className="text-muted ">{bar.contact.email}</p>
                                            <p className="text-muted ">{bar.contact.phone_number}</p>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="text-center mt-4 pt-5 pb-5 mb-4">
                                            <h4 className='mb-4' style={{
                                                borderBottom: "2px solid black",
                                                display: "inline-block",
                                                paddingBottom: "5px"
                                            }}>
                                                Nuestra Valoración
                                            </h4>
                                            <p className="text-muted ">{bar.rating} ⭐</p>

                                        </div>

                                    </Col>
                                </Row>

                            </Row>

                            <Row>
                                <div className="text-center mb-4">
                                    <h4 className="mb-3 mt-5 pb-4" style={{
                                        borderBottom: "2px solid black",
                                        paddingBottom: "5px"
                                    }}>
                                        Añada su comentario
                                    </h4>
                                </div>


                                <AddCommentForm />

                                <div className="text-center mb-4">
                                    <h4 className="mb-3 mt-5 pb-4" style={{
                                        borderBottom: "2px solid black",
                                        paddingBottom: "5px"
                                    }}>
                                        Estas Son Nuestras Reseñas
                                    </h4>
                                </div>

                                <Col>

                                    {bar.comments.map(elm => (
                                        <CommentCard
                                            barId={bar.id}
                                            key={elm.id}
                                            id={elm.id}
                                            text={elm.text}
                                            rating={elm.rating}
                                            image_url={elm.image_url}
                                            posted_by={elm.posted_by}
                                        />
                                    ))}

                                </Col>

                            </Row>
                        </div >


                        <Button variant="secondary" onClick={handleShow} className="me-2 mt-5 w-100   ">
                            Aporta tu granito de Arena
                        </Button>
                        <Offcanvas show={show} onHide={handleClose} {...props}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Ayudanos a Mejorar la Experiencia</Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <p>
                                    Nos tomamos muy enserio Barking y confiamos plenamente en nuestros clientes,
                                    edita en caso de ver algun fallo. Muchas Gracias
                                </p>

                                <Button className="mt-2 mb-5 w-100" variant="secondary" size="sm"
                                    onClick={() => {
                                        navigate(`/bar/editar-bar/${barId}`);
                                    }}>
                                    Editar
                                </Button>

                                <br />
                                <p>
                                    ¿Crees que este Bar sobra en la Página de Barking? ¡¡Elimínalo!!
                                </p>

                                <Button className="mt-2 mb-5 w-100" variant="danger" size="sm"
                                    onClick={handleDeleteElement}>
                                    Delete
                                </Button>
                            </Offcanvas.Body>

                        </Offcanvas>

                    </Container >
            }
        </>
    )
}

export default BarDetailsPage