import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';  
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Login from "./Components/Login/Login.js";
import Admin from './layouts/Admin';
import ClientsRequest from './Components/Dashboard/Pages/ClientsRequest';
import ActiveJobs from './Components/Dashboard/Pages/ActiveJobs';
import JobDescription from './Components/Dashboard/Pages/JobDescription';
import FinishedJobs from './Components/Dashboard/Pages/FinishedJobs';
import JobDetailsPage from './Components/Dashboard/Pages/JobDetailsPage';
import BidJobPage from './Components/Dashboard/Pages/BidJobPage';



function App() {


  return (
    <>
 
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/clientsRequest" element={<ClientsRequest />} />
        <Route path="/activeJobs" element={<ActiveJobs />} />
        <Route path="/finishedJobs" element={<FinishedJobs />} />
        <Route path="/jobDescription" element={<JobDescription />} />
        <Route path="/jobDetailsPage" element={<JobDetailsPage />} />
        <Route path="/bidJobPage" element={<BidJobPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
