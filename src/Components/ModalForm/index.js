import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import './style.scss'

const ModalForm = () => {
    return (
        <>
        
            <Form>
                <FormGroup >
                    <Label for="exampleUrl">Titulo</Label>
                    <Input
                    className="modal-input"
                    type="text"
                    name="titulo"
                    id="exampleUrl"
                    placeholder=""
                    />
                </FormGroup> 
                <FormGroup>
                    <Label for="exampleText">Descripción</Label>
                    <Input
                    className="modal-input" 
                    type="textarea" 
                    name="text" 
                    id="exampleText"
                    placeholder="Describa la tarea  "
                    />
                    </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                        className="modal-input"
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        className="modal-input"
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="@email"
                    />
                </FormGroup>
            </Form>
        
        </>
    )
}

export default ModalForm;