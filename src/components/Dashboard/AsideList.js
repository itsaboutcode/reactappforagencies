import React from "react";

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
                    <ul>
                        <li><a href="javascript:;">Ratings</a></li>
                        <li><a href="javascript:;">Brands</a></li>
                        <li><a href="javascript:;">Traits</a></li>
                        <li><a href="javascript:;">Maturities</a></li>
                        <li><a href="javascript:;">Hybrids</a></li>
                        <li><a href="javascript:;">Add Rating</a></li>
                        <li><a href="javascript:;">Pending Variety Tags</a></li>
                    </ul>
                </div>
            </li>
        </>
    )
}

export default AsideList;