import React from "react";
import InputLabel from "../UIControls/InputLabel"


const Input = (props) => {
    return (
        <>
            <div className="input-group login-input-group pt-10">
                <InputLabel />
                <input type="text" className="form-control rounded-0" placeholder="User Name" id="" />
            </div>
        </>
        );
    };


    
    export default Input;