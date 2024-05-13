import { Container } from "react-bootstrap";
import BarsList from "../../components/BarsList/BarsList";

const AllBarsPage = () => {

    return (
        <div className="AllBarsPage">
            <Container>
                <h1>Listado de bares</h1>
                <hr />
                <BarsList />
            </Container>
        </div>
    );

}

export default AllBarsPage;
