import React from "react";
import SubNav from "./SubNav";

const AsideList = ({mainListId, dataBsTarget, imgSrc, subListId, ariaControls, title, imgSrcArrow, ariaLabelledby}) => {
    return(
        <>
            <li id={mainListId}>
                <a className="collapsed" href="javascript:;" type="button" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="false" aria-controls={ariaControls}>
                    <img src={imgSrc} alt="" /> 
                    {title}
                    <img src={imgSrcArrow} className="ms-auto" alt="" />
                </a>
                <div id={subListId} className="accordion-collapse collapse p-0" aria-labelledby={ariaLabelledby} data-bs-parent="#accordionFlushExample">
                    <SubNav />
                </div>
            </li>
        </>
    )
}

export default AsideList;