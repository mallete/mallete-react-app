import React from "react";
import "./style.scss";

const Link = props =>{
    const {text} = props
    return(
        <a type="link" href="" className="navbar-link">{text}</a>
    );
}

export default Link
