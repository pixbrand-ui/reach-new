import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CommonNotifyModal = (props) => {
    return (
        <Modal isOpen={props.open} toggle={props.toggle} className={`modal_b_p_0 ${props.className}`}>
            {/* <ModalHeader toggle={props.toggle}>Modal title</ModalHeader> */}
            <ModalBody>
                {props.children}
            </ModalBody>
        </Modal>
    );

}

CommonNotifyModal.defaultProps = {
    open: false,
    toggle: () => { },
    className: ''
}

export default CommonNotifyModal;