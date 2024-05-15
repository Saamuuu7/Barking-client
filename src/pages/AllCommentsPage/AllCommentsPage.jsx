import { Container, Card } from "react-bootstrap"
import CommentCard from "../../components/CommentCard/CommentCard"
import { useEffect, useState } from "react"
import axios from "axios"
import CommentsList from "../../components/CommentsList/CommentList"
const API_URL = import.meta.env.VITE_API_URL


const AllCommentsPage = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getAllcomments()
    }, [])

    const getAllcomments = () => {
        axios
            .get(`${API_URL}/comments`)
            .then(({ data }) => setComments(data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="AllCommentsPage">

            <Container>
                <h1 className="mt-5">Comentarios</h1>
                <hr />
                <CommentsList />
            </Container>
        </div>

    )






}

export default AllCommentsPage