import React from "react";
import InputTypes from "./InputTypes";

const PasswordTextField = ({ placeholder, id })  =>  {
    return (
        <>
            <InputTypes inputType = 'password' inputClass = "form-control rounded-0" placeholder = { placeholder } inputId = { id } />
        </>
    )
        
}


export default PasswordTextField;