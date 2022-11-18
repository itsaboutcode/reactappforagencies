import React from "react";
import icMenu from "../../Assets/Images/ic-menu.svg";
import Aside from "./Aside";





const Navbar = () => {
    return(
        <>
        <span className="left-shadow-hide"></span>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <button type="button" className="btn-close btn-nav-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <h2 className="logo-text">
                <a className="btn-menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <img src={icMenu} alt="" />
                </a>
                Fortex Solution
            </h2>

            <Aside />

            </div>
        </>
    )
}

export default Navbar;