import React from "react";
import "./style.scss";
import iconMallete from "../../Assets/Icons/mallete-logo.ico"

const IconoLandingPage = () =>{
    return(
        <>
        <div className="icon-container" >
        <img className="icon-img" type="icon" src={iconMallete}></img>
        </div>
        </>
    );
}

export default IconoLandingPage