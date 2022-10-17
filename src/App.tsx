import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Tasks from './components/Tasks';

function App() {


  return (
    <>
      <Tasks />
      <ToastContainer />

    </>
  )
}

export default App
