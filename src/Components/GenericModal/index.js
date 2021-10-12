/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './style.scss'

const GenericModal = (props) => {
    const {
        
        actionButton,
        actionButtonClasses,
        className,
        modalBody,
    } = props;
    const ModalBodyContent = props.modalBody
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({title:"", content:""});
    const [taskAlreadyExist,setTaskAlreadyExist] = useState(false)
    const toggle = () => setModal(!modal);

    const submitHandler = ()=>{
        console.log("SubmitHanlderTriggered")
        console.log(formData)
        


        //Aqui va el POST axios 
        
        //Mandar toast de que algo salio mal

        //Si es success llamar
        toggle()
    }

    /**
     * Crear Funcion updateDataHandler para hacer patch de la data
     */
    const updateDataHandler = ()=>{}
    
    useEffect(()=>{
        //En el efecto cuando carga [], checar si se mando una propiedad taskId
        //Si existe el taskId entonces intentar traer el tasks para popular la info -> /tasks/:id
        //
        //si encuentra la tarea, set en true taskAlreadyExist
        //acutalizar formData para que el form popule la data
        setFormData({title:"este es un title", content:"un content"})

    },[])
    const inputHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData)
    }
    return (
        <div>
            <div onClick={toggle} className={actionButtonClasses}>
                {actionButton}
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Añadir notificación</ModalHeader>
                <ModalBody>
                        {React.cloneElement(modalBody, {inputHandler, formData})}
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-modal-save" onClick={taskAlreadyExist ? updateDataHandler: submitHandler}>Guardar</Button>{' '}
                    <Button className="btn-modal-cancel" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default GenericModal;