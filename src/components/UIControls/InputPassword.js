import React from "react";



const InputPassword = () => {
    return (
        <>
            <div class="input-group login-input-group mt-4">
                <label class="input-group-text" for=""><i class="input-icon ic-lock"></i></label>
                <input type="password" class="form-control rounded-0" placeholder="Password" id="" />
                <label class="input-group-text" for=""><i class="input-icon ic-eye-slash"></i></label>
            </div>
        </>
        );
    };


    
    export default InputPassword;