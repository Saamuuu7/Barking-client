import axios from "axios"
import { useState } from "react"
import { Form, Button, InputGroup, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const apiUrl = 'http://localhost:5005'

const AddCommentForm = ({ barId }) => {
    const [newComment, setNewComment] = useState({
        title: '',
        comment: '',
        average_price: '',
        rating: 0,
        image_url: ['']
    });

    const navigate = useNavigate();


    const handleCommentChange = event => {
        const { name, value } = event.target
        setNewComment({
            ...newComment,
            [name]: value
        });
    };

    const addImageFild = () => {
        const image_urlCopy = [...newComment.image_url]
        image_urlCopy.push('')
        setNewComment({ ...newComment, image_url: image_urlCopy })
    }

    const handleGalleryChange = (e, index) => {
        const { value } = e.target

        const image_urlCopy = [...newComment.image_url]
        image_urlCopy[index] = value

        setNewComment({ ...newComment, image_url: image_urlCopy })
    }

    const handleCancel = () => {
        navigate('/todos-los-comentarios');
    };


    const handleForSubmit = e => {
        e.preventDefault()

        axios
            .post(`${apiUrl}/comments`, newComment)
            .then(() => navigate('/todos-los-comentarios'))
            .catch((err) => console.log(err))

    }


    return (

        <div className="AddCommentForm ">

            <br></br>
            <Form onSubmit={handleForSubmit} style={{ marginBottom: '50px', marginTop: '20px' }}>




                <Form.Group className="mb-10" controlId="comment">
                    <Form.Label>Comentario</Form.Label>
                    <InputGroup hasValidation>

                        <Form.Control
                            as="textarea"
                            placeholder="Introduzca su comentario"
                            name="comment"
                            value={newComment.comment}
                            onChange={handleCommentChange}
                            required
                        />
                    </InputGroup>

                </Form.Group>

                <Form.Group className="mb-3" controlId="average_price">
                    <Form.Label>Precio Medio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entre 00€ - 00€"
                        name="average_price"
                        value={newComment.average_price}
                        onChange={handleCommentChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, rellene con el precio medio por comida/cena.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Valoración</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Introduzca un número entre el 1 y el 5"
                        name="rating"
                        value={newComment.rating}
                        min={1}
                        max={5}
                        onChange={handleCommentChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, añada una valoración.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="image_url">
                    <Form.Label>Añadir fotos</Form.Label>
                    {
                        newComment.image_url.map((eachField, idx) => (
                            <Form.Control
                                key={idx}
                                className="mt-2"
                                type="url"
                                placeholder="Introduzca fotos del bar"
                                value={eachField}
                                onChange={e => handleGalleryChange(e, idx)}
                            />
                        ))}


                    <Button className="w-100" variant="secondary" onClick={addImageFild}>
                        Añadir nueva foto
                    </Button>


                </Form.Group>




                <Form.Group className="mb-4" controlId="comment">
                    <Form.Label>Publicado por</Form.Label>
                    <InputGroup hasValidation>

                        <Form.Control
                            as="textarea"
                            placeholder="Introduzca su nombre"
                            name="comment"
                            value={newComment.posted_by}
                            onChange={handleCommentChange}
                            required
                        />
                    </InputGroup>

                </Form.Group>





                <Button variant="dark" type="submit" className="w-100" style={{ marginTop: '20px' }} onClick={handleForSubmit}>
                    Guardar
                </Button>
                <Button variant="secondary" type="button" className="w-100" style={{ marginTop: '20px' }} onClick={handleCancel}>
                    Cancelar Envio
                </Button>
            </Form>

        </div>

    );
};






export default AddCommentForm