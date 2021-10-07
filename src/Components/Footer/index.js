import React from 'react'
import './style.scss'
function Footer () {
  return (
    <footer className='principal-container container-fluid'>
      <div className='links-container d-flex justify-content-between mb-2'>
        <p className=' copyright mt-3'> © 2021 Mallete</p>
        <a className='link-footer mt-3' href='#'>Terminos y condiciones</a>
      </div>
    </footer>
  )
};

export default Footer
