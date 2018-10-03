import React from 'react';
import {FormControl, HelpBlock} from 'react-bootstrap'


export default function Input({help, ...props }) {
    return (
        <React.Fragment>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </React.Fragment>
    );
  }