import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Row, Col, Spinner } from "react-bootstrap"
import CarrSlider from "../CarrSlider/CarrSlider"
const API_URL = import.meta.env.VITE_API_URL

const CommentCard = ({ barId, text, rating, image_url, posted_by }) => {

    const [barData, setBarData] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getBarInfo()
    }, [barId])

    const getBarInfo = () => {
        axios
            .get(`${API_URL}/bars/${barId}`)
            .then(({ data }) => setBarData(data))
            .catch((err) => console.log(err))
        setIsLoading(false)



    }

    return (


        isLoading ? <Spinner animation="grow" /> :

            <Card className=' mb-5 mt-5 mx-4' style={{ boxShadow: 'none' }}>
                <Card.Body style={{ width: '100%' }}>
                    <Row className="text-center mt-3">
                        <Col>
                            <Card.Text className="mb-5">Publicado por: <strong>{posted_by}</strong></Card.Text>
                        </Col>

                        <Col>
                            <Card.Text>Valoración: {rating} ⭐</Card.Text>
                        </Col>
                    </Row>

                    <Card.Text className="mb-5">"{text}"</Card.Text>

                    <Card.Text className="mt-2">{posted_by}  añadió las siguientes fotos de su experiencia: </Card.Text>
                    <CarrSlider gallery={image_url} title={barData.title} />

                    <br></br>
                </Card.Body>
            </Card>
    )
}

export default CommentCard
