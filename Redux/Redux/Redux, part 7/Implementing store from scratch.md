# Implementing create store from scratch

```javascript
const createStore = (reducer) => {
    //store holds the current state 
    let state;
    //keep track of all chnaged listeners
    let listeners = [];

    //returns current value of the state variable
    const getState = () => state;

    //get state, combined with dispath & subscribe is what we call the redux store

    //only way to change the internal state
    const dispatch = (action) => {
        //calculates new state, w current state & action dispatched
        state = reducer(state, action);
        //after update, notifiy every listener by calling it 
        listeners.forEach(lsitener => listener());
    };

    // can be called many times
    const subscribe = (listener) => {
        //when it is called, we want to push into the array
        listeners.push(listener);
        //unsubscribe
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };
    //dummy dispatch to get the initial state
    dispatch({});

    return { getState, dispatch, subscribe };
};

```