import axios from "axios"
import { useState } from "react"
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const apiUrl = 'http://localhost:5005'

const AddCommentForm = () => {

    const initialState = {
        title: '',
        description: '',
        average_price: '',
        rating: 0,
        gallery: [''],
    }
    return (
        <h1>hola</h1>
    )
}

export default AddCommentForm
