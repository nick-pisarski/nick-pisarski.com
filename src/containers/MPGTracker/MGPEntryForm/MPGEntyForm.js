// Third Party
import React, { Component } from "react";
import { connect } from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import _ from 'lodash';

// Compnonents and Constants
import {FieldGroupHorizontal} from './FormComponents';
import Modal from '@shared/ui/Modal/Modal';
import { NON_ZERO_ERROR } from '@constants/errors';

// Actions
import { validateForm, handleFieldChange, resetForm, submitForm } from "./ducks";

//CSS
import './MPGEntryForm.css';


// TODO Need to look into triggering a rerender of the components. and for them to use deep comparison

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
        const fields = {...this.props.fields};
        let valid = true;
        _.forEach(['miles', 'gallons', 'total'], prop => {
            if (parseFloat(fields[prop].value) < 1) {
                fields[prop].valid = 'error';
                fields[prop].error = NON_ZERO_ERROR;
                valid = false;
            }
        })

        // update the redux state
        this.props.validate(fields, valid);
        return valid;
    }
    
    renderFields = () => {
        const {fields} = this.props;
        return _.map(_.keys(fields), (prop) => {
            const field = fields[prop];
            const props = {
                key: `key-${prop}`,
                id: `field-${prop}`,
                type: field.type,
                label: field.label,
                onChange: (event)=> {this.props.handleChange(prop, event.target.value)},
                value: field.value,
                validationState: field.valid,
            }
            if(field.type === 'text'){
                props.componentClass = "textarea"
                props.placeholder = "Enter notes here.."             
            } else {
                props.min = 0;
                props.value = parseFloat(field.value)
            }

            if(field.error){
                props.help = field.error;
            }
            return (<FieldGroupHorizontal {...props}/>)
        })
    }

    render(){
        console.log('modal rendered')
        return (
            <Modal 
                title="Add New Entry"
                show={this.props.show} 
                handleHide={() => {
                    this.props.reset();
                    this.props.handleHide();
                }} 
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
        validate: (fields, valid) => dispatch(validateForm(fields, valid)),
        handleChange: (field, value) => dispatch(handleFieldChange(field, value)),
        reset: () => dispatch(resetForm()),
        submit: () => dispatch(submitForm())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(MPGEntryForm);