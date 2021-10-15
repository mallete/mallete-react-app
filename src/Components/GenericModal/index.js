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
    const [extraClass,setExtraClass] = useState("")
    const {
        task = {},
        actionButton,
        actionButtonClasses,
        className,
        modalBody,
        record,
        trialId,
        bulletin,
    } = props;
    const ModalBodyContent = props.modalBody
    const [modal, setModal] = useState(false)
    const { title = '', content = '', limitDate =  '', assignee= '' } = task
    const [_id,setId] = useState(task._id)
    const [formData, setFormData] = useState({ title,content,limitDate,assignee})
    const [taskAlreadyExist, setTaskAlreadyExist] = useState(false)
    const toggle = () => setModal(!modal)

    const submitHandler = () => {

         const sendData = {
            ...formData,
            limitDate: moment(formData.limitDate),
            record,
            activeTrial:trialId, 
            bulletin: bulletin 
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

            setId( response.data.data.tasks._id)
            setExtraClass("active-task")
            toggle()
            
        }) 
        //Mandar toast de que algo salio mal
        .catch(function (error) {
            toast.error('Ups! algo salio mal, intentalo de nuevo',
                {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
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
        
        const sendData = {
            ...formData,
            limitDate: moment(formData.limitDate),
            record,
            activeTrial:trialId, 
            bulletin: bulletin 
        }
        const patchUrl = `${REACT_APP_API_ENDPOINT}/tasks/${_id}`
        axios({
            url: patchUrl ,
            method: "patch",
            headers: {
              authorization: authenticationToken
            },
            data: sendData
          })
          .then(function (response) {

            //Si es success llamar
            toast.success('Tarea actualizada exitosamente',
                    {
                      position: 'top-right',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                        draggable: true,
                      progress: undefined,
                      transition: Flip
                    })
            toggle()

        }) 
        //Mandar toast de que algo salio mal
        .catch(function (error) {
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
    
    const selectMethod = (event) =>{
        if(_id)
        updateDataHandler()
        else
        submitHandler()
    }

    const inputHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <div onClick={toggle} className={`${actionButtonClasses} ${extraClass}`}>
                {actionButton}
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Añadir notificación</ModalHeader>
                <ModalBody>
                        {React.cloneElement(modalBody, {inputHandler, formData})}
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-modal-save" onClick={selectMethod}>Guardar</Button>{' '}
                    <Button className="btn-modal-cancel" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default GenericModal;