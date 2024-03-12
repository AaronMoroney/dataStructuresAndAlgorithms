import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from './redux/actions/userActions';
import './App.css';
import { RootState } from './redux/reducers';

function App() {
  // Use useDispatch to dispatch actions
  const dispatch = useDispatch();

  // Use useSelector to get the count from Redux state
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(incrementCounter())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrementCounter())}>
          Decrement
        </button>
        <p>Count is {count}</p>
      </div>
    </>
  );
}

export default App;