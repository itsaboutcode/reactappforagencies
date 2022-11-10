import React from "react";

const IconLabel = ({ labelClass, iconClass }) =>  {
    return (
        <>
            <label className={labelClass} for=""><i className={iconClass}></i></label>
        </>
    )
}

export default IconLabel;