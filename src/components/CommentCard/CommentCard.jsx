import { Container, Row, Col } from "react-bootstrap"

const CommentCard = ({ id, barId, text, recommends, rating, image_url, posted_by }) => {

    return (
        <Container style={{ marginBottom: '60px' }}>
            <div className="commentCard">
                <img src={image_url} alt="imagen" style={{ width: '100%', height: '400px' }} />
                <h3 className='text-center' style={{ width: '100%' }}>{text}</h3>
                <p>{recommends}</p>
                <p>{rating}</p>
                <p>{posted_by}</p>
            </div>
        </Container >
    )






}
export default CommentCard