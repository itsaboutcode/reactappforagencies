import React from "react";
import graph from "../../Assets/Images/graph.svg";
import graph01 from "../../Assets/Images/graph01.svg";


const GraphDashboard = () => {
    return(
        <>
        
            <div className="row me-0 gx-md-3 chart-box">
                <div className="col-md-6 pb-sm-3">
                    <div className="card info-card">
                        <div className="card-header graph-header">
                            <h1>Monthly Users</h1>
                            <div>
                                <p><span className="bg-green"></span> Registered</p>
                                <p><span></span> Just Vistors</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={graph} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card info-card">
                        <div className="card-header graph-header">
                            <h1>Accepted Quotes</h1>
                            <div>
                                <p><span className="bg-green"></span> Registered</p>
                                <p><span></span> Just Vistors</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={graph01} alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GraphDashboard;