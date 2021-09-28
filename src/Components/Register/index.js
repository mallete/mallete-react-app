import React from 'react';
import './style.scss'
import IconBlack from '../IconBlack';
import InputGeneric from '../Input';
import Button from '../Button';

function RegisterCard() {
    return (
        <div className="container">
            <div className="row row-cols-1" id="register-form">
                <IconBlack id="register-icon"/>
                <h4><b>Registro</b></h4>
                <InputGeneric textLabel="Nombre" textInput="Nombre" />
                <InputGeneric textLabel="Apellidos" textInput="Apellido" />
                <InputGeneric textLabel="Correo" textInput="Correo" />
                <InputGeneric textLabel="Contraseña" textInput="Contraseña" />
                <InputGeneric textLabel="Confirmar Contraseña" textInput="Confirmar Contraseña" />
                <div className="button-container">
                <Button text="Registrarse" template="btn btn-primary m-3" handler={() => { }} />
                </div>
                
            </div>
        </div>

    )
}

export default RegisterCard;