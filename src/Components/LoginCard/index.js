import React, { useState, useEffect } from 'react'
import './style.scss'
import IconBlack from '../IconBlack'
import InputGeneric from '../Input'
import Button from '../Button'
import { HookFetchRequest } from '../../Lib/hooksRequest'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

function LoginCard (props) {
  // miguelm@email.com
  // miguel
  const { setIsLogged } = props
  const history = useHistory()
  const [formData, setFormData] = useState({ email: undefined, password: undefined })
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const loggedUser = HookFetchRequest({
    axiosMethod: 'POST',
    pathUrl: '/auth/login'
  })
  const inputHandler = (event) => {
    console.log(formData)
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const sendData = (event) => {
    console.log('loggedUser')
    console.log({ formData })
    loggedUser.mutate(formData)
  }
  useEffect(() => {
    if (loggedUser.isSuccess && loggedUser.data) {
      const { token } = loggedUser.data
      const { userId } = loggedUser.data
      localStorage.setItem('authenticationToken', token)
      localStorage.setItem('userId', userId)
      toast('Bienvenido a Mallete!',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      setIsLogged(true)
      //history.push('/dashboard')
      history.replace('/dashboard')
      //window.location.reload();
      console.log(loggedUser.data)
    }
    console.log(loggedUser)
  }, [loggedUser.isSuccess, loggedUser.data])

  useEffect(() => {
    setIsEmailValid((formData.email === ''))
  }, [formData])

  useEffect(() => {
    setIsPasswordValid((formData.password === ''))
  }, [formData])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendData(event)
    }
  }
  return (
    <div className='container responsive-body d-flex justify-content-center'>
      <div className='row row-cols-1' id='login-form'>
        <IconBlack id='login-icon' />
        <h4><b>Iniciar Sesion</b></h4>
        <InputGeneric invalidValor={isEmailValid} name='email' inputId='input-email' inputType='text' textLabel='Correo' placeHolderText='Correo' handler={inputHandler} handleKeyDown={handleKeyDown}/>
        <InputGeneric invalidValor={isPasswordValid} name='password' inputId='input-password' inputType='password' textLabel='Contrase??a' placeHolderText='Contrase??a' handler={inputHandler} handleKeyDown={handleKeyDown}/>

        <div className='button-container'>
          <Button text='Iniciar Sesion' template='btn btn-primary m-3' handler={sendData} />
        </div>
        <b className='text-center'>Si a??n no tienes una cuenta registrate <a href='/registro'>aqu??</a></b>
      </div>
    </div>

  )
}

export default LoginCard
