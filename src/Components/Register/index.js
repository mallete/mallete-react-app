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
                <InputGeneric name="nombre" inputType="text" textLabel="Nombre" placeHolderText="Nombre" handler={() => { }} />
                <InputGeneric name="apellido" inputType="text" textLabel="Apellidos" placeHolderText="Apellido" handler={() => { }} />
                <InputGeneric name="email" inputType="text" textLabel="Correo" placeHolderText="Correo" handler={() => { }}/>
                <InputGeneric name="password" inputType="password" textLabel="Contraseña" placeHolderText="Contraseña" handler={() => { }}/>
                <InputGeneric name="password" inputType="password" textLabel="Confirmar Contraseña" placeHolderText="Confirmar Contraseña" handler={() => { }} />
                <div className="button-container">
                <Button text="Registrarse" template="btn btn-primary m-3" handler={() => { }} />
                </div>
                
            </div>
        </div>

    )
}

export default RegisterCard;