import { Card, Row, Col, } from "react-bootstrap"

const CommentCard = ({ id, barId, text, recommends, rating, image_url, posted_by }) => {

    return (
        <Card className=' d-block' style={{ marginBottom: '30px', marginTop: '20px', marginRight: '40px', marginLeft: '40px', boxShadow: '0 8px 6px rgba(0, 0, 0, 1)' }} >
            <Card.Body style={{ backgroundColor: '#F5F5DC', width: '100%' }}>

                <Card.Title className="text-center">{barId}</Card.Title>
                <hr className="mx-auto d-block w-50" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 10)' }} />
                <Card.Subtitle>{text}</Card.Subtitle>
                <br></br>
                <Card.Text>{recommends}</Card.Text>
                <Card.Text>Publicado por: {posted_by}</Card.Text>
                <Card.Text> Valoración: {rating} ⭐</Card.Text>
            </Card.Body>
        </Card >
    )

}
export default CommentCard