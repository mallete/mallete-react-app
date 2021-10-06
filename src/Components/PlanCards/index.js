import React from 'react';
import './style.scss'
import {
  Card, Button, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

function PlanCards () {
  return (
    <div className="container">
    <CardDeck>
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="plan text-center mb-3">Básico</CardTitle>
          <CardSubtitle tag="h5" className="price text-center mb-4 ">USD 0.00 / mes*</CardSubtitle>
          <CardText>
            <p><span class="material-icons">folder_open</span>20 expedientes personalizados</p>
            <p><span class="material-icons">timelapse</span>Sin tiempo de expiración</p>
            <p><span class="material-icons">timer</span>Actualización diaria en la plataforma</p>
          </CardText>
          <Button id="elegir" className="btn-elegir">Elegir</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="plan text-center mb-3">Profesional</CardTitle>
          <CardSubtitle tag="h5" className="price text-center mb-3 ">USD 40.00  / mes*</CardSubtitle>
          <CardText>
            <p><span class="material-icons">folder_open</span>20 expedientes personalizados</p>
            <p><span class="material-icons">timelapse</span>Sin tiempo de expiración</p>
            <p><span class="material-icons">timer</span>Actualización diaria en la plataforma</p>
            <p><span class="material-icons">insert_invitation</span>Tareas personalizadas a los boletines</p>
          </CardText>
          <Button id="elegir2" className="btn-elegir">Elegir</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="plan text-center mb-3">Profesional+</CardTitle>
          <CardSubtitle tag="h5" className="price text-center mb-3 ">USD 90.00 / mes*</CardSubtitle>
          <CardText>
            <p><span class="material-icons">folder_open</span>20 expedientes personalizados</p>
            <p><span class="material-icons">timelapse</span>Sin tiempo de expiración</p>
            <p><span class="material-icons">timer</span>Actualización diaria en la plataforma</p>
            <p><span class="material-icons">insert_invitation</span>Tareas personalizadas a los boletines</p>
            <p><span class="material-icons">perm_phone_msg</span>Soporte personalizado</p>
          </CardText>
          <Button id="elegir3" className="btn-elegir">Elegir</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};
    
export default PlanCards;