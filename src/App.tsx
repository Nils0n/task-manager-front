import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./index.scss";


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
