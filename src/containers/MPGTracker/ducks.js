import Axios from 'axios';
import moment from 'moment';

// Actions
const LOAD = 'containers/MPGTracker/LOAD';
const LOAD_START = 'containers/MPGTracker/LOAD_START';
const LOAD_SUCCESS = 'containers/MPGTracker/LOAD_SUCCESS';
const LOAD_FAIL = 'containers/MPGTracker/LOAD_FAIL';

const initialState = {
  loading: false,
  hasError: null,
  error: null,
  data: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
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
        error: action.error
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    default:
      return state;
  }
}

const DATA_URL = '/mpg';

// Action Creators
export function loadMPGList() {
  return(dispatch, getState) => {
    dispatch({ type: LOAD_START });
    Axios.get(DATA_URL)
      .then(res => {
          res.data.forEach(element => {
              element.created = moment(element.created).format("MM/DD/YYYY")
          });
          dispatch({
            type: LOAD_SUCCESS,
            data: res.data
          })
      })
      .catch(err => dispatch({type: LOAD_FAIL, error: err}));
}
}