import React from 'react';
import './style.scss'
import IconBlack from '../IconBlack';
import InputGeneric from '../Input';
import Button from '../Button';

function LoginCard() {
    return (
        <div className="container">
            <div className="row row-cols-1" id="login-form">
                <IconBlack id="login-icon"/>
                <h4><b>Iniciar Sesion</b></h4>
                <InputGeneric textLabel="Correo" textInput="Correo" />
                <InputGeneric textLabel="Contraseña" textInput="Contraseña" />
                <div className="button-container">
                <Button text="Iniciar Sesion" template="btn btn-primary m-3" handler={() => { }} />
                </div>
                
            </div>
        </div>

    )
}

export default LoginCard;