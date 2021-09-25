import React from "react";
import "./style.scss";

const Button = props =>{
    const {text,style} = props
    return(
        <button type="button" className={style}>{text}</button>
    );
}

export default Button

