import React from "react";
import { Link } from "react-router-dom";


const Buttons = ({btnClick}) => {
    return (
        <>
        <Link to="/admin" class="btn login-btn btn-green btn-lg p-2">Login</Link>
        </>
        );
    };


    
export default Buttons;