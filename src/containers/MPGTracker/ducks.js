// Actions
const LOAD   = 'App/MPGTracker/LOAD';
const CREATE = 'App/MPGTracker/CREATE';
const UPDATE = 'App/MPGTracker/UPDATE';
const REMOVE = 'App/MPGTracker/REMOVE';

const initialState = {
  
};

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(payload) {
  return { type: CREATE, payload };
}

export function updateWidget(payload) {
  return { type: UPDATE, payload };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}

// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }