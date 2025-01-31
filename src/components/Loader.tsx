import { Spinner } from 'reactstrap';

const Loader = ({ color = "light" }) => {
    return (
        <div className="loader-overlay d-flex flex-column justify-content-center align-items-center text-light">
            <Spinner color={color} style={{ width: '4rem', height: '4rem' }} />
            <p className="mt-3 fw-bold fs-4">Loading...</p>
        </div>
    );
};

export default Loader;
