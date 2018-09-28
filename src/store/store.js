import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

//reducers
import containerReducers from '../containers/reducers';

// for redux dev tools
const composeEnhancers = (process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default createStore(combineReducers(containerReducers), composeEnhancers(applyMiddleware(ReduxThunk)))