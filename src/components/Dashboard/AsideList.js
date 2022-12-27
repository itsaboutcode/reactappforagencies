import React from "react";
import SubNav from "./SubNav";
import { Link, useNavigate } from "react-router-dom";

const AsideList = ({mainListId, dataBsTarget, imgSrc, subListId, ariaControls, title, imgSrcArrow, ariaLabelledby, subMenu, navigateTo}) => {
    
    const dashboardPageNav = useNavigate();
    const dashboardPage = () => {
        dashboardPageNav(navigateTo);
    }
    return(
        <>
            <li id={mainListId}>
                {/* <Link className="collapsed" to={linkTo} data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="false" aria-controls={ariaControls}>
                    <img src={imgSrc} alt="" /> 
                    {title}
                    <img src={imgSrcArrow} className="ms-auto" alt="" />
                </Link> */}
                <Link className="collapsed" onClick={dashboardPage} data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="false" aria-controls={ariaControls}>
                    <img src={imgSrc} alt="" /> 
                    {title}
                    <img src={imgSrcArrow} className="ms-auto" alt="" />
                </Link>
                {/* <div id={subListId} className="accordion-collapse collapse p-0" aria-labelledby={ariaLabelledby} data-bs-parent="#accordionFlushExample">
                    <SubNav 
                        subMenu={subMenu}
                     />
                </div> */}
            </li>
        </>
    )
}

export default AsideList;