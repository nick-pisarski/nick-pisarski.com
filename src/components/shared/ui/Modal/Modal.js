import React from 'react';
import { Modal as BSModal} from 'react-bootstrap';

export default function modal(props){
        return (
        <BSModal show={props.show} onHide={props.handleHide}>
            <BSModal.Header closeButton={props.closeButton}>
                <BSModal.Title>{props.title}</BSModal.Title>
            </BSModal.Header>

            <BSModal.Body>{props.children}</BSModal.Body>

            <BSModal.Footer>
                {props.footer}
            </BSModal.Footer>
        </BSModal>
        );
}