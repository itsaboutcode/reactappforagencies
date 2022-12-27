import React from "react";


const InputTypes = ({inputType, inputClass, inputId}) => {
    return (
        <>
            <input type={inputType} className={inputClass} id={inputId} />
        </>
        );
    };


    
export default InputTypes;