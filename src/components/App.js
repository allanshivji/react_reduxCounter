import React from 'react';

// To access a piece of state
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../actions';

function App() {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())} > + </button>
            <button onClick={() => dispatch(decrement())} > - </button>
            {isLogged ? <p>Logged</p> : <p>Not Logged</p>}
        </div>
    )
}

export default App;