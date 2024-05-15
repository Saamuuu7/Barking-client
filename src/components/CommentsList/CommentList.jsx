import CommentCard from "../CommentCard/CommentCard"
import { useEffect, useState } from "react"
import axios from "axios"
const apiUrl = 'http://localhost:5005'

const CommentsList = () => {

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
        <div className="CommentsList">
            {
                comments.map(eachComment => {
                    return (
                        <CommentCard key={eachComment.id} {...eachComment} />
                    )
                })
            }
        </div>
    )
}

export default CommentsList