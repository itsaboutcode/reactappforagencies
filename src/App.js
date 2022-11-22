import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';  
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Login from "./Components/Login/Login.js";
import Dashboard from './Components/Dashboard/Dashbaord.js';




function App() {


  return (
    <>
 
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}


export default App;
