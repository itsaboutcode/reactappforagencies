import React from "react";
import Navbar from "./Navbar";
import Topnavbar from "./TopNavbar";
import DashboardPage from "./Pages/DashboardPage";

import { Routes, Route, useNavigate } from "react-router-dom";

import './dashboard.css';
import './dashboard-responsive.css';


const Dashboard = () => {

    const navigate = useNavigate();
// const dashboardPage = () => {
//   // 👇️ navigate to /
//   navigate('/dashboard');
// };


    return(
        <>
            <div className="topBarShadowRight"></div>
            <div className="container">
                <div className="main-body">
                    
                    <Navbar />
                    
                    <div>
                    
                        <Topnavbar />

                        <DashboardPage />
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;