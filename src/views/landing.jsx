import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
    return (
        <div>
        <h1>HALOOOOOOOO TEST</h1>
        <button onClick={() => navigate("/home")}>lanjut</button>
        </div>
    );
}

export default Landing;
