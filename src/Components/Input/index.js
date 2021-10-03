import React from "react";
import "./style.scss";


const InputGeneric = (props) => {
    const { textLabel, placeHolderText, inputType, handler } = props
    return (
        <>
            <div class="form-group">
                <label for="InputGeneric"><b>{textLabel}</b></label>
                <input type={inputType} class="form-control" id="InputGeneric" aria-describedby="Help" placeholder={placeHolderText} onChange={handler} />
                <small id="Help" class="form-text text-muted">*Texto valido/Texto invalido</small>
            </div>
        </>
    );
}


export default InputGeneric