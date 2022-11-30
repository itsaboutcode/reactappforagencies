import React from "react";
import Navbar from "../Navbar";
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
                        <h1>Client Request</h1>
                        
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default ClientsRequest; 