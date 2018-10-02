// Third Party
import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';
import _ from 'lodash';

// Compnonents and Constants
import LabelInput from '@shared/ui/Input/LabelInput'

import Modal from '@shared/ui/Modal/Modal';
import { NON_ZERO_ERROR, EMPTY_VALUE_ERROR } from '@constants/errors';

//CSS
import './MPGEntryForm.css';

const initialState = {
    fields: {
        miles: {
            value: 0,
            type: 'number',
            label: 'Miles Driven',
            validState: null,
            error: null,
        },
        gallons: {
            value: 0,
            type: 'number',
            label: 'Gallons Used',
            validState: null,
            error: null,
        },
        total: {
            value: 0,
            type: 'number',
            label: 'Total Cost',
            validState: null,
            error: null,
        },
        notes: {
            value: '',
            type: 'text',
            label: 'Notes',
            validState: null,
            error: null,
        }
    },
    error: null,
    loading: false
}

/**
 * Entry From for entering in an MPG
 */

class MPGEntryForm extends Component {
    
    constructor(props){
        super(props);
        this.state = _.cloneDeep(initialState);
    }

    /**
     * Handles the submitting of the form. Checks to if the form is valid and calls
     * the on onFormSubmitted callback and closes the form. If it is not valid, then 
     * the callback is NOT called and the form stays open. 
     */
    handleSubmit = () => {
        const values = _.mapValues(this.state.fields, 'value');
        if(this.isFormValid()) {
            if(this.props.onFormSubmitted) this.props.onFormSubmitted(values)
        }           
        console.log('Submitted Data: ', values) 
    }  

    /**
     * Handles the change of a field
     * @param {string} field - field to change
     * @param {string|number} value - value to update the field with
     * 
     */
    handleFieldChange = (field, value) => {
        const fields = _.cloneDeep({...this.state.fields});

        fields[field].value = fields[field].type === 'number' ? parseFloat(value) : value;    
        
        const valid = this.isFieldValid(field, fields[field].value);
        if(valid === true){
            fields[field].validState = null
            fields[field].error = null
        } else {
            fields[field].validState = valid.validState
            fields[field].error = valid.error
        }

        this.setState({fields});
    }

    /**
     * Checks to see if every field in the form is valid
     * @returns {bool} form is valid
     */
    isFormValid = () => {
        // get array of validity of each field
        const map = _.map(this.state.fields, (value, key) => this.isFieldValid(key, value.value))
        return _.reduce(map, (currentValid, value) => !currentValid || value !== true ? false : true, true)
    }

    /**
     * Checks the validity of a value for a field
     * 
     * @param {string} field - field to check
     * @param {string|number} value - value to check
     * 
     * @return {bool} valid
     */
    isFieldValid = (field, value) => {
        if(['miles', 'gallons', 'total'].indexOf(field) > -1){
            if(!value){
                return {
                    validState: 'error',
                    error: EMPTY_VALUE_ERROR
                }
            }
            if (value < 1) {
               return {
                    validState: 'error',
                    error: NON_ZERO_ERROR
                }
            }
        }
        return true;
    }

    /**
     * Creates inputs for all the fields of the the form
     * 
     * @return {Array} Array of JSX with all the state fields mapped to inputs
     */
    renderFields = () => {
        const {fields} = this.state;
        return _.map(fields, (value, prop) => {
            const field = value;
            const props = {
                key: `key-${prop}`,
                id: `field-${prop}`,
                label: field.label,
                onChange: (event)=> {this.handleFieldChange(prop, event.target.value)},
                value: field.value,
                validationState: field.validState,
            }
            if(field.type === 'text'){
                props.componentClass = "textarea"
                props.placeholder = "Enter notes here.."             
            } else {
                props.min = 0;
                props.type = 'number'
                props.value = parseFloat(field.value);
            }

            if(field.error){
                props.help = field.error;
            }
            return (<LabelInput horizontal={true} {...props}/>)
        })
    }

    render(){        
        return (
            <Modal 
                title="Add New Entry"
                show={this.props.show} 
                handleHide={() => this.props.handleHide()} 
                footer={<Button onClick={this.handleSubmit}>Submit</Button>}
                closeButton
            >
                <Form horizontal> {this.renderFields()} </Form>
            </Modal>
            
        )
    }
}

export default MPGEntryForm;