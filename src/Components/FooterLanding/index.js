import React from "react";
import Mallete from '../../Assets/Images/mallete.png'

const FooterLanding = () =>{
    return(
        <footer className='footer-container'>
          <div className=' logo-container d-flex justify-content-center'>
            <img className='logo mt-3 mb-1' src={Mallete} />
          </div>
          <hr />
          <div className='links-container d-flex justify-content-around'>
            <p className='mt-3'> © 2021 Mallete</p>
            <a className='link mt-3 link-footer' href='#'>Terminos y condiciones</a>
          </div>
        </footer>
    )
}

export default FooterLanding