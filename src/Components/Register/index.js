import React, { useState } from 'react';
import './style.scss'
import IconBlack from '../IconBlack';
import InputGeneric from '../Input';
import Button from '../Button';
//import { HookFetchRequest } from '../../Lib/hooksRequest';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

function RegisterCard() {
    let history = useHistory();
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" })
    /*const createUser = HookFetchRequest({
        axiosMethod: "POST",
        pathUrl: '/users'
    })*/
    const inputHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData)
    }
    const sendData = async (event) => {
        axios.post('http://localhost:8080/users', formData)
            .then(function (response) {
                // handle success
                console.log(response);
                toast("Bienvenido a Mallete!",
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }
                )
                history.push("/");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    return (
        <div className="container">
            <div className="row row-cols-1" id="register-form">
                <IconBlack id="register-icon" />
                <h4><b>Registro</b></h4>
                <InputGeneric name="firstName" inputId="input-name" inputType="text" textLabel="Nombre" placeHolderText="Nombre" handler={inputHandler} />
                <InputGeneric name="lastName" inputId="input-lastName" inputType="text" textLabel="Apellidos" placeHolderText="Apellido" handler={inputHandler} />
                <InputGeneric name="email" inputId="input-email" inputType="text" textLabel="Correo" placeHolderText="Correo" handler={inputHandler} />
                <InputGeneric name="password" inputId="input-password" inputType="password" textLabel="Contraseña" placeHolderText="Contraseña" handler={inputHandler} />
                <InputGeneric name="confirmPassword" inputId="input-confirmPassword" inputType="password" textLabel="Confirmar Contraseña" placeHolderText="Confirmar Contraseña" handler={() => { }} />
                <div className="button-container">
                    <Button text="Registrarse" template="btn btn-primary m-3" handler={sendData} />
                </div>

            </div>
        </div>

    )
}

export default RegisterCard;