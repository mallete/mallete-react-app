import React from "react";
import "./style.scss";
import iconMallete from "../../Assets/Icons/mallete-black.png"
import { NavbarBrand } from "reactstrap";

const IconBlack = () =>{
    return(
        <>
        <NavbarBrand href="/" className="icon-container" >
        <img className="icon-img" type="icon" src={iconMallete}></img>
        </NavbarBrand>
        </>
    );
}

export default IconBlack