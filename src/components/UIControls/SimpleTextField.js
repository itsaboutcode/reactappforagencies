import React from "react";
import InputTypes from "./InputTypes";

const SimpleTextField = ({ placeholder, id, type, className }) =>  {
    return (
        <>
            <InputTypes inputType={type} inputClass={className} placeholder={placeholder} inputId={id} />
        </>
    )
}

export default SimpleTextField;