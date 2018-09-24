// Actions
const LOGIN   = 'containers/App/LOGIN';
const LOGOUT  = 'containers/App/LOGOUT';

const initialState ={
    user: null,
    isUserLoggedIn: false
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
        return {
            user: action.user,
            isUserLoggedIn: true
        }
    case LOGOUT:
        return {
            ...initialState
        }
    default: return state;
  }
}

// Action Creators
export function loginUser(user) {
  return { 
        type: LOGIN,
        user
    };
}

export function logoutUser() {
    return { 
          type: LOGOUT
      };
  }