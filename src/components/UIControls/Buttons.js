import React from "react";


const Buttons = ({btnClick}) => {
    return (
        <>
        <button type="button" onClick={btnClick}  class="btn login-btn btn-green btn-lg p-2">Login</button>
        </>
        );
    };


    
    export default Buttons;