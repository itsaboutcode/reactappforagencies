import React from "react";
import Navbar from "../Navbar";
import JobRequest from "../Shared/JobRequest";
import Topnavbar from "../TopNavbar";


const ClientsRequest = () => {
    return(
        <>
        <div className="topBarShadowRight"></div>
            <div className="container">
                <div className="main-body">
                    
                    <Navbar />
                    
                    <div>
                    
                        <Topnavbar />
                        
                        <JobRequest />
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default ClientsRequest; 