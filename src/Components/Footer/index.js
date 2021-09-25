import React from 'react';
import './style.scss'
import mallete from "../../Assets/Icons/mallete.png"
function Footer () {
    return (
        <footer className="principal-container container-fluid">
		    <div className="d-flex row ">
                <div className="d-flex justify-content-center ">
                    <img className="logo mt-3 mb-3" src={mallete}></img>
                </div>
                <hr className=""/> 
			    <div className="links-container d-flex justify-content-around mb-3">
                    <p className="mt-3"> © 2021 Mallete</p>
                    <a className="link mt-3" href="#">Terminos y condiciones</a>
                </div>
		    </div>
	    </footer>
    );
};

export default Footer;