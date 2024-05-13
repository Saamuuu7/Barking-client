import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import BarCard from "../../components/BarCard/BarCard";
const apiUrl = 'http://localhost:5005'

const BarsList = () => {


    const [bars, setBars] = useState([])

    useEffect(() => {
        getAllBars()
    }, [])

    const getAllBars = () => {
        axios
            .get(`${apiUrl}/bars`)
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
