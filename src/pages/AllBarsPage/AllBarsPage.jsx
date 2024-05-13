import Container from "react-bootstrap/Container"
import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import BarCard from "../../components/BarCard/BarCard";
import { Link } from "react-router-dom";
const apiUrl = 'http://localhost:5005'

const AllBarsPage = () => {


    const [bars, setBars] = useState([])

    // const [imageError, setImageError] = useState(false);


    useEffect(() => {
        getAllBars()
    }, [])

    const getAllBars = () => {
        axios
            .get(`${apiUrl}/bars`)
            .then(({ data }) => setBars(data))
            .catch(err => console.log(err))
    }

    // const handleImageError = () => {
    //     setImageError(true);
    // };


    return (
        <div className="">
            <Row>
                {bars.map(eachBar => (
                    <div key={eachBar.id}>

                        <BarCard {...eachBar} />

                    </div>
                ))}
            </Row>
        </div>
    );

}

export default AllBarsPage;
