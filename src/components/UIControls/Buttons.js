import React from "react";
import { Link } from "react-router-dom";


const Buttons = ({title, linkTo}) => {
    return (
        <>
        <Link to={linkTo} class="btn login-btn btn-green btn-lg p-2">{title}</Link>
        </>
        );
    };


    
export default Buttons;