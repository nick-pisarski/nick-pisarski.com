const SUBMIT = 'MPGEntryFrom/SUBMIT';


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
    formValidated: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT:
            
            break;
    
        default:
            return state;
    }
}