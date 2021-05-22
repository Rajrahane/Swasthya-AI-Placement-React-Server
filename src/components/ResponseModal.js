import React from 'react'
import {Modal,Button} from 'react-bootstrap'

function ResponseModal(props){
    return(
        <Modal
            centered
            backdrop='static'
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Response From Server</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.data}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={props.onHide}
                >Close</Button>
            </Modal.Footer>
        </Modal>
    )

}
export default ResponseModal