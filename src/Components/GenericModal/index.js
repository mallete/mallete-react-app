/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './style.scss'
import { Flip, toast } from 'react-toastify'
import moment from 'moment'

const { REACT_APP_API_ENDPOINT } = process.env

const GenericModal = (props) => {
    const updateUseUrl = `${REACT_APP_API_ENDPOINT}/tasks`
    const authenticationToken = localStorage.getItem('authenticationToken')
    const {
        
        actionButton,
        actionButtonClasses,
        className,
        modalBody,
        trial,
        record
    } = props;
    const ModalBodyContent = props.modalBody
    const [modal, setModal] = useState(false)
    const [formData, setFormData] = useState({ title: '', content: '', limitDate: '', assignee: '' })
    const [taskAlreadyExist, setTaskAlreadyExist] = useState(false)
    const toggle = () => setModal(!modal)

    const submitHandler = () => {
        console.log('SubmitHanlderTriggered')
        console.log(formData)
         //Aqui va el POST axios
         console.log(moment(formData.limitDate))
         const sendData = {
            ...formData,
            limitDate: moment(formData.limitDate),
            record,
            activeTrial:trial
        }
         axios({
            url: updateUseUrl,
            method: "post",
            headers: {
              authorization: authenticationToken
            },
            data: sendData
          })
          .then(function (response) {
            console.log(response)
            //Si es success llamar
            toast.success('Tarea creada exitosamente',
                    {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                        draggable: true,
                      progress: undefined,
                      transition: Flip
                    })
            toggle()

        }) 
        //Mandar toast de que algo salio mal
        .catch(function (error) {
            console.log(error)
            toast.error('Ups! algo salio mal, intentalo de nuevo',
                {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                    draggable: true,
                  progress: undefined,
                  transition: Flip
                })
        })
    }

    /**
     * Crear Funcion updateDataHandler para hacer patch de la data
     */
    const updateDataHandler = () => {
        axios.patch((updateUseUrl))
    }
    
    useEffect(() => {
        setTaskAlreadyExist((formData.id))
        //En el efecto cuando carga [], checar si se mando una propiedad taskId
        //Si existe el taskId entonces intentar traer el tasks para popular la info -> /tasks/:id
        //
        //si encuentra la tarea, set en true taskAlreadyExist
        //acutalizar formData para que el form popule la data

        setFormData({ title:"este es un title", content:"un content" })
    }, [])

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