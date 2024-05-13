import { Container, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
const apiUrl = 'http://localhost:5005'


const BarDetailsPage = () => {

    const [bar, setBar] = useState({})

    const navigate = useNavigate()

    const { barId } = useParams()

    useEffect(() => {
        getBarDetail()
    }, [])

    const getBarDetail = () => {
        axios
            .get(`${apiUrl}/bars/${barId}`)
            .then(({ data }) => setBar(data))
            .catch((err) => console.log(err))
    }

    return (
        <>
            <Container>
                <p>{bar.title}</p>
                <Button variant="secondary" size="sm" onClick={() => {
                    navigate(`/bar/editar-bar/${barId}`);
                }}>
                    Editar
                </Button>
            </Container >
        </>
    )

}


export default BarDetailsPage