import React from "react";


const Input = (props) => {
    return (
        <>
            <div className="input-group login-input-group pt-10">
                <label className="input-group-text" for=""><i className="input-icon ic-user"></i></label>
                <input type="text" className="form-control rounded-0" placeholder="User Name" id="" />
            </div>
        </>
        );
    };


    
    export default Input;