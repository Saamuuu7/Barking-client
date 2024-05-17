import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Row, Col, Spinner, Container, Image } from "react-bootstrap"
import './CommentCard.css'
const API_URL = import.meta.env.VITE_API_URL

const CommentCard = ({ barId, text, rating, posted_by, image_url }) => {

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getBarInfo()
    }, [barId])


    const getBarInfo = () => {
        axios
            .get(`${API_URL}/bars/${barId}`)
            .then(({ data }) => {
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }

    return (

        isLoading
            ?
            <Spinner animation="grow" />
            :

            <Card className='mb-5 mt-5 CommentCard'>
                <Card.Body>
                    <Row>
                        <Col md={8}>
                            <Card.Text className="mb-0 mt-2">・Publicado por: <strong>{posted_by}</strong></Card.Text>
                            <Card.Text className="mb-0 mt-0">・"{text}"</Card.Text>
                            <Card.Text className="mb-1 mt-0">・Valoración: {rating} ⭐</Card.Text>
                            <Card.Text className="mb-1 mt-0">・{posted_by} añadió las siguientes fotos de su experiencia: </Card.Text>
                        </Col>
                        <Col md={4}>
                            <Image src={image_url[0]} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    )
}

export default CommentCard