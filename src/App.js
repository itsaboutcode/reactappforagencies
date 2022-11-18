import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';  
import Login from "./Components/Login/Login.js";
import Dashboard from './Components/Dashboard/Dashbaord.js';


function App() {
  return (
    <>
    {/* <Login /> */}
    <Dashboard />
    
    </>
  );
}

export default App;
