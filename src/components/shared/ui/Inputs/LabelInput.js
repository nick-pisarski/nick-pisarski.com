import React from 'react';
import Input from './Input';

import { FormGroup, ControlLabel, Col } from 'react-bootstrap';

/**
 * Renders Input Component with a label
 * 
 * @param {bool?} horizontal Default: false, renders a labels to the left of the input
 * @param {string} id Id for the component
 * @param {string} label Label for the inpt
 * @param {string?} help Help message for input
 * @param {number?} labelSize Col Size of the label Default: 3
 * @param {string|function?} validationState Representing the state of validation. Possible values: 'error', 'success', 'warning' or null
 * 
 */
function LabelInput({horizontal = false, id, label, help, validationState, labelSize, ...props }){
    if(horizontal){
        return (
        <FormGroup controlId={id} validationState={validationState}>
            <Col componentClass={ControlLabel} sm={labelSize || 3}>
                {label}
            </Col>
            <Col sm={labelSize ? 12-labelSize : 9}>
                <Input help={help} {...props}/>
            </Col>
        </FormGroup>
        )
    }

    return (
    <FormGroup controlId={id} validationState={validationState}>
      <ControlLabel>{label}</ControlLabel>
        <Input help={help} {...props}/>
      </FormGroup>
    )
}

export default LabelInput
