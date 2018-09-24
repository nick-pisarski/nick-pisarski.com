// Actions
const LOGIN   = 'containers/Header/LOGIN';

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