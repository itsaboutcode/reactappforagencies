import React from "react";
import Navbar from "../Navbar";
import ActiveJobsList from "../Shared/ActiveJobsList";
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
                        <ActiveJobsList />
                        
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default ActiveJobs; 