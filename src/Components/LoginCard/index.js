import React, { useState, useEffect } from 'react';
import './style.scss'
import IconBlack from '../IconBlack';
import InputGeneric from '../Input';
import Button from '../Button';
import { HookFetchRequest } from '../../Lib/hooksRequest'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

function LoginCard() {
    //miguelm@email.com
    //miguel
    let history = useHistory();
    const [formData, setFormData] = useState({email: "", password:""});
    const loggedUser = HookFetchRequest({
        axiosMethod: "POST",
        pathUrl: '/auth/login',
    })
    const inputHandler = (event)=>{
        console.log(formData)
        setFormData( {...formData, [event.target.name]: event.target.value})
    }
    const sendData = (event)=>{
        console.log("loggedUser")
        console.log({formData})
        loggedUser.mutate(formData)      
    }
    useEffect(() => {
        if(loggedUser.isSuccess && loggedUser.data){
            const {token} = loggedUser.data
            localStorage.setItem("authenticationToken",token)
            toast("Bienvenido a Mallete!", 
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined, })
            history.push("/");
            console.log(loggedUser.data)
        }
        console.log(loggedUser)
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
                
                
                <InputGeneric name="email" inputId="input-email" inputType="text" textLabel="Correo" placeHolderText="Correo" handler={inputHandler}/>
                <InputGeneric name="password" inputId="input-password" inputType="password" textLabel="Contraseña" placeHolderText="Contraseña" handler={inputHandler}/>
                
                
                <div className="button-container">
                    <Button text="Iniciar Sesion" template="btn btn-primary m-3" handler={sendData} />
                </div>
                
            </div>
        </div>

    )
}

export default LoginCard;