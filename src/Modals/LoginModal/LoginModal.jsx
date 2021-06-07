import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const LoginModal = (props) => {
    return (
        <Modal isOpen={props.open} toggle={props.toggle} className={`modal-dialog-centered max_w_1000 modal_b_p_0 ${props.className}`}>
            {/* <ModalHeader toggle={props.toggle}>Modal title</ModalHeader> */}
            <ModalBody>
                {props.children}
            </ModalBody>
        </Modal>
    );

}

LoginModal.defaultProps = {
    open: false,
    toggle: () => { },
    className: ''
}

export default LoginModal;