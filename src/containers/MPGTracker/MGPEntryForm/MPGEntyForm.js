import React, { Component } from "react";
import { connect } from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import {FieldGroupHorizontal} from './FormComponents';
import Modal from '@shared/ui/Modal/Modal';

import { NON_ZERO_ERROR } from '@constants/errors';

import _ from 'lodash';

import { validateForm, handleFieldChange, resetForm, submitForm } from "./ducks";


import './MPGEntryForm.css';
//TODO: need to add a bank of errors


class MPGEntryForm extends Component {
    
    onComponentDidUnMount(){
        this.props.reset();
    }

    handleSubmit = evt => {
        const isValid = this.validate();
        if(isValid) {
            // this comes from the props passed in from the MPG Tracker
            this.props.onFormSubmitted();
            this.props.submit();
        }            
    }  

    validate = () => {
        const form = {...this.props.form};
        let valid = true;
        _.forEach(['miles', 'gallons', 'total'], prop => {
            if (parseFloat(form[prop].value) < 1) {
                form[prop].valid = 'error';
                form[prop].error = NON_ZERO_ERROR;
                valid = false;
            }
        })

        // update the redux state
        this.props.validate(form, valid);
        return valid;
    }
    
    renderFields = () => {
        const {form} = this.props;
        return _.map(_.keys(form), (prop) => {
            const field = form[prop];
            const props = {
                key: prop,
                id: prop,
                type: field.type,
                label: field.label,
                onChange: (event)=> {this.props.handleChange(prop, event.target.value)},
                value: form[prop].value,
                validationState: form[prop].valid
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
    }

    render(){
        return (
            <Modal 
                title="Add New Entry"
                show={this.props.show} 
                handleHide={this.props.handleHide} 
                footer={<Button onClick={this.handleSubmit}>Submit</Button>}
                closeButton
            >
                <Form horizontal> {this.renderFields()} </Form>
            </Modal>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.mpgTracker.form
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        validate: (form, valid) => dispatch(validateForm(form, valid)),
        handleChange: (field, value) => dispatch(handleFieldChange(field, value)),
        reset: () => dispatch(resetForm()),
        submit: () => dispatch(submitForm())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(MPGEntryForm);