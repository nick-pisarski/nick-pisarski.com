import appReducer from './App/ducks';
import mpgTrackerReducer from './MPGTracker/ducks';

export default {
    app: appReducer,
    mpgTracker: mpgTrackerReducer
}