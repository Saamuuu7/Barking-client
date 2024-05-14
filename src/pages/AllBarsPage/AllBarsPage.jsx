import { Container } from "react-bootstrap";
import BarsList from "../../components/BarsList/BarsList";

const AllBarsPage = () => {

    return (
        <div className="AllBarsPage">
            <Container>
                <h1 className="text-center mt-4 ">Listado de bares</h1>
                <hr className="mx-auto d-block w-50" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 10)' }} />

                {/* <hr /> */}
                <BarsList />
            </Container>
        </div>
    );

}

export default AllBarsPage;
