import React from "react";
import InputTypes from "./InputTypes";
import IconLabel from "./IconLabel";
// import ShowPasswordLabel from "./ShowPasswordLabel";

import { useState } from "react";

const PasswordTextField = ({ placeholder, id , })  =>  {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
      };

    return (
        <>
            <InputTypes inputType = {passwordShown ? "text" : "password"} inputClass = "form-control rounded-0" placeholder = { placeholder } inputId = { id } />
            <button className="btn btn-empty p-0 border-0" onClick={togglePassword}>
            <IconLabel labelClass="input-group-text p-2" iconClass = { passwordShown ? "input-icon ic-eye-slash" : "input-icon  ic-eye-unslash" } />
                {/* <ShowPasswordLabel /> */} 
            </button>
        </>
    )
        
}


export default PasswordTextField;