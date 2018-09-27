import Axios from 'axios';
import moment from 'moment';
import {createAction} from '@store/actions';

// Actions
const LOAD_START = 'MPGTracker/LOAD_START';
const LOAD_SUCCESS = 'MPGTracker/LOAD_SUCCESS';
const LOAD_FAIL = 'MPGTracker/LOAD_FAIL';
const RESET_LOAD_ATTEMPTS = 'MPGTracker/RESET_LOAD_ATTEMPTS';
const TOGGLE_ADD_FORM = 'MPGTracker/TOGGLE_ADD_FORM';

const initialState = {
  loading: false,
  loadAttempts: 0,
  hasError: null,
  error: null,
  showAddForm: false,
  data: [],
  car: {
    manufacturer:"Volkswagen",
    manufacturerCode:"VW",
    model: 'Passat',
    year: 2015
  }
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  const attempts = state.loadAttempts + 1;
  switch (action.type) {
    // do reducer stuff
    case LOAD_START:
      return {
        ...state,
        loading: true
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.error,
        loadAttempts: attempts
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        loadAttempts: attempts
      }
    case RESET_LOAD_ATTEMPTS:
      return {
        ...state,
        loadAttempts: 0
      }
    case TOGGLE_ADD_FORM:
      return {
        ...state,
        showAddForm: action.showAddForm
      }
    default:
      return state;
  }
}

const DATA_URL = '/mpgs';

// Action Creators
export function loadMPGList() {
  return (dispatch, getState) => {
    dispatch({ type: LOAD_START });
    Axios.get(DATA_URL).then(res => {
          res.data.forEach(element => {
              element.created = moment(element.created);
          });
          dispatch(createAction(LOAD_SUCCESS, {data: res.data}))
      })
      .catch(err => dispatch(createAction(LOAD_FAIL, {error: err})));
  }
}

export function resetLoadAttempts(){
  return createAction(RESET_LOAD_ATTEMPTS)
}

export function toggleAddForm(){
  return (dispatch, getState) => {
    const state = getState().mpgTracker;
    return dispatch(createAction(TOGGLE_ADD_FORM, {showAddForm: !state.showAddForm} ))
  }
}