import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './index.scss';
import SideBar from "./components/SideBar";
import Tasks from './components/Tasks';

function App() {


  return (
    <div className="app-container">
      <SideBar />
      <Tasks />
      <ToastContainer />
    </div>
  )
}

export default App
