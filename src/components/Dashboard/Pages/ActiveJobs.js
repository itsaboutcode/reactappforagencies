import React from "react";
import Navbar from "../Navbar";
import Topnavbar from "../TopNavbar";


const ActiveJobs = () => {
    return(
        <>
        <div className="topBarShadowRight"></div>
            <div className="container">
                <div className="main-body">
                    
                    <Navbar />
                    
                    <div>
                    
                        <Topnavbar />
                        <h1>Active Jobs</h1>
                        
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default ActiveJobs; 