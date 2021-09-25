import React from "react";
import  Card  from "../../Components/Card";
import Footer from "../../Components/Footer";
import library from "../../Assets/Images/library.png"

//import './App.scss';

function Home() {
  return (
    <>
    <div>
      <img src={library}/>
        <h3>espacio para el boton</h3>
      
    </div>
    <div>
      <h2>¿Que te ofrece Mallete?</h2>
    </div>
    <div className="d-flex">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <div className="landing-image"></div>
      <Card></Card>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Home;