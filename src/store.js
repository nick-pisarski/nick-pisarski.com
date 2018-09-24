import { createStore, combineReducers, compose } from 'redux'

/**
 *  Consider ReduxThunk !!
 */
// import ReduxThunk from 'redux-thunk'

//reducers
import containerReducers from './containers/reducers';
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
    app: AppReducer,
    ...containerReducers
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(combineReducers({app: AppReducer}), applyMiddleware(ReduxThunk))
export default createStore(combineReducers(reducers), composeEnhancers())