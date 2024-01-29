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
   -**you must never directly modify or change the state that is inside the store**

   2. **ACTION (to change state)**, you must dispatch a plain *action* to the store:
   - the action describes that something just happened in the application
   - you dispatch an action to the store to tell it what just happened

   3. **REDUCER - calculate the change**:
   - When an action is dispatched, the store runs the root reducer function, and lets it calculate the new state based on the old state and the action

   4. **SUBSCRIBERS**:
   - Finally, the store notifies subscribers that the state has been updated so the UI can be updated with the new data.

## Example - State, Actions and Reducers

- For this small app, we are going to track a single number with a currentvalue of a counter

-**1. We start by defining the initial state of the app:**

```javascript
// Define an initial state value for the app
const initialState = {
  value: 0
}
```

-**2. Then we define a reducer function:**

- The reducer function takes two arguments, the current state, and an action object describing what happened.

```javascript
function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
```

- Action objects always have an action type field that specifies the type of action that occurred.
- The define a action type, you provide a string that acts as a unique name for the action.
- in this case we use the string "counter/incremented", and the second half to describe what happebed (incremented)

-**3. We create a store instance by calling the Redux library, createStore API:**

```javascript
// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = Redux.createStore(counterReducer)
```

- We pass the reducer function to createStore, which uses the reducer function to generate the initial state, and any updates

-**4. UI**

- In any application, the UI will show existing state on screen.

```javascript
// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById('value')

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState()
  valueEl.innerHTML = state.value.toString()
}

// Update the UI with the initial data
render()
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render)
```

- ^ a function that knows how to get the latest state from the Redux store using the store.getState() method, then takes that value and updates the UI to show it.
- Redux store lets us call store.subscribe() and pass a subscriber callback function that will be called every time the store is updated.
- So, we can pass our render function as the subscriber, and know that each time the store updates, we can update the UI with the latest value.

-**5. Dispatching Actions**

- we need to respond to user input by creating action objects that describe what happened, and dispatching them to the store.

- When we call store.dispatch(action), the store runs the reducer, calculates the updated state, and runs the subscribers to update the UI.

```javascript
// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'counter/incremented' })
})

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch({ type: 'counter/decremented' })
})

document
  .getElementById('incrementIfOdd')
  .addEventListener('click', function () {
  // We can write logic to decide what to do based on the state
  if (store.getState().value % 2 !== 0) {
   store.dispatch({ type: 'counter/incremented' })
  }
})

document
  .getElementById('incrementAsync')
  .addEventListener('click', function () {
    // We can also write async logic that interacts with the store
   setTimeout(function () {
    store.dispatch({ type: 'counter/incremented' })
   }, 1000)
})
```

- We'll dispatch an action that will make to reducer add 1 to the current value, or subtract 1 from the current value.
- We can also write code that only dispatches an action if a certain condition is true, or write some async code that dispatches an action after a delay.

## DataFlow

- This Diagram represents how 

    1. Actions are dispatched in response to user interactions ('e.g "click" events)
    2. The store runs the reducer function to calculate the new state
    3. The UI reads the new state to display the new values

![Redux Data Flow Diagram](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)