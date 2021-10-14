import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Button from '../Button';
import axios from 'axios';
import './style.scss'


const SearchForm = () => {
    //const { handler } = props
    const [searchData, setSearchData] = useState()
    const inputHandler = (event) => {
        setSearchData({ ...searchData, [event.target.name]: event.target.value })
        console.log(searchData)
    }
    const sendData = async (event) => {
        axios.get('http://localhost:8080/active-trials')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className="container d-block" id="search-form">
            <div className="d-block mb-3 pt-3" ><b>Introduce cualquiera de los siguientes campos para filtrar los boletines que concuerden con la informacion</b></div>
            <div >
                <Form >
                    <Row form>
                        <Col md={4}>
                            <FormGroup className="">
                                <Label for="exampleExpediente" className="mr-sm-2"><b>Numero de Expediente</b></Label>
                                <Input type="text" name="record" id="exampleExpediente" placeholder="Introduce expediente" onChange={inputHandler} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="">
                                <Label for="exampleActor" className="mr-sm-2"><b>Nombre del Actor</b></Label>
                                <Input type="text" name="plaintiff" id="exampleActor" placeholder="Introduce un Nombre" onChange={inputHandler} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="">
                                <Label for="exampleDemandado" className="mr-sm-2"><b>Nombre del Demandado</b></Label>
                                <Input type="text" name="defendant" id="exampleDemandado" placeholder="introduce un nombre" onChange={inputHandler} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className='d-flex flex-row-reverse'>
                <Button text='Buscar' template='btn btn-primary m-3' handler={sendData} />
            </div>
        </div>
    )
}

export default SearchForm