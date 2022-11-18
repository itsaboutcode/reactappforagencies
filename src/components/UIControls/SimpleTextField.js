import React from "react";
import InputTypes from "./InputTypes";

const SimpleTextField = ({ placeholder, id }) =>  {
    return (
        <>
            <InputTypes inputType='text' inputClass="form-control rounded-0" placeholder={placeholder} inputId={id} />
        </>
    )
}

export default SimpleTextField;