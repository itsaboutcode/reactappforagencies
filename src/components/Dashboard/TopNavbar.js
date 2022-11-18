import React from "react";
import icUser from "../../Assets/Images/ic-user.svg";
import icDownArrow from "../../Assets/Images/ic-down-arrow.svg";

const Topnavbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-white justify-content-between topBar">
            <div className="dropdown-center main-user-deopdown ms-auto">
                <button className="btn btn-user dropdown-toggle" type="button" id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={icUser} alt="" /> 
                    Jacob Jones
                    <img src={icDownArrow} className="ms-auto" alt="" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownCenterBtn">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Action two</a></li>
                    <li><a className="dropdown-item" href="#">Action three</a></li>
                </ul>
            </div>

        </nav>
        </>
    )
}

export default Topnavbar;