import { createStore, combineReducers } from 'redux'

/**
 *  Consider ReduxThunk !!
 */
// import ReduxThunk from 'redux-thunk'



const initialState = {}
const AppReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      return state
    default:
      return state
  }
}

const reducers = {
    app: AppReducer
}

// export default createStore(combineReducers({app: AppReducer}), applyMiddleware(ReduxThunk))
export default createStore(combineReducers(reducers))