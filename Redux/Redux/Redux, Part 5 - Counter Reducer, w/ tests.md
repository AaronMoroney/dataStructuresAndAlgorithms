```javascript
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            state + 1;
        case 'DECREMENT':
            state - 1;
        default:
            return state;
    }
}

// https://github.com/mjackson/expect
expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
    counter(2, {type: 'DECREMENT'})
).toEqual(1);

expect(
    counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
    counter(1, {type: 'SOMETHING ELSE'})
).toEqual(1);

expect(
    counter(undefined, {})
).toEqual(0);

console.log('Tests passed');
```