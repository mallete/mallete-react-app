import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './style.scss'

const ModalForm = (props) => {
    const {inputHandler,formData} = props
    const {title, content } = formData
    return (
        <> 
            <Form>
                <FormGroup >
                    <Label for="exampleUrl">Titulo</Label>
                    <Input
                    className="modal-input"
                    type="text"
                    name="title"
                    id="exampleUrl"
                    placeholder=""
                    onChange={inputHandler}
                    value={formData.title}
                    />
                </FormGroup> 
                <FormGroup>
                    <Label for="exampleText">Descripción</Label>
                    <Input
                    className="modal-input" 
                    type="textarea" 
                    name="content" 
                    id="exampleText"
                    placeholder="Describa la tarea  "
                    onChange={inputHandler}
                    value={content}
                    />
                    </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                        className="modal-input"
                        type="date"
                        name="limitDate"
                        id="exampleDate"
                        placeholder="date placeholder"
                        onChange={inputHandler}
                    />
                </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        className="modal-input"
                        type="email"
                        name="assignee"
                        id="exampleEmail"
                        placeholder="@email"
                        onChange={inputHandler}
                    />
                </FormGroup>
            </Form>
        </>
    )
}

export default ModalForm;