import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>THE 100 COUNTER : {counter}</h1>
      <button onClick={() => dispatch(increment(100))}>+</button>
      <button onClick={() => dispatch(decrement(100))}>-</button>

      {isLogged ? <h3>Valuable Information you shouldnt see </h3> : ''}
    </div>
  );
}

export default App;

{
  /* <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button> */
}
