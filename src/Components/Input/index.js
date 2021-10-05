import React from "react";
import "./style.scss";


const InputGeneric = (props) => {
    const { textLabel, placeHolderText, inputType, handler, name, inputId } = props
    return (
        <>
            <div class="form-group">
                <label for={inputId}><b>{textLabel}</b></label>
                <input name={name} type={inputType} class="form-control" id={inputId} aria-describedby="Help" placeholder={placeHolderText} onChange={handler} />
                <small id="Help" class="form-text text-muted">*Texto valido/Texto invalido</small>
            </div>
        </>
    );
}


export default InputGeneric