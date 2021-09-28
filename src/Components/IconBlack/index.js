import React from "react";
import "./style.scss";
import iconMallete from "../../Assets/Icons/mallete-black.png"

const IconBlack = () =>{
    return(
        <>
        <div className="icon-container" >
        <img className="icon-img" type="icon" src={iconMallete}></img>
        </div>
        </>
    );
}

export default IconBlack