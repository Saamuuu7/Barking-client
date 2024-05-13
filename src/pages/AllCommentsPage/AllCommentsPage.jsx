import { Container, Card } from "react-bootstrap"
import CommentCard from "../../components/CommentCard/CommentCard"
import { useEffect, useState } from "react"
import axios from "axios"
const apiUrl = 'http://localhost:5000'


const AllCommentsPage = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getAllcomments()
    }, [])

    const getAllcomments = () => {
        axios
            .get(`${apiUrl}/comments`)
            .then(({ data }) => setComments(data))
            .catch((err) => console.log(err))
    }

    return (
        <Container>
            <div className="allCommentsPage">
                {
                    comments.map(eachComment => {
                        return (
                            < Card style={{ marginTop: '20px', marginBottom: '20px', width: '900px', boxShadow: '0 8px 6px rgba(1, 1, 1, 1)' }}>
                                <Card.Body style={{ backgroundColor: '#F5F5DC' }}>
                                    < CommentCard key={eachComment.id} {...eachComment} />
                                </Card.Body>
                            </Card >
                        )
                    })
                }
            </div>
        </Container>
    )






}

export default AllCommentsPage