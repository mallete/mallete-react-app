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
            <p><span class="material-icons md-light">folder</span>5 expedientes personalizados</p>
            <p><span class="material-icons md-light">timelapse</span>Sin tiempo de expiración</p>
            <p><span class="material-icons md-light">timer</span>Actualización diaria en la plataforma</p>
          </CardText>
          <Button className="btn-elegir">Elegir</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="plan text-center mb-3">Profesional</CardTitle>
          <CardSubtitle tag="h5" className="price text-center mb-2 ">USD 40.00  / mes*</CardSubtitle>
          <CardText>
            <p><span class="material-icons md-light">folder</span>20 expedientes personalizados</p>
            <p><span class="material-icons md-light">timelapse</span>Sin tiempo de expiración</p>
            <p><span class="material-icons md-light">timer</span>Actualización diaria en la plataforma</p>
            <p><span class="material-icons md-light">event</span>Tareas personalizadas a los boletines</p>
          </CardText>
          <Button className="btn-elegir">Elegir</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h1" className="plan text-center mb-3">Profesional+</CardTitle>
          <CardSubtitle tag="h5" className="price text-center mb-2 ">USD 90.00 / mes*</CardSubtitle>
          <CardText>
            <p><span class="material-icons md-light">folder</span>20 expedientes personalizados</p>
            <p><span class="material-icons md-light">timelapse</span>Sin tiempo de expiración</p>
            <p><span class="material-icons md-light">timer</span>Actualización diaria en la plataforma</p>
            <p><span class="material-icons md-light">event</span>Tareas personalizadas a los boletines</p>
            <p><span class="material-icons md-light">perm_phone_msg</span>Soporte personalizado</p>
          </CardText>
          <Button className="btn-elegir">Elegir</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};
    
export default PlanCards;