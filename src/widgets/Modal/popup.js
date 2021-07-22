import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import './popup.css';


const PopUp = (props)=>{
    return(
        <Modal
            show={props.show}
            
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName={props.status}
        >
        <Modal.Header className="justify-content-center">
            <Modal.Title id="contained-modal-title-vcenter">
                {props.data.remark}
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <h4>{props.data.message}</h4>
            
        </Modal.Body>


            <Modal.Footer className="justify-content-center btn-md">
            <Button variant={props.status} onClick={() => props.handle({ showModal: false })}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
    )
}


export default PopUp;