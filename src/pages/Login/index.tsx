import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-2.png";
import CustomButton from "../../components/CustomButton";

import "./styles.scss";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <img src={logo} alt="Full Stack Club" />
            <div className="button-container">
                <CustomButton onClick={() => navigate('/')}>
                    Entrar
                </CustomButton>
            </div>
        </div>
    )
}