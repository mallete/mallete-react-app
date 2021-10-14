import React from 'react';
import LoginCard from '../../Components/LoginCard';
import './style.scss';
// import './App.scss';

function Login (props) {
  const { setIsLogged } = props
  return (
    <>
      <div className='logincard-container'>
        <LoginCard setIsLogged={setIsLogged} />
      </div>

    </>
  )
}

export default Login
