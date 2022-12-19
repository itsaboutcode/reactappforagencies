import React from "react";
import Navbar from "../Navbar";
import FinishedJobsList from "../Shared/FinishedJobsList";
import Topnavbar from "../TopNavbar";


const FinishedJobs = () => {
    return(
        <>
        <div className="topBarShadowRight"></div>
            <div className="container">
                <div className="main-body">
                    
                    <Navbar />
                    
                    <div>
                    
                        <Topnavbar />
                        <FinishedJobsList />

                        
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default FinishedJobs; 