# Redux 

- https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow

## Redux Fundamentals, part 1 - overview

-*what is Redux?*

- Redux is a pattern and library for managing and updating application state, using events called "actions".
- It is a centralized store for state that needs to be used across your entire application
- With rules to ensure that the state can only be updated in a predictable fashion

-*why should I use Redux*

- Redux helps you manage "global" state - state that is needed across many parts of your application.
- Redux make it easier to understand when, where, why, and how the state in your application is being updated

-*when should I use Redux*

- Large amounts of app state, that is needed in many places in the app
- App state is updated frequently over time
- The logic in your app is complex
- The app is medium or large in size

## Redux Basics

  1.**STORE** The center of any redux application is the store. The store is the container where your application state is held:
  - **you must never directly modify or change the state that is inside the store**

  2. **ACTION (to change state)**, you must dispatch a plain *action* to the store:
  - the action describes that something just happened in the application
  - you dispatch an action to the store to tell it what just happened

  3. **REDUCER - calculate the change**:
  - When an action is dispatched, the store runs the root reducer function, and lets it calculate the new state based on the old state and the action

  4. **SUBSCRIBERS**:
  - Finally, the store notifies subscribers that the state has been updated so the UI can be updated with the new data.

## Redux Application Documentation

This documentation provides an overview and explanation of a basic Redux application.

## Code Structure

### `App.js`

```jsx
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
```

- App.js is the main component of the application.
- It uses the useDispatch and useSelector hooks from React Redux to interact with the Redux store.
- It renders buttons for incrementing and decrementing the count, and displays the current count.

- userActions.ts

```javascript
// Action Types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// Action Creators
export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    };
};

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    };
};
```

- userActions.ts defines action types and action creators for incrementing and decrementing the counter.


- CounterReducer.ts

```javascript
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/userActions';

// Define Action Types
type IncrementAction = {
    type: typeof INCREMENT_COUNTER;
};

type DecrementAction = {
    type: typeof DECREMENT_COUNTER;
};

// Union Action Type
type CounterActionTypes = IncrementAction | DecrementAction;

// This interface defines the shape of the state managed by this reducer.
interface CounterState {
    count: number;
}

// Initial state of the counter
const initialState: CounterState = {
    count: 0
};

// Counter reducer function with TypeScript annotations
const counterReducer = (state = initialState, action: CounterActionTypes): CounterState => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNTER:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default counterReducer;
```

- counterReducer.ts defines the reducer function responsible for handling actions related to the counter.
- It defines the initial state and handles actions to increment and decrement the count.

```javascript
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// The root reducer's state type
export interface RootState {
    counter: ReturnType<typeof counterReducer>;
    // Other state types would go here
}

// Combine reducers
const rootReducer = combineReducers({
    counter: counterReducer
    // other reducers would be added here
});

export default rootReducer;
```

- index.ts combines all the reducers into the root reducer.
- It defines the RootState interface to represent the overall shape of the Redux store.

```javascript
import { createStore, Store } from 'redux';
import rootReducer, { RootState } from './reducers';

// Configure the store
const configureStore = (): Store<RootState> => {
    const store = createStore(
        rootReducer,
    );

    return store;
};

export default configureStore();
```

- store.ts configures and exports the Redux store using the root reducer and the RootState interface.


## DataFlow

- This Diagram represents how 

    1. Actions are dispatched in response to user interactions ('e.g "click" events)
    2. The store runs the reducer function to calculate the new state
    3. The UI reads the new state to display the new values

![Redux Data Flow Diagram](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)