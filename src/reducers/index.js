import counterReducer from './counter';
import loggedReducer from './isLogged';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    // We can write 
    // counterReducer
    // Which also means
    // counterReducer: counterReducer
    // OR
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;