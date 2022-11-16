import React from "react";
import Navbar from "./Navbar";
import Topnavbar from "./TopNavbar";
import CardsDashboard from "./CardsDashboard";
import GraphDashboard from "./GraphDashboard";

import './dashboard.css';
import './dashboard-responsive.css';


const Dashboard = () => {
    return(
        <>
            <div className="topBarShadowRight"></div>
            <div className="container">
                <div className="main-body">
                    
                    <Navbar />
                    
                    <div>
                    
                        <Topnavbar />

                        <CardsDashboard />
                        
                        <GraphDashboard />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;