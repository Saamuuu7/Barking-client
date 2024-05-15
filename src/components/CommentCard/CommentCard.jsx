import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Row, Col, } from "react-bootstrap"
import CarrSlider from "../CarrSlider/CarrSlider"
const apiUrl = 'http://localhost:5005'

const CommentCard = ({ barId, text, rating, image_url, posted_by }) => {

    const [barData, setBarData] = useState({})

    useEffect(() => {
        getBarInfo()
    }, [])


    const getBarInfo = () => {
        axios
            .get(`${apiUrl}/bars/${barId}`)
            .then(({ data }) => setBarData(data))
            .catch((err) => console.log(err))

    }

    return (
        <Card className=' d-block mb-5 mt-2 mx-4' style={{
            boxShadow: '0 8px 6px rgba(0, 0, 0, 1)'
        }} >
            <Card.Body style={{
                backgroundColor: '#F5F5DC', width: '100%'
            }}>
                <Row className="text-center mt-3">
                    <Col>
                        <Card.Text className="mb-5"><h3>Publicado por:<strong>  {posted_by}</strong></h3></Card.Text>
                    </Col>

                    <Col>
                        <Card.Text>Valoración: {rating} ⭐</Card.Text>
                    </Col>
                </Row>

                <Card.Subtitle className="mb-5">{text}</Card.Subtitle>

                <Card.Text className="mt-2">{posted_by}  añadió las siguientes fotos de su experiencia: </Card.Text>
                <CarrSlider gallery={image_url} title={barData.title} />

                <br></br>
            </Card.Body>
        </Card >
    )

}
export default CommentCard