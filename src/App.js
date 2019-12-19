import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

//setup action
const actionINC = () => {
  return {
    type: 'INCREMENT',
    payload: null
  }
}

// setup reducer
const initialState = {
  number: 0
}
function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        number: state.number + 1
      }
    case 'DECREMENT':
      return {
        number: state.number - 1
      }
    default:
      return state
  }
}

// init store
let store = createStore(counter)


// listen value global state, with `store.subscribe`
// global state can be access to `store.getState()`
store.subscribe(() => {
  console.log(store.getState().number)
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <h1>{}</h1>
      <button onClick={()=> store.dispatch(actionINC())}>Increment</button>
      </header>
    </div>
  );
}

export default App;
