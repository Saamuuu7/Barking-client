import React from 'react';
import { Container } from 'react-bootstrap';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';

const AddCommentsPage = () => {
    return (
        <div className="AddCommentPage mt-0">
            <Container>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="row justify-content-center w-100">
                        <div className="col-md-6">
                            <h1 className="text-center">Añada su comentario</h1>
                            <hr className="mx-auto d-block w-50" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                            <AddCommentForm />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddCommentsPage;
