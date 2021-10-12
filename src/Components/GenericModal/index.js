/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './style.scss'

const GenericModal = (props) => {
    const {
        actionButton,
        actionButtonClasses,
        className,
        modalBody
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <div onClick={toggle} className={actionButtonClasses}>
                {actionButton}
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Añadir notificación</ModalHeader>
                <ModalBody>
                    {
                        modalBody
                    }
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-modal-save" onClick={toggle}>Guardar</Button>{' '}
                    <Button className="btn-modal-cancel" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default GenericModal;