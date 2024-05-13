import { Container, Card } from "react-bootstrap"
import CommentCard from "../../components/CommentCard/CommentCard"
import { useEffect, useState } from "react"
import axios from "axios"
import CommentsList from "../../components/CommentsList/ListComments"
const apiUrl = 'http://localhost:5005'


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
        <div className="AllCommentsPage">

            <Container>
                <h1 className="mt-5">Cometarios</h1>
                <hr />
                <CommentsList />
            </Container>
        </div>

    )






}

export default AllCommentsPage