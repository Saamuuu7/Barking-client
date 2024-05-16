import { Container, Button, Col, Row, Offcanvas, Spinner, Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CarrSlider from "../../components/CarrSlider/CarrSlider"
import AddCommentForm from "../../components/AddCommentForm/AddCommentForm"
import CommentCard from "../../components/CommentCard/CommentCard"
import BarMap from "./BarMap";
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
                                borderBottom: "2px  black",

                            }} />

                        </div>

                        <Row>

                            <Col xs={12} sm={12} md={6} lg={6}>
                                <CarrSlider className='Slider mt-2' gallery={gallery} title={bar.title} />
                            </Col>


                            <Col xs={12} sm={12} md={6} lg={6} className="pt-1 mt-2 mb-3 px-3 " style={{ paddingBottom: "5px" }}>
                                <div>

                                    <p className="text-muted">{bar.description} <br />
                                        Capacidad para {bar.capacity} personas
                                    </p>
                                </div>

                                <hr />


                                <div className="d-flex flex-wrap">
                                    Precio medio:<p className="text-muted mx-1">Oscila entre los {bar.average_price}</p>
                                </div>


                                <div className="d-flex flex-wrap">
                                    Horario de apertura:
                                    <p className="text-muted mx-1">{bar.opening_hours} h</p>
                                </div>


                                <div className="d-flex flex-wrap" >
                                    Accesibilidad:  {bar.handicapped ?
                                        <p className="text-muted mx-1">Lugar habilitado para minusválidos ♿️</p>
                                        :
                                        <p lassName="text-muted mx-1 ">No habilitado para minusválidos 🚫</p>}
                                </div>



                                <div className="d-flex flex-wrap">
                                    Datos de contacto:
                                    <p className="text-muted mx-1 ">{bar.contact.email} / </p>
                                    <p className="text-muted mx-1 ">{bar.contact.phone_number}</p>
                                </div>


                                <div className="d-flex flex-wrap">
                                    Valoración:
                                    <p className="text-muted mx-1 ">{bar.rating} ⭐</p>
                                </div>
                            </Col>
                        </Row>




                        <BarMap address={bar.address} />



                        <Row>
                            <Col md={{ span: 6 }}>
                                <div className="text-center mb-4">
                                    <h4 className="mb-3 mt-5 pb-4" style={{
                                        borderBottom: "2px solid black",
                                        paddingBottom: "5px"
                                    }}>
                                        Añada su comentario
                                    </h4>
                                </div>

                                <AddCommentForm title={bar.title} getBarDetail={() => getBarDetail()} />

                            </Col>
                            <br></br>

                            <Col md={{ offset: 1, span: 5 }}>
                                <div className="text-center mb-4">
                                    <h4 className="mb-3 mt-5 pb-4" style={{
                                        borderBottom: "2px solid black",
                                        paddingBottom: "5px"
                                    }}>
                                        Comentarios recientes</h4>
                                </div>







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