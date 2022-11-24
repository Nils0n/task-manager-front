import CustomButton from '../CustomButton';

import './styles.scss';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="ReactPro" />
      </div>
      <div className="sign-out">
        <CustomButton
          onClick={() => navigate('/login')}
        >
                    Sair
        </CustomButton>
      </div>
    </div>
  );
}