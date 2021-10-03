import React, { useState, useEffect } from 'react';
import './style.scss'
import IconBlack from '../IconBlack';
import InputGeneric from '../Input';
import Button from '../Button';
import { HookFetchRequest } from '../../Lib/hooksRequest'

function LoginCard() {
    //miguelm@email.com
    //miguel
    const [formData, setFormData] = useState({email: "", password:""});
    const loggedUser = HookFetchRequest({
        axiosMethod: "POST",
        pathUrl: '/auth/login',
    })
    const inputHandler = (event)=>{
        setFormData( {...formData, [event.target.name]: event.target.value})
    }
    const sendData = (event)=>{
        console.log("loggedUser")
        loggedUser.mutate(formData)
    }
    useEffect(() => {
        if(loggedUser.isSuccess &&loggedUser.data){
            console.log(loggedUser.data)
        }
    }, [loggedUser.isSuccess,loggedUser.data])
    
    return (
        <div className="container">
            <div className="row row-cols-1" id="login-form">
                <IconBlack id="login-icon"/>
                <h4><b>Iniciar Sesion</b></h4>
                {/*
                <input name="email" type="text" textLabel="Correo" textInput="Correo" onChange={inputHandler}/>
                <input name="password"  type="password" textLabel="Contraseña" textInput="Contraseña"  onChange={inputHandler} />
                */}
                <InputGeneric name="email" inputType="text" textLabel="Correo" placeHolderText="Correo" handler={inputHandler}/>
                <InputGeneric name="password" inputType="password" textLabel="Contraseña" placeHolderText="Contraseña" handler={inputHandler}/>
                <div className="button-container">
                    <Button text="Iniciar Sesion" template="btn btn-primary m-3" handler={sendData} />
                </div>
                
            </div>
        </div>

    )
}

export default LoginCard;