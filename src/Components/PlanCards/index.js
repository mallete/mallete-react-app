import React from 'react';
import './style.scss'
import {
  Card, Button, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

function PlanCards () {
  return (
   <div className="container ">
                <CardDeck className="">

                <Card >
                    <CardBody className="">
                    <CardTitle tag="h1" className="plan text-center">Básico</CardTitle>
                    <CardSubtitle tag="h5" className="mb-2 text-center price">USD 0.00 / mes*</CardSubtitle>
                    <CardText className="features">
                    <ul>
                        <li>5 expedientes personalizados</li>
                        <li>Sin tiempo de expiración</li>
                        <li>Actualización diaria en la plataforma</li>
                    </ul>
                    </CardText>
                    <Button>Elegir</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody >
                    <CardTitle tag="h1" className="plan text-center mt-3">Profesional</CardTitle>
                    <CardSubtitle tag="h5" className="mb-2 text-center price">USD 40.00  / mes*</CardSubtitle>
                    <CardText className="features">
                    <ul>
                        <li>20 expedientes personalizados</li>
                        <li>Sin tiempo de expiración</li>
                        <li>Actualización diaria en la plataforma</li>
                        <li>Tareas personalizadas a los boletines</li>
                    </ul>
                    </CardText>
                    <Button>Elegir</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody >
                    <CardTitle tag="h1" className="plan text-center mt-3">Profesional+</CardTitle>
                    <CardSubtitle tag="h5" className="mb-2 text-center price">USD 90.00 / mes*</CardSubtitle>
                    <CardText className="features">
                    <ul>
                        <li>50 expedientes personalizados</li>
                        <li>Sin tiempo de expiración</li>
                        <li>Actualización diaria en la plataforma</li>
                        <li>Tareas personalizadas a los boletines</li>
                        <li>Soporte personalizado</li>
                    </ul>
                    </CardText>
                    <Button>Elegir</Button>
                    </CardBody>
                </Card>
                </CardDeck>
    </div>
  );
};

export default PlanCards;