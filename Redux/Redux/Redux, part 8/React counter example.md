# React Counter Example

```javascript
const counter = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const Counter = ({value, onIncrement, onDecrement}) => {
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
}

import {createStore} from 'redux';

const store = createStore(counter);

const render = () => {
    ReactDOM.render(
        <counter 
            value={store.getState()}
            onIncrement{() => {
                store.dispatch({
                    type: 'INCREMENT'
                })
            }}
            onDecrement{() => {
                store.dispatch({
                    type: 'DECREMENT'
                })
            }}
        >
        document.getElementById('root);
    );
};

store.subscribe(render);
render();
```