import CustomButton from '../CustomButton';

import './styles.scss';
import logo from '../../assets/images/logo.png';

export default function SideBar() {
    return (
        <div className="side-bar-container">
            <div className="logo">
                <img src={logo} alt="ReactPro" />
            </div>
            <div className="sign-out">
                <CustomButton
                    onClick={() => alert('miau')}
                >
                    Sair
                </CustomButton>
            </div>
        </div>
    )
}