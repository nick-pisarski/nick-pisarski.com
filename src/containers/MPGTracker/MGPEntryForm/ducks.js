
import {createAction} from '@store/actions';
import _ from 'lodash';

const SUBMIT = 'MPGEntryForm/SUBMIT';
const CHANGE_FIELD = 'MPGEntryForm/CHANGE_FIELD';
const FORM_VALIDATED = 'MPGEntryForm/FORM_VALIDATED';
const RESET = 'MPGEntryForm/RESET';

const initialState = {
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
    formValidated: false,
    formValid: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT:
            console.log(SUBMIT, state);
            return {
                ...state
            }
        
        case CHANGE_FIELD:
            console.log(CHANGE_FIELD, action.form)
            return {
                ...state,
                form: action.form,
                formValidated: false,
            } 
        case FORM_VALIDATED:
            console.log(FORM_VALIDATED, action)

            return {
                ...state,
                form: action.form,
                formValidated: true,
                formValid: action.formValid
            }
        // TODO: something is happening here where initial state is getting altered and saved
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
        const form = {...state.form}

        const f = form[field];
        f.value = f.type === 'number' ? parseFloat(value) : value;

        _.forEach(form, field => {
            field.valid = null;
            field.error = null;
        })
        console.log('Action - handleFieldChange', field, value );
        dispatch(createAction(CHANGE_FIELD, {form}))
    }
 }

 /**
 * Action to handle a field change
 */

export function validateForm(form, formValid){
    return createAction(FORM_VALIDATED, {form, formValid,});
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
         dispatch(createAction(SUBMIT));
         dispatch(resetForm());
        };
 }