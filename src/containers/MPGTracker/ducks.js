import Axios from 'axios';
import moment from 'moment';

// Actions
const LOAD_START = 'containers/MPGTracker/LOAD_START';
const LOAD_SUCCESS = 'containers/MPGTracker/LOAD_SUCCESS';
const LOAD_FAIL = 'containers/MPGTracker/LOAD_FAIL';
const RESET_LOAD_ATTEMPTS = 'containers/MPGTracker/RESET_LOAD_ATTEMPTS';

const initialState = {
  loading: false,
  loadAttempts: 0,
  hasError: null,
  error: null,
  data: [],
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
    default:
      return state;
  }
}

const DATA_URL = '/mpgs';

const createAction = (type, data) => {return {type, ...data}};

// Action Creators
export function loadMPGList() {
  return (dispatch, getState) => {
    dispatch({ type: LOAD_START });
    Axios.get(DATA_URL).then(res => {
          res.data.forEach(element => {
              element.created = moment(element.created).format("MM/DD/YYYY")
          });
          dispatch(createAction(LOAD_START, {data: res.data}))
      })
      .catch(err => dispatch(createAction(LOAD_FAIL, {error: err})));
  }
}

export function resetLoadAttempts(){
  return createAction(RESET_LOAD_ATTEMPTS)
}

