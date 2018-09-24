import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock, Col} from 'react-bootstrap';


export function FieldGroupHorizontal({ id, label, help, validationState, ...props }) {
    return (
      <FormGroup controlId={id} validationState={validationState}>
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
        <FormControl.Feedback />
      </Col>
      </FormGroup>
    );
  }

  