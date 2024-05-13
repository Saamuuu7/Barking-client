import { Container, Row, Col } from "react-bootstrap"
import EditBarForm from "../../components/EditBarForm/EditBarForm";

const EditBarPage = () => {

    return (
        <div className="AddBarPage mt-3">
            <Container>
                <h1 className="text-center" style={{ marginBottom: '20px' }}>TU BAR EN ¡¡ BARKING ©️!! </h1>
                <hr className="mx-auto d-block w-50" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 10)' }} />
                <Row>
                    <Col md={{ span: 6, offset: 3 }} >
                        <EditBarForm />
                    </Col>
                </Row>
            </Container>

        </div >

    )

}
export default EditBarPage