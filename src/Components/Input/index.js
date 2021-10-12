import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import "./style.scss";


const InputGeneric = (props) => {
    const { textLabel, placeHolderText, inputType, handler, name, inputId, invalidValor } = props
    return (
        <>
            {/*
            <div class="form-group">
                <label for={inputId}><b>{textLabel}</b></label>
                <input name={name} type={inputType} class="form-control" id={inputId} aria-describedby="Help" placeholder={placeHolderText} onChange={handler} />
                <small id="Help" class="form-text text-muted invalid">*Texto valido/Texto invalido</small>
            </div>
            <FormText>*Texto valido/Texto invalido</FormText>
        */}
            <FormGroup>
                <Label for={inputId}><b>{textLabel}</b></Label>
                <Input invalid={invalidValor} name={name} type={inputType} class="form-control" id={inputId} placeholder={placeHolderText} onChange={handler} />
                <FormFeedback invalid={invalidValor} >*Introduce un texto valido</FormFeedback>
            </FormGroup>
        </>
    );
}


export default InputGeneric