import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import BarCard from "../../components/BarCard/BarCard";
const API_URL = import.meta.env.VITE_API_URL

const BarsList = () => {


    const [bars, setBars] = useState([])

    useEffect(() => {
        getAllBars()
    }, [])

    const getAllBars = () => {
        axios
            .get(`${API_URL}/bars`)
            .then(({ data }) => setBars(data))
            .catch(err => console.log(err))
    }

    return (
        <Row>
            {
                bars.map(eachBar => (
                    <div key={eachBar.id}>
                        <BarCard {...eachBar} />
                    </div>
                ))
            }
        </Row>
    );

}

export default BarsList;
