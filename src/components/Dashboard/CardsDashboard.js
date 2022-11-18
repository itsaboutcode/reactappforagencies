import React from "react";
import icGreenWave from "../../Assets/Images/ic-green-wave.svg";
import icRedWave from "../../Assets/Images/ic-red-wave.svg";

const CardsDashboard = () => {
    return(
        <>
        
            <div className="row me-0 gx-md-3">
                <div className="col-md-6 col-xl-3 pb-md-3 pb-sm-3">
                    <div className="card info-card">
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row gx-md-1 justify-content-between">
                                <div className="col-sm-7 col-md-6 col-xl-7 col-xxl-6 align-self-end info-card-body">
                                    <a href="javascript:;"><i className="ic-chart-line"></i></a>
                                    <p>Pending Ratings</p>
                                    <h1>9784</h1>
                                    <span><i className="ic-chart-up"></i> 7.2% </span>
                                </div>
                                <div className="col-sm-5 col-md-6 col-xl-5 col-xxl-6 ps-0 mt-n4 d-flex justify-content-center align-self-center">
                                    <img src={icGreenWave} className="w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 pb-md-3 pb-sm-3">
                    <div className="card info-card">
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row gx-md-1 justify-content-between">
                                <div className="col-sm-7 col-md-6 col-xl-7 col-xxl-6 align-self-end info-card-body">
                                    <a href="javascript:;" className="bg-purple"><i className="ic-d-quotes"></i></a>
                                    <p>Pending Quotes</p>
                                    <h1>122</h1>
                                    <span className="red-100"><i className="ic-chart-down"></i> 5.2% </span>
                                </div>
                                <div className="col-sm-5 col-md-6 col-xl-5 col-xxl-6 ps-0 mt-n4 d-flex justify-content-center align-self-center">
                                    <img src={icRedWave} className="w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 pb-sm-3">
                    <div className="card info-card">
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row gx-md-1 justify-content-between">
                                <div className="col-sm-7 col-md-6 col-xl-7 col-xxl-6 align-self-end info-card-body">
                                    <a href="javascript:;" className="bg-orange"><i className="ic-chart-bars"></i></a>
                                    <p>Total Ratings</p>
                                    <h1>8741</h1>
                                    <span><i className="ic-chart-up"></i> 6.5% </span>
                                </div>
                                <div className="col-sm-5 col-md-6 col-xl-5 col-xxl-6 ps-0 mt-n4 d-flex justify-content-center align-self-center">
                                    <img src={icGreenWave} className="w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 ">
                    <div className="card info-card">
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row gx-md-1 justify-content-between">
                                <div className="col-sm-7 col-md-6 col-xl-7 col-xxl-6 align-self-end info-card-body">
                                    <a href="javascript:;" className="bg-black"><i className="ic-d-quotes"></i></a>
                                    <p>Total Quote <br />
                                        Requests</p>
                                    <h1>222141</h1>
                                    <span><i className="ic-chart-up"></i> 9.2% </span>
                                </div>
                                <div className="col-sm-5 col-md-6 col-xl-5 col-xxl-6 ps-0 mt-n4 d-flex justify-content-center align-self-center">
                                    <img src={icGreenWave} className="w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsDashboard;