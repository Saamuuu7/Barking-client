import { Container, Card } from "react-bootstrap"
import AddForm from "../../components/AddForm/AddForm"

const AddBarPage = () => {

    return (
        <Container className="d-flex justify-content-center align-items-center">

            <Card style={{ marginTop: '20px', marginBottom: '20px', width: '1400px', boxShadow: '0 8px 6px rgba(1, 1, 1, 1)' }}>
                <Card.Body style={{ backgroundColor: '#F5F5DC' }}>
                    <AddForm />
                </Card.Body>
            </Card>
        </Container>
    );
}
export default AddBarPage
