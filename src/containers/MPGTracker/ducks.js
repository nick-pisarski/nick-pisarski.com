// Actions
const LOAD   = 'App/MPGTracker/LOAD';
const CREATE = 'App/MPGTracker/CREATE';
const UPDATE = 'App/MPGTracker/UPDATE';
const REMOVE = 'App/MPGTracker/REMOVE';

const initialState = {
  mpgList: null,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD: 
      return {
        mpgList: action.mpgList
      }
    default: return state;
  }
}

// Action Creators
export function loadMPGList() {
  return { 
    type: LOAD,
    mpgList: [],
 }
}
