import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';
import {FieldGroupHorizontal} from './FormComponents'
import _ from 'lodash';

import './MPGEntryForm.css';

const NON_ZERO_ERROR = 'Value must be greater than 0.'

export default class EntryForm extends Component {
    state = {
        form: {
            miles: {
                value: 0,
                type: 'number',
                label: 'Miles Driven',
                valid: null,
                error: null,
            },
            gallons: {
                value: 0,
                type: 'number',
                label: 'Gallons Used',
                valid: null,
                error: null,
            },
            total: {
                value: 0,
                type: 'number',
                label: 'Total Cost',
                valid: null,
                error: null,
            },
            notes: {
                value: '',
                type: 'text',
                label: 'Notes',
                valid: null,
                error: null,
            }
        },
        formValidated: false
    }
    
    validate = () => {
       const form = {...this.state.form};
       let valid = true;

        _.forEach(['miles', 'gallons', 'total'], prop => {
            if (parseFloat(form[prop].value) < 1) {
                form[prop].valid = 'error';
                form[prop].error = NON_ZERO_ERROR;
                valid = false;
            }
        })
       this.setState({form, formValidated: true});
       return valid;
    }
    
    handleChange = (prop, value) => {
        const form = {...this.state.form}       
        let {formValidated} = this.state;

        form[prop].value = value;
        
        if(formValidated){
            formValidated = false;
            _.forEach(form, field => {
                field.valid = null;
                field.error = null;
            })
        }

        this.setState({form, formValidated});
    }

    handleSubmit = evt => {
        const isValid = this.validate();
        if(isValid)
            console.log(isValid, this.state.form);
    }    

    render(){
        const {form} = this.state;
        const fields = _.map(_.keys(form), (prop) => {
            const field = form[prop];
            const props = {
                key: prop,
                id: prop,
                type: field.type,
                label: field.label,
                onChange: (event)=> {this.handleChange(prop, event.target.value)},
                value:this.state.form[prop].value,
                validationState: this.state.form[prop].valid
            }
            if(field.type === 'text'){
                props.componentClass = "textarea"
                props.placeholder = "Enter notes here.."             
            } else {
                props.min = "0"
            }

            if(field.error){
                props.help = field.error;
            }
            return (<FieldGroupHorizontal {...props}/>)
        })

        return (
            <Form horizontal>
                {fields}
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        )
    }
}