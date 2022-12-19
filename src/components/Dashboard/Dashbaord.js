import React from "react";
import Navbar from "./Navbar";
import Topnavbar from "./TopNavbar";
import DashboardPage from "./Pages/DashboardPage";

import './dashboard.css';
import './dashboard-responsive.css';
import ClientsRequest from "./Pages/ClientsRequest";


const Dashboard = () => {


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