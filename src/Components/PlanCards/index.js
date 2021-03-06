import React, { useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import './style.scss'
import moment from 'moment'
import axios from 'axios'
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap'
import Button from '../../Components/Button'
import { useHistory, Link } from "react-router-dom"
import { Flip, toast } from 'react-toastify'


const { REACT_APP_API_ENDPOINT } = process.env


function PlanCards() {
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const authenticationToken = localStorage.getItem('authenticationToken')
  const userId = localStorage.getItem('userId')
  const updateUseUrl = `${REACT_APP_API_ENDPOINT}/users/${userId}`
  const history = useHistory()
    const inputHandlerDashboard = (event) =>{
      history.push('/dashboard')
    }
  return (
    <div className='container mt-5'>
      <div className="row align-items-stretch">
        <div className="col-md-12 col-lg-4">
          <Card className='card-plan mb-3'>
            <CardBody>
              <CardTitle tag='h1' className='plan text-center mb-3'>
                Básico
              </CardTitle>
              <CardSubtitle tag='h5' className='price text-center mb-4 '>
                MXN 0.00 / mes*
              </CardSubtitle>
              <CardText>
                <ul className="feature-list">
                  <li className='features'>
                    <span class='material-icons'>folder_open</span>5 expedientes
                    personalizados
                  </li>
                  <li className='features'>
                    <span class='material-icons'>timelapse</span>Sin tiempo de
                    expiración
                  </li>
                  <li className='features'>
                    <span class='material-icons'>timer</span>Actualización diaria en
                    la plataforma
                  </li>
                </ul>
                <div className=" first-card-icon"></div>
              </CardText>
              {
                authenticationToken 
                ? 
                <Button text="Probar" template="btn-elegir" handler={inputHandlerDashboard} />
                : <Link to="/registro" className="button-link">Regístrate</Link>
              }
              
            </CardBody>
          </Card>
        </div>
        <div className="col-md-12 col-lg-4">
          <Card className='card-plan mb-3'>
            <CardBody>
              <CardTitle tag='h1' className='plan text-center mb-3'>
                Profesional
              </CardTitle>
              <CardSubtitle tag='h5' className='price text-center mb-3 '>
                MXN 300.00 / mes*
              </CardSubtitle>
              <CardText>
                  <ul className="feature-list">
                    <li className='features'>
                      <span class='material-icons'>folder_open</span>20 expedientes
                      personalizados
                    </li>
                    <li className='features'>
                      <span class='material-icons'>timelapse</span>Sin tiempo de
                      expiración
                    </li>
                    <li className='features'>
                      <span class='material-icons'>timer</span>Actualización diaria en
                      la plataforma
                    </li>
                    <li className='features'>
                    <span class="material-icons">event_note</span>Tareas
                      personalizadas a los boletines
                      </li>
                  </ul>
                  <div className="second-card-icon"></div>
              </CardText>
              {
                authenticationToken
                ?
                <PayPalButton
                onButtonReady={() => {
                  setPaypalLoaded(true);
                }}
                amount='300.00'
                currency='MXN'
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={async (details, data) => {
                  toast.success('Pago realizado con éxito',
                    {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                        draggable: true,
                      progress: undefined,
                      transition: Flip
                    })
                 
                  console.log(
                    'Transaction completed by ' + details.payer.name.given_name
                  )
                  // OPTIONAL: Call your server to save the transaction
                  await axios({
                    url: updateUseUrl,
                    method: "patch",
                    headers: {
                      authorization: authenticationToken,
                    },
                    data: {
                      plan: "professional",
                      vigencyDate: moment().add(1, 'M'),
                      paymentDay: moment(),
                      $push: {
                        paymentHistory: [data]
                      }
                    }
                  }) 
                  history.replace('/dashboard')
                  
                }}
                options={{
                  currency: 'MXN',
                  clientId: 'AfFjpdV6k4-_J-7qt6WZvDWY1XkjWHVdVxivFrrW-ywA-jQ8RGph0MLby6noK69YWFDtBOF-VdOkE_v9'
                }}
                style={{
                  color: 'silver'
                }}
                />
                :<Link to="/registro" className="button-link">Regístrate</Link>
              }
              
            </CardBody>
          </Card>
        </div>
        <div className="col-md-12  col-lg-4">
          <Card className='card-plan mb-3'>
            <CardBody>
              <CardTitle tag='h1' className='plan text-center mb-3'>
                Profesional+
              </CardTitle>
              <CardSubtitle tag='h5' className='price text-center mb-3 '>
                MXN 600.00 / mes*
              </CardSubtitle>
              <CardText>
                <ul className="feature-list">
                      <li className='features'>
                        <span class='material-icons'>folder_open</span>5 expedientes
                        personalizados
                      </li>
                      <li className='features'>
                        <span class='material-icons'>timelapse</span>Sin tiempo de
                        expiración
                      </li>
                      <li className='features'>
                        <span class='material-icons'>timer</span>Actualización diaria en
                        la plataforma
                      </li>
                      <li className='features'>
                        <span class='material-icons'>event_note</span>Tareas
                        personalizadas a los boletines
                      </li>
                      <li className='features'>
                        <span class='material-icons'>perm_phone_msg</span>Soporte
                        personalizado
                      </li>
                  </ul>  
              </CardText>
              {
                authenticationToken ?
                ( paypalLoaded
                  ? (
                    <PayPalButton
                      amount='600.00'
                      currency='MXN'
                      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                      onSuccess={(details, data) => {
                        toast.success('Pago realizado con éxito',
                      {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                          draggable: true,
                        progress: undefined,
                        transition: Flip
                      })
                    history.push('/dashboard')
                        console.log(
                          'Transaction completed by ' + details.payer.name.given_name
                        )
                        // OPTIONAL: Call your server to save the transaction
                        return axios({
                          url: updateUseUrl,
                          method: "patch",
                          headers: {
                            authorization: authenticationToken,
                          },
                          data: {
                            plan: "professionalplus",
                            vigencyDate: moment().add(1, 'M'),
                            paymentDay: moment(),
                            $push: {
                              paymentHistory: [{ data, details }]
                            }
                          }
                        })
                      }}
                      options={{
                        currency: 'MXN',
                        clientId: 'AfFjpdV6k4-_J-7qt6WZvDWY1XkjWHVdVxivFrrW-ywA-jQ8RGph0MLby6noK69YWFDtBOF-VdOkE_v9'
                      }}
                      style={{
                        color: 'silver'
                      }}
                    />
                  )
                  : null
                  )
                :<Link to="/registro" className="button-link">Regístrate</Link>

              }
              
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default PlanCards