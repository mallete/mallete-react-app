import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './style.scss'
import moment from 'moment';
const ModalForm = (props) => {
    const {inputHandler,formData} = props
    const { title,content,limitDate,assignee} = formData
    const dateFormat = 'MM/DD/YYYY'
    const formatedDate= moment(limitDate).format(dateFormat)
    

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
                    value={title}
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
                        value={limitDate}
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
                        value={assignee}
                    />
                </FormGroup>
            </Form>
        </>
    )
}

export default ModalForm;