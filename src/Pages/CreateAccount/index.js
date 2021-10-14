import React from "react";
//import './App.scss';
import RegisterCard from "../../Components/Register";

function CreateAccount(props) {
  return (
    <>
      <RegisterCard setIsLogged={props.setIsLogged}/>
    </>
  );
}

export default CreateAccount;