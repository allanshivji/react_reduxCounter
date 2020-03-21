import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import allReducers from './reducers';

// To connect store with our entire application
import { Provider } from 'react-redux';

// *****************************************************************************************************
// 1st we create store
import { createStore } from 'redux';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// STORE - Globalized state of application


// *****************************************************************************************************
// ACTION - Describes what we wanna do. For example in counter action would be to increment
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// *****************************************************************************************************
// REDUCER - Checks what action we did and based on the action it will modify the store
// Also we set the initial state


// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;

//         case 'DECREMENT':
//             return state - 1;
//     }
// };

// let store = createStore(counter);


// *****************************************************************************************************
// Display it in console
// store.subscribe(() => console.log(store.getState()));

// *****************************************************************************************************
// DISPATCH - Where we execute that action

// store.dispatch(increment());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);