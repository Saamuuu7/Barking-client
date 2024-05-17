import axios from "axios"
import { useEffect, useState } from "react"
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import './AddBarForm.css'
const API_URL = import.meta.env.VITE_API_URL


const AddBarForm = () => {

    const initialState = {
        title: '',
        description: '',
        address: {
            text: '',
            latitude: 0,
            longitude: 0
        },
        average_price: '',
        rating: 0,
        opening_hours: '',
        gallery: [''],
        handicapped: false,
        contact: {
            phone_number: "",
            email: ''
        },
        capacity: 0
    }

    const [newBar, setNewBar] = useState(initialState)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value, checked, type } = e.target
        setNewBar({ ...newBar, [name]: value })

        if (type === 'checkbox') {
            setNewBar({ ...newBar, [name]: checked });
        } else {
            setNewBar({ ...newBar, [name]: value });
        }

    }

    const handleContactChange = e => {
        const { name, value } = e.target
        setNewBar({
            ...newBar, contact: {
                ...newBar.contact, [name]: value
            }
        })
    }

    const addImageFild = () => {
        const galleryCopy = [...newBar.gallery]
        galleryCopy.push('')
        setNewBar({ ...newBar, gallery: galleryCopy })
    }

    const handleGalleryChange = (e, index) => {
        const { value } = e.target

        const galleryCopy = [...newBar.gallery]
        galleryCopy[index] = value

        setNewBar({ ...newBar, gallery: gallerxyCopy })
    }

    const [addressValue, setAddressValue] = useState()
    console.log(addressValue)

    useEffect(() => {
        if (addressValue) {
            handleAutocomplete();
        }
    }, [addressValue]);


    const handleAutocomplete = () => {
        if (addressValue && addressValue.label) {
            geocodeByAddress(addressValue.label)
                .then(([addressDetails]) => {
                    setNewBar({
                        ...newBar, address: {
                            text: addressDetails.formatted_address,
                            latitude: addressDetails.geometry.location.lat(),
                            longitude: addressDetails.geometry.location.lng()
                        }
                    });
                    return getLatLng(addressDetails);
                })
                .then((coordinates) => {
                    console.log('LAS COORDENADAS', coordinates)
                })
                .catch(error => console.error(error))
        }
    }


    const handleFormSubmit = e => {
        e.preventDefault()

        axios
            .post(`${API_URL}/bars`, newBar)
            .then(() => navigate('/bars'))
            .catch((err) => console.log(err))

    }

    const handleCancel = () => {
        setNewBar(initialState)
    }


    return (

        <div className="AddBarForm">

            <Form onSubmit={handleFormSubmit} >

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Nombre del Bar * </Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type='text'
                            placeholder="Introduce el nombre del Bar"
                            name="title"
                            value={newBar.title}
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor,rellene con el nombre del Bar que desea añadir.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Introduce una breve descripción"
                        name="description"
                        value={newBar.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="AveragePrice">
                    <Form.Label>Precio Medio *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entre 00€ - 00€"
                        name="average_price"
                        value={newBar.average_price}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, rellene con el precio medio por comida/cena.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Valoración *</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Introduzca un número entre el 1 y el 5"
                        name="rating"
                        min={1}
                        max={5}
                        value={newBar.rating}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, Añada una Valoración.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="opening_hours">
                    <Form.Label>Horarios de Apertura y Cierre *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="horarios de apertura 00:00 - 00:00"
                        name="opening_hours"
                        value={newBar.opening_hours}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, Añada unos Horarios de apertura al Púbiclo .
                    </Form.Control.Feedback>
                </Form.Group>
                {/* --------------------------------- */}

                <Form.Group className="mb-3" controlId="Gallery" >
                    <Form.Label>Añade fotos</Form.Label>
                    {
                        newBar.gallery.map((eachField, idx) => {
                            return (
                                <Form.Control
                                    key={idx}
                                    className="mt-2"
                                    type="url"
                                    placeholder="Introduzca fotos del bar"
                                    value={eachField}
                                    onChange={e => handleGalleryChange(e, idx)}
                                />
                            )
                        })
                    }
                </Form.Group>

                <Button className="w-100" variant="secondary" onClick={addImageFild}>Añadir nueva foto</Button>

                {/* -------------------------------- */}

                <Form.Group className="mb-3" controlId="handicapped" style={{ marginTop: '20px' }}>
                    <Form.Check
                        type="checkbox"
                        label="Habilitado para Discapacitados"
                        name="handicapped"
                        value={newBar.handicapped}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="capacity">
                    <Form.Label>Indica El Aforo Máximo</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Introduce el aforo máximo del Bar"
                        name="capacity"
                        value={newBar.capacity}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="details">
                    <Form.Label>Calle y Número * </Form.Label>
                    <InputGroup hasValidation>
                        <GooglePlacesAutocomplete
                            selectProps={{
                                addressValue,
                                onChange: setAddressValue,
                            }}
                            apiKey="AIzaSyDsI3rFC_Y0nwuiKtPsRePgOe15jqZRja4"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor,rellene con la calle del Bar.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Row style={{ marginBottom: '30px', marginTop: '30px' }}>
                    <p className="text-center">Datos de la Dirección</p>
                    <hr />

                    <Col>
                        <Form.Group className="mb-3" controlId="phone_number">
                            <Form.Label>Número de Contacto *</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text>📞</InputGroup.Text>
                                <Form.Control
                                    type='text'
                                    placeholder="Introduzca el teléfono de contacto"
                                    name="phone_number"
                                    value={newBar.contact.phone_number}
                                    onChange={handleContactChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, complete este campo.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email de Contacto *</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control
                                    type='text'
                                    placeholder="Introduzca el email de contacto"
                                    name="email"
                                    value={newBar.contact.email}
                                    onChange={handleContactChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, complete este campo.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>

                </Row>

                <Button variant="dark" type="submit" className="w-100" style={{ marginTop: '20px' }}>
                    Guardar
                </Button>

                <Button variant="secondary" type="cancel" className="w-100" style={{
                    marginTop: '20px'
                }}
                    onClick={handleCancel}>
                    Cancelar Envio
                </Button>

            </Form>

        </div>

    )
}

export default AddBarForm
