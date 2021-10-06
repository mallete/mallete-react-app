import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import './style.scss'
import {
  Card, Button, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap'

function PlanCards () {
  return (
    <div className='container'>
      <CardDeck>
        <Card>
          <CardBody>
            <CardTitle tag='h1' className='plan text-center mb-3'>
              Básico
            </CardTitle>
            <CardSubtitle tag='h5' className='price text-center mb-4 '>
              MXN 0.00 / mes*
            </CardSubtitle>
            <CardText>
              <p>
                <span class='material-icons'>folder_open</span>5 expedientes
                personalizados
              </p>
              <p>
                <span class='material-icons'>timelapse</span>Sin tiempo de
                expiración
              </p>
              <p>
                <span class='material-icons'>timer</span>Actualización diaria en
                la plataforma
              </p>
            </CardText>
            <Button id='elegir' className='btn-elegir'>Elegir</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag='h1' className='plan text-center mb-3'>
              Profesional
            </CardTitle>
            <CardSubtitle tag='h5' className='price text-center mb-3 '>
              MXN 300.00 / mes*
            </CardSubtitle>
            <CardText>
              <p>
                <span class='material-icons'>folder_open</span>20 expedientes
                personalizados
              </p>
              <p>
                <span class='material-icons'>timelapse</span>Sin tiempo de
                expiración
              </p>
              <p>
                <span class='material-icons'>timer</span>Actualización diaria en
                la plataforma
              </p>
              <p id='last-icon'>
                <span class='material-icons'>insert_invitation</span>Tareas
                personalizadas a los boletines
              </p>
            </CardText>
            <PayPalButton
              amount='300.00'
              currency='MXN'
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                console.log(
                  'Transaction completed by ' + details.payer.name.given_name
                )
                // OPTIONAL: Call your server to save the transaction
                { /*  return fetch('', {
                  method: 'post',
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                }) */ }
              }}
              options={{
                currency: 'MXN',
                clientId: 'AfFjpdV6k4-_J-7qt6WZvDWY1XkjWHVdVxivFrrW-ywA-jQ8RGph0MLby6noK69YWFDtBOF-VdOkE_v9'
              }}
              style={{
                color: 'silver'
              }}
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag='h1' className='plan text-center mb-3'>
              Profesional+
            </CardTitle>
            <CardSubtitle tag='h5' className='price text-center mb-3 '>
              MXN 600.00 / mes*
            </CardSubtitle>
            <CardText>
              <p>
                <span class='material-icons'>folder_open</span>50 expedientes
                personalizados
              </p>
              <p>
                <span class='material-icons'>timelapse</span>Sin tiempo de
                expiración
              </p>
              <p>
                <span class='material-icons'>timer</span>Actualización diaria en
                la plataforma
              </p>
              <p>
                <span class='material-icons'>insert_invitation</span>Tareas
                personalizadas a los boletines
              </p>
              <p>
                <span class='material-icons'>perm_phone_msg</span>Soporte
                personalizado
              </p>
            </CardText>
            <PayPalButton
              amount='600.00'
              currency='MXN'
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                console.log(
                  'Transaction completed by ' + details.payer.name.given_name
                )
                // OPTIONAL: Call your server to save the transaction
                { /*  return fetch('', {
                  method: 'post',
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                }) */ }
              }}
              options={{
                currency: 'MXN',
                clientId: 'AfFjpdV6k4-_J-7qt6WZvDWY1XkjWHVdVxivFrrW-ywA-jQ8RGph0MLby6noK69YWFDtBOF-VdOkE_v9'
              }}
              style={{
                color: 'silver'
              }}
            />
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  )
};

export default PlanCards
