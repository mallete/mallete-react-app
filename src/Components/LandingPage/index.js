import React from 'react'
import FooterLanding from '../FooterLanding'
import '../LandingPage/css/style.scss'
import NavigationBar from '../NavigationBar'
//import Mallete from './Img/mallete.png'
import Signature from './Img/signature.png'

const LandingPage = () => {
  return (
    <>
      <div className='landing-template'>
        {/* Navbar */}
        <NavigationBar/>
        {/* Main Image */}
        <section className='image-container'>
          <div className='d-flex flex-column align-items-center'>
            <h1 className='title'>Bienvenido a Mallete</h1>
            <button id='btn-img' type='button' className='btn btn-outline-light mt-3'>Saber más</button>
          </div>
        </section>
        {/* Main Image */}
        <div className='container flex-column mt-5'>
          <div className='row ml-4'>
            <div className='col'>
              <div className='card card-landing'>
                <h2 className='card-title'>¿Qué te ofrece Mallete?</h2>
              </div>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-lg-2'>
            <div className='col mt-3 mb-4 p-5'>
              <div className='card card-landing'>
                <div className='card-body'>
                  <h5 className='card-title color-title'>Consulta de boletines</h5>
                  <p className='card-text'>Mallete unifica los diferentes medios de información donde se publican los boletines por parte de los juzgados en diferentes entidades federativas
                    y concentrando todo en una misma aplicación. Agilizando la búsqueda de boletines y optimizando así el tiempo invertido en búsqueda y consulta de información, haciendo más fluido y rápido este proceso.
                  </p>
                </div>
              </div>
            </div>
            <div className='col mt-3 mb-4 p-5'>
              <div className='card card-landing'>
                <div className='card-body'>
                  <h5 className='card-title color-title'>Crea tareas</h5>
                  <p className='card-text'>Ademas de la consulta, Mallete también le permite asignar tareas a los boletines y de esta manera poder coordinar con su equipo de trabajo sobre qué? y quién? estará a cargo de ejecutar la acción adecuada.</p>
                </div>
              </div>
            </div>
            <div className='col mb-4 p-5'>
              <div className='card card-landing'>
                <div className='card-body'>
                  <h5 className='card-title color-title'>Activa notificaciones</h5>
                  <p className='card-text'>Siempre estarás al día, al activar las notificaciones sabras cuando tu caso presente un movimiento, lo que te permitirá a tí o a tu equipo organizarse y actuar de forma más rápida.</p>
                </div>
              </div>
            </div>
            <div className='col mb-4 p-5'>
              <div className='card card-landing'>
                <div className='card-body'>
                  <h5 className='card-title color-title'>Administra tus casos</h5>
                  <p className='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, porro reiciendis qui ipsum nisi numquam cumque doloribus architecto quasi sequi dolore iste eaque, quidem ratione a atque obcaecati, delectus debitis?</p>
                </div>
              </div>
            </div>
            <div className='col mb-4 p-5'>
              <div className='card card-landing'>
                <img src={Signature} className='card-img-top w-100' alt='...' />
              </div>
            </div>
            <div className='col mb-4 p-5 mt-3'>
              <div className='card card-landing'>
                <div className='card-body'>
                  <h5 className='card-title color-title'>Ventajas de utilizar Mallete</h5>
                  <p className='card-text'>Mallete tiene la finalidad de ayudar a todos los abogados agilizando la búsqueda y consulta de boletines, optimizando así el tiempo invertido en esta tarea.
                    Buscamos mantener el servicio lo más simple posible y a la vez reunir lo mejor de diferentes aplicaciones en una sola.
                  </p>
                  <h3 className='epic-phrase'><b>One app to rule them all !!!</b></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <FooterLanding />
      </div>
    </>
  )
}

export default LandingPage
