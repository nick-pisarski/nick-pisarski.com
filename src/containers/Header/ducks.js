// Actions
const LOAD   = 'my-app/Header/LOAD';
const CREATE = 'my-app/Header/CREATE';
const UPDATE = 'my-app/Header/UPDATE';
const REMOVE = 'my-app/Header/REMOVE';

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