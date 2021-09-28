import React from "react";
import "./style.scss";


const InputGeneric = (props) => {
    const { textLabel, textInput } = props
    return (
        <>
            <div class="form-group">
                <label for="InputGeneric"><b>{textLabel}</b></label>
                <input type="input" class="form-control" id="InputGeneric" aria-describedby="Help" placeholder={textInput} />
                <small id="Help" class="form-text text-muted">*Texto valido/Texto invalido</small>
            </div>
        </>
    );
}


export default InputGeneric