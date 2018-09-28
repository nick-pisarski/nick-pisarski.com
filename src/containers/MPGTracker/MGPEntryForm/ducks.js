
import {createAction} from '@store/actions';
import _ from 'lodash';

const SUBMIT_START = 'MPGEntryForm/SUBMIT_START';
const SUBMIT_SUCCESS = 'MPGEntryForm/SUBMIT_SUCCESS';
const SUBMIT_FAIL = 'MPGEntryForm/SUBMIT_FAIL';
const CHANGE_FIELD = 'MPGEntryForm/CHANGE_FIELD';
const FORM_VALIDATED = 'MPGEntryForm/FORM_VALIDATED';
const RESET = 'MPGEntryForm/RESET';

const initialState = {
    fields: {
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
    formValidated: false,
    formValid: false,
    error: null,
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_START:            
            return {
                ...state,
                loading: true
            }
        case SUBMIT_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case SUBMIT_FAIL:
            console.log(SUBMIT_FAIL, action.error);
            return {
                loading: false,
                error: action.error,
                ...state
            }        
        case CHANGE_FIELD:
            console.log(CHANGE_FIELD, action.fields)
            return {
                ...state,
                fields: action.fields,
                formValidated: false,
            } 
        case FORM_VALIDATED:
            console.log(FORM_VALIDATED, action)

            return {
                ...state,
                fields: action.fields,
                formValidated: true,
                formValid: action.formValid
            }
        case RESET:
            return {
                ...initialState
            }

        default:
            return state;
    }
}

// Action Creators

/**
 * Action to handle a field change
 * @param {string} field - name of field to change
 * @param {string} value - value to change field to
 */

 export function handleFieldChange(field, value){
    return (dispatch, getState) => {
        const state = getState().mpgTracker.form;
        const fields = JSON.parse(JSON.stringify({...state.fields}))

        fields[field].value = fields[field].type === 'number' ? parseFloat(value) : value;

        _.forEach(fields, field => {
            field.valid = null;
            field.error = null;
        })

        dispatch(createAction(CHANGE_FIELD, {fields}))
    }
 }

 /**
 * Action to handle a field change
 */

export function validateForm(fields, formValid){
    return createAction(FORM_VALIDATED, {fields, formValid});
 }

 /**
  * Resets the state of the form to the default state
  */

 export function resetForm(){
     return createAction(RESET);
 }

 /**
  * Submits the form **WIP
  */

 export function submitForm(){     
     return (dispatch, getState) => {
        const data = _.mapValues(getState().mpgTracker.form.fields, 'value');
        console.log(SUBMIT_SUCCESS, data);
         dispatch(createAction(SUBMIT_SUCCESS, {data}));
         dispatch(resetForm());
        };
 }
