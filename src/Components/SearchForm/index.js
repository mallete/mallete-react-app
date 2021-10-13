import React from 'react'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Button from '../Button';
import './style.scss'


const SearchForm = (props) => {
    //const { handler } = props
    return (
        <div className="container d-block" id="search-form">
            <div className="d-block mb-3 pt-3" ><b>Introduce cualquiera de los siguientes campos para filtrar los boletines que concuerden con la informacion</b></div>
            <div >
                <Form >
                    <Row form>
                        <Col md={4}>
                            <FormGroup className="">
                                <Label for="exampleEmail" className="mr-sm-2"><b>Numero de Expediente</b></Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="Introduce expediente" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="">
                                <Label for="examplePassword" className="mr-sm-2"><b>Nombre del Actor</b></Label>
                                <Input type="text" name="password" id="examplePassword" placeholder="Introduce un Nombre" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="">
                                <Label for="examplePassword" className="mr-sm-2"><b>Nombre del Demandado</b></Label>
                                <Input type="text" name="password" id="examplePassword" placeholder="introduce un nombre" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className='d-flex flex-row-reverse'>
                <Button text='Buscar' template='btn btn-primary m-3' />
            </div>
        </div>
    )
}

export default SearchForm